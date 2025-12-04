import test from '@playwright/test';
import PaginaPrincipal from './page-object/PaginaPrincipal';

test.describe('Página Principal', () => {
  test('Deve buscar passagem de somente ida', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);

    await paginaPrincipal.visitar();

    await paginaPrincipal.definirSomenteIda();
    await paginaPrincipal.abrirModalPassageiros();
    await paginaPrincipal.definirPassageirosAdultos(3);
    await paginaPrincipal.definirPassageirosCriancas(1);
    await paginaPrincipal.definirPassageirosBebes(1);
    await paginaPrincipal.fecharModalPassageiros();

    await paginaPrincipal.definirOrigemEDestino(
      'minas gerais',
      'rio de janeiro'
    );
  });

  test('Deve clicar nos campos e botão Buscar', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);

    await paginaPrincipal.visitar();
    await paginaPrincipal.clicar();
  });
});
