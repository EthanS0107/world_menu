import { test, expect } from "@playwright/test";

// Authentification: accès à la page de connexion
// et connexion avec des identifiants valides/invalides

test.describe("Authentification", () => {
  test("Affichage de la page de connexion", async ({ page }) => {
    await page.goto("/auth/signin");
    await expect(page).toHaveURL(/.*auth\/signin/);
    await expect(
      page.getByRole("heading", { name: /connexion|sign in/i }),
    ).toBeVisible();
  });

  test("Connexion échoue avec mauvais identifiants", async ({ page }) => {
    await page.goto("/auth/signin");
    await page.getByLabel(/email/i).fill("fake@email.com");
    await page.getByLabel(/mot de passe|password/i).fill("wrongpassword");
    await page.getByRole("button", { name: /connexion|sign in/i }).click();
    await expect(page.getByText(/erreur/i)).toBeVisible();
  });

  test("Connexion réussie avec bons identifiants", async ({ page }) => {
    await page.goto("/auth/signin");
    await page.getByLabel(/email/i).fill("user@email.com"); // Remplacer par un vrai utilisateur de test
    await page.getByLabel(/mot de passe|password/i).fill("password123"); // Remplacer par le vrai mot de passe
    await page.getByRole("button", { name: /connexion|sign in/i }).click();
    await expect(page).not.toHaveURL(/auth\/signin/);
    await expect(page.getByText(/déconnexion|logout/i)).toBeVisible();
  });
});
