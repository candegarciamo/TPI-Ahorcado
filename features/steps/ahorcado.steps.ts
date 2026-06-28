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

When("el jugador reinicia el juego", async ({ page }) => {
  await page.getByRole("button", { name: /jugar de nuevo/i }).click();
});

Then("no se ve la letra errada {string}", async ({ page }, letra: string) => {
  await expect(page.getByTestId("missed-letters")).not.toContainText(letra);
});

Given('que inicio un nuevo juego con la palabra secreta {string}', async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

Then('veo un teclado en pantalla con las letras de la {string} a la {string}, incluyendo la {string}', async ({ page }, arg: string, arg1: string, arg2: string) => {
  const keyboard = page.getByTestId("keyboard");
  await expect(keyboard).toBeVisible();
  const keys = keyboard.locator('button');
  await expect(keys).toHaveCount(27);
  await expect(keyboard.locator(`[data-testid="keyboard-key-${arg}"]`)).toBeVisible();
  await expect(keyboard.locator(`[data-testid="keyboard-key-${arg1}"]`)).toBeVisible();
  await expect(keyboard.locator(`[data-testid="keyboard-key-${arg2}"]`)).toBeVisible();
});

When('toco la tecla {string} en el teclado en pantalla', async ({ page }, letra: string) => {
  await page.locator(`[data-testid="keyboard-key-${letra}"]`).click();
});

Then('la palabra enmascarada es {string}', async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

Then('la tecla {string} debe estar deshabilitada', async ({ page }, letra: string) => {
  await expect(page.locator(`[data-testid="keyboard-key-${letra}"]`)).toBeDisabled();
});
