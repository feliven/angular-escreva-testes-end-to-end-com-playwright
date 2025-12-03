import test from '@playwright/test';
import PaginaLogin from './page-object/PaginaLogin';

test.describe('Página de Login', () => {
  test('Deve conseguir fazer login com email e senha válidos', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.visitar();
  });
});
