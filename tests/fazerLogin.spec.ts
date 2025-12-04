import test from '@playwright/test';
import PaginaLogin from './page-object/PaginaLogin';

test.describe('Página de Login', () => {
  test('Deve conseguir fazer login com email e senha válidos', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.visitar();
    await paginaLogin.fazerLogin('f@g.com', '123');
    await paginaLogin.loginFeitoComSucesso();
  });

  test('Não deve conseguir fazer login com email não cadastrado', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.visitar();
    await paginaLogin.preencherFormulario('antonio.errado@alura.com', '123456');
    await paginaLogin.mostraMensagemErro('autorizado a acessar');
  });

  test('Mostra mensagem de erro no caso de e-mail em formato incorreto', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.visitar();
    await paginaLogin.preencherFormulario('antonioalura.com', '123456');
    await paginaLogin.mostraMensagemErro('E-mail inválido');
  });

  test('Mostra mensagem de erro se um dos campos estiver em branco', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.visitar();
    await paginaLogin.preencherFormulario('', '123456');
    await paginaLogin.mostraMensagemErro('obrigatório');

    await paginaLogin.preencherFormulario('antonio.errado@alura.com', '');
    await paginaLogin.mostraMensagemErro('obrigatória');
  });
});
