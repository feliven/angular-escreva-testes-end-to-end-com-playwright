import { test, expect } from '@playwright/test';

test.describe('Página de busca', () => {
  test('Deve visitar a página de busca', async ({ page }) => {
    await page.goto('/busca'); //ação
    await expect(page).toHaveTitle('Jornada Milhas'); //asserção
  });
});
