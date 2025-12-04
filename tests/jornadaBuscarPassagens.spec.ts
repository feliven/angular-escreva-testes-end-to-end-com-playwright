import test from '@playwright/test';
import PaginaPrincipal from './page-object/PaginaPrincipal';

test.describe('Página Principal', () => {
  test('Deve buscar passagem de somente ida', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);

    await paginaPrincipal.visitar();
  });

  test('Deve clicar nos campos e botão Buscar', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);

    await paginaPrincipal.visitar();
    await paginaPrincipal.clicar();
  });
});
