import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 },
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const subscription = event.data.object as Stripe.Subscription;

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "invoice.payment_succeeded":
        // Retrieve the subscription details if needed
        const subscriptionId = session.subscription as string;
        const customerId = session.customer as string;

        if (subscriptionId && customerId) {
          // Update user
          await prisma.user.updateMany({
            where: { stripeCustomerId: customerId },
            data: {
              stripeSubscriptionId: subscriptionId,
              stripeCurrentPeriodEnd: new Date(
                (session as any).current_period_end
                  ? (session as any).current_period_end * 1000
                  : Date.now(),
              ), // Just update active status basically
            },
          });
          // Or smarter query by userId from metadata if available
          const userId = session.metadata?.userId;
          if (userId) {
            await prisma.user.update({
              where: { id: userId },
              data: { stripeSubscriptionId: subscriptionId },
            });
          }
        }
        break;

      case "customer.subscription.deleted":
        const deletedSubId = subscription.id;
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: deletedSubId },
          data: { stripeSubscriptionId: null }, // Revoke access
        });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err: any) {
    console.error(`Error managing subscription: ${err.message}`);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true });
}
