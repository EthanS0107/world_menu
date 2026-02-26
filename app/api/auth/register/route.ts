import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis." },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Le mot de passe doit contenir au moins 6 caractères." },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Un compte existe déjà avec cet email." },
        { status: 409 },
      );
    }

    // Créer l'utilisateur
    const hashedPassword = await bcrypt.hash(password, 10);
    const trimmedFirstName = firstName?.trim() || null;
    const trimmedLastName = lastName?.trim() || null;
    const name =
      [trimmedFirstName, trimmedLastName].filter(Boolean).join(" ") || null;

    const user = await prisma.user.create({
      data: {
        id: randomUUID(),
        email: normalizedEmail,
        password: hashedPassword,
        firstName: trimmedFirstName,
        lastName: trimmedLastName,
        name,
      },
    });

    // Création du client Stripe
    try {
      const customer = await stripe.customers.create({
        email: user.email!,
        metadata: { userId: user.id },
      });
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: customer.id },
      });
    } catch (error) {
      console.error("Erreur création stripe customer:", error);
    }

    return NextResponse.json(
      { message: "Compte créé avec succès." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la création du compte." },
      { status: 500 },
    );
  }
}
