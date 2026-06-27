import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  const input = page.getByRole("textbox");
  await input.fill(letra);
  await input.press("Enter");
});

Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

Then("se ve la letra errada {string}", async ({ page }, letra: string) => {
  await expect(page.getByTestId("missed-letters")).toContainText(letra);
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByTestId("status")).toHaveText(mensaje);
});

Then("se ve el error {string}", async ({ page }, error: string) => {
  await expect(page.getByTestId("error")).toHaveText(error);
});

Given("una partida sin palabra fija", async ({ page }) => {
  await page.goto("/");
});

Then("el dibujo del ahorcado muestra {int} partes", async ({ page }, cantidad: number) => {
  const partes = page.locator('[data-testid="hangman-drawing"] [data-part]');
  const visibles = partes.locator(':visible');
  await expect(visibles).toHaveCount(cantidad);
});

Then("se ve la parte {string} del muñeco", async ({ page }, parte: string) => {
  const elemento = page.locator(`[data-testid="hangman-drawing"] [data-part="${parte}"]`);
  await expect(elemento).toBeVisible();
});

Then("se ve la base de la horca", async ({ page }) => {
  const base = page.locator('[data-testid="hangman-drawing"] [data-testid="hangman-base"]');
  await expect(base).toBeVisible();
});
