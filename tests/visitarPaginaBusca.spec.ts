import { test, expect } from '@playwright/test';

test.describe('Página de busca', () => {
  test('Deve visitar a página de busca', async ({ page }) => {
    await page.goto('http://localhost:4200/busca'); //ação
    await expect(page).toHaveTitle('Jornada Milhas'); //asserção
  });
});
