describe("Formulário de Cadastro de Paciente", () => {
  beforeEach(() => {
    cy.visit("/dashboard/servico-social");
    cy.viewport(1920, 1080);
  });

  it("Deve preencher e enviar o formulário de cadastro de paciente", () => {
    cy.get('input[name="numeroProtuario"]').type("2530");
    cy.get('button[name="pesquisar"]').click();
    cy.wait(2000);

    cy.get('input[name="dtAtendimento"]').type("2025-02-23");

    cy.get('select[name="configuracaoFamiliar"]').select("Casal heteroafetivo");
    cy.get('input[name="dsConfiguracaoFamiliar"]').type(
      "Descrição Configuração familiar",
    );
    cy.get('select[name="situacaoConjugal"]').select("Casado (a)");
    cy.get('select[name="presencasPais"]').select(
      "Mãe e Pai convivem com a criança",
    );
    cy.get('select[name="tpAcolhimento"]').select("Criança Institucionalizada");
    cy.get('select[name="abrigo"]').select("Instituto Orfanato Cristo Rei");
    cy.get('input[name="dsAbrigo"]').type("Descrição para o Abrigo.");

    //---------------//
    cy.get('select[name="nrBanheiro"]').select("2");
    cy.get('select[name="nrDvd"]').select("2");
    cy.get('select[name="nrAutomoveis"]').select("2");

    //---------------//
    cy.get('select[name="nrMicroondas"]').select("2");
    cy.get('select[name="nrLavaLoucas"]').select("2");
    cy.get('select[name="nrMotocicleta"]').select("2");

    //---------------//
    cy.get('select[name="nrFreezer"]').select("2");
    cy.get('select[name="nrSecadoraRoupa"]').select("2");
    cy.get('select[name="nrEmpregadosDomesticos"]').select("2");

    //---------------//
    cy.get('select[name="possuiAguaEncanda"]').select("Sim");
    cy.get('select[name="nrMicrocomputador"]').select("2");
    cy.get('select[name="possuiRuaPavimentada"]').select("Sim");

    //---------------//
    cy.get('select[name="nrGeladeira"]').select("1");
    cy.get('select[name="nrLavaRoupa"]').select("1");
    cy.get('select[name="grauInstrucaoChefeFamilia"]').select(
      "Ensino superior completo",
    );

    //---------------//
    cy.get('select[name="periodicidadeTerapia"]').select("2 vezes por semana");
    cy.get('input[name="dsPeriodicidadeTerapia"]').type(
      "descrição da periodicidade da terapia",
    );
    cy.get('select[name="diasTurnosTerapia"]').select("Quinta - Tarde");
    cy.get('select[name="tipoTerapia"]').select("Fisioterapia motora");
    cy.get('select[name="situacaoAtualInstituicao"]').select("Atestado");
    cy.get('input[name="dsObservacao"]').type(
      "Observações para o Atendimento.",
    );

    // Enviar o formulário
    cy.get('button[name="salvar"]').click();
    cy.wait(4000);

    // Verificar se o envio foi bem-sucedido
    //cy.contains('O paciente foi cadastrado com sucesso.').should('be.visible');
  });
});
