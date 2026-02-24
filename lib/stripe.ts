import Stripe from "stripe";

const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
  // This prevents the build from failing during static generation if the env var is missing
  // However, it will still fail at runtime if the API is actually used without a key
  if (process.env.NODE_ENV === "production") {
    throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
  } else {
    console.warn(
      "Warning: STRIPE_SECRET_KEY is missing in environment variables. Stripe functionality will not work.",
    );
  }
}

export const stripe = new Stripe(apiKey || "dummy_key_for_build", {
  apiVersion: "2026-01-28.clover", // Or latest available
  typescript: true,
});
