import { test, expect } from "@playwright/test";

// Paiement d'abonnement : accès à la page d'abonnement, bouton, redirection Stripe, etc.

test.describe("Paiement abonnement", () => {
  test("Affichage du bouton abonnement", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("button", { name: /s'abonner/i }),
    ).toBeVisible();
  });

  test("Redirection vers Stripe au clic sur abonnement", async ({ page }) => {
    await page.goto("/");
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("button", { name: /s'abonner/i }).click(),
    ]);
    await expect(newPage.url()).toContain("stripe.com");
  });

  test("Accès refusé aux contenus premium sans abonnement", async ({
    page,
  }) => {
    await page.goto("/menu");
    await expect(page.getByText(/abonnement requis|premium/i)).toBeVisible();
  });

  // Pour tester l'accès avec abonnement, il faudrait un mock ou un utilisateur test abonné
});
