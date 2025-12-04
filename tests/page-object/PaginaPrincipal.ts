import { Locator, Page, expect } from '@playwright/test';

export default class PaginaPrincipal {
  private readonly page: Page;
  private readonly botaoSomenteIda: Locator;
  private readonly botaoAbrirModalPassageiros: Locator;
  private readonly botaoAdicionarCrianca: Locator;
  private readonly botaoAdicionarBebe: Locator;
  private readonly botaoAdicionarAdulto: Locator;
  private readonly botaoFecharModalPassageiros: Locator;
  private readonly campoDropdownOrigem: Locator;
  private readonly campoDropdownDestino: Locator;
  private readonly campoDataIda: Locator;
  private readonly campoDataVolta!: Locator;
  private readonly botaoBuscar: Locator;
  private readonly textoIdaVolta: Locator;
  private readonly containerOrigem: Locator;
  private readonly containerDestino: Locator;
  private readonly botaoComprar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoSomenteIda = page.getByTestId('botao-somente-ida');
    //   .getByLabel('SOMENTE IDA');

    this.botaoAbrirModalPassageiros = page.getByTestId(
      'abrir-modal-passageiros'
    );
    //   .getByLabel('1 adulto');

    this.botaoAdicionarAdulto = page
      .getByTestId('seletor-passageiro-adultos')
      .getByRole('button', { name: 'adição' });

    this.botaoAdicionarCrianca = page
      .getByTestId('seletor-passageiro-criancas')
      .getByRole('button', { name: 'adição' });

    this.botaoAdicionarBebe = page
      .getByTestId('seletor-passageiro-bebes')
      .getByRole('button', { name: 'adição' });

    this.botaoFecharModalPassageiros = page.getByTestId(
      'fechar-modal-passageiros'
    );
    //   .getByLabel('BUSCAR');

    this.campoDropdownOrigem = page
      .getByTestId('campo-dropdown-origem')
      .getByLabel('Origem');

    this.campoDropdownDestino = page
      .getByTestId('campo-dropdown-destino')
      .getByLabel('Destino');

    this.campoDataIda = page.getByTestId('campo-data-ida');
    //   .getByLabel('Data de ida');

    // this.campoDataVolta = page
    //   .getByTestId('campo-data-volta')
    //   .getByLabel('Data de volta');

    this.botaoBuscar = page.getByTestId('botao-buscar-passagens');
    //   .getByLabel('BUSCAR');

    this.textoIdaVolta = page.getByTestId('texto-ida-volta');

    this.containerOrigem = page.getByTestId('container-origem');

    this.containerDestino = page.getByTestId('container-destino');

    this.botaoComprar = page.getByTestId('botao-comprar');
  }

  async visitar() {
    await this.page.goto('/');
  }

  async clicar() {
    await this.botaoSomenteIda.click();
    await this.botaoAbrirModalPassageiros.click();
    await this.botaoAdicionarCrianca.click();
    await this.botaoAdicionarBebe.click();
    await this.botaoAdicionarAdulto.click();
    await this.botaoFecharModalPassageiros.click();

    await this.campoDropdownOrigem.click();
    await this.campoDropdownDestino.click();
    // await this.campoDataIda.click();
    // await this.campoDataVolta.click();
    await this.botaoBuscar.click();
  }

  async definirSomenteIda() {
    await this.botaoSomenteIda.click();
  }
  async abrirModalPassageiros() {
    await this.botaoAbrirModalPassageiros.click();
  }
  async definirPassageirosAdultos(quantidade: number = 1) {
    for (let i = 1; i < quantidade; i++) {
      await this.botaoAdicionarAdulto.click();
    }
  }
  async definirPassageirosCriancas(quantidade: number = 0) {
    for (let i = 0; i < quantidade; i++) {
      await this.botaoAdicionarCrianca.click();
    }
  }
  async definirPassageirosBebes(quantidade: number = 0) {
    for (let i = 0; i < quantidade; i++) {
      await this.botaoAdicionarBebe.click();
    }
  }
  async fecharModalPassageiros() {
    await this.botaoFecharModalPassageiros.click();
  }

  async definirOrigemEDestino(origem: string, destino: string) {
    await this.campoDropdownOrigem.fill(origem);
    await this.campoDropdownOrigem.press('Enter');

    await this.campoDropdownDestino.fill(destino);
    await this.campoDropdownDestino.press('Enter');
  }

  async definirData(data: Date) {
    const dataFormatada = data.toLocaleString('en-US', { dateStyle: 'short' });
    await this.campoDataIda.fill(dataFormatada);
  }

  async buscarPassagens() {
    await this.botaoBuscar.click();
  }
}
