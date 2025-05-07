describe("Formulário de Cadastro de Paciente", () => {
  beforeEach(() => {
    cy.visit("dashboard/dados-pessoais");
    cy.viewport(1920, 1080);
  });

  it("Deve preencher e enviar o formulário de cadastro de paciente", () => {
    cy.wait(2000);
    cy.get('input[name="dataAdmissao"]').type("2023-10-10");
    cy.get('input[name="descricaoProntuario"]').type("253076");
    cy.get('input[name="nomeCompleto"]').type("Contonete de Elefante");
    cy.get('input[name="dataNascimento"]').type("1990-01-01");
    //---------------//
    cy.get('input[name="cpf"]').type("280.852.670-98");
    cy.get('select[name="nacionalidade"]').select("Brasileiro");
    cy.get('select[name="naturalidade"]').select("Quixadá");
     cy.get('select[name="uf"]').select("CE");
    cy.get('select[name="sexo"]').select("Masculino");
    cy.get('select[name="tipoRacaCor"]').select("Branca");
    //---------------//
    cy.get('input[name="descricaoCartaoSUS"]').type("1234 5678 9012 3456");
    cy.get('select[name="localDeNascimento"]').select("Domicílio");
    cy.get('input[name="dsOutroTipoDeLocalDeNascimentoPaciente"]').type(
      "Outro local de nascimento.",
    );
    //---------------//
    cy.get('input[name="cep"]').type("63908210");
    // cy.get('input[name="bairro"]').type('Alto São Francisco');
    // cy.get('input[name="logradouro"]').type('Rua São Mateus');
    cy.get('input[name="numero"]').type("123");
    cy.get('input[name="complemento"]').type("Apto 456");
    //---------------//
    // cy.get('select[name="municipioLogradouro"]').select("Quixadá");
    cy.get('select[name="estado"]').select("Ceará"); // Se for um input, caso contrário, use select
    cy.get('select[name="tpMoradia"]').select("Própria");

    //---------------//
    cy.get('input[name="nomeMae"]').type("Maria da Silva");
    cy.get('input[name="dataNascimentoMae"]').type("1980-01-01");
    cy.get('select[name="responsavelPelaCriancaMae"]').select("Sim");
    //---------------//
    cy.get('input[name="cpfMae"]').type("359.784.220-87");
    cy.get('select[name="tipoRacaCorMae"]').select("Branca");
    cy.get('select[name="estadoCivilMae"]').select("Casado(a)");
    cy.get('input[name="telefone1Mae"]').type("(88) 9 9446-2965");
    cy.get('input[name="telefone2Mae"]').type("(88) 9 9446-2965");
    //---------------//
    cy.get('select[name="escolaridadeMae"]').select("Ensino superior completo");
    cy.get('select[name="ocupacaoMae"]').select("Professor(a)");
    cy.get('input[name="descricaoOcupacaoMae"]').type("Ensino fundamental");
    //---------------//
    cy.get('input[name="nomePai"]').type("José da Silva");
    cy.get('input[name="dataNascimentoPai"]').type("1970-01-01");
    cy.get('select[name="responsavelPelaCriancaPai"]').select("Sim");
    //---------------//
    cy.get('input[name="cpfPai"]').type("519.675.380-00");
    cy.get('select[name="tipoRacaCorPai"]').select("Branca");
    cy.get('select[name="estadoCivilPai"]').select("Casado(a)");
    cy.get('input[name="telefone1Pai"]').type("(88) 9 9446-2965");
    cy.get('input[name="telefone2Pai"]').type("(88) 9 9446-2965");
    //---------------//
    cy.get('select[name="escolaridadePai"]').select("Ensino superior completo");
    cy.get('select[name="ocupacaoPai"]').select("Engenheiro(a)");
    cy.get('input[name="descricaoOcupacaoPai"]').type("Construção civil");
    //---------------//
    cy.get('input[name="nomeResponsavel"]').type("Carlos da Silva");
    cy.get('input[name="dataNascimentoResponsavel"]').type("1950-01-01");
    cy.get('select[name="vinculoResponsavel"]').select("Avô materno");
    //---------------//
    cy.get('input[name="descricaoVinculoResponsavel"]').type("Avô paterno");
    //---------------//
    cy.get('input[name="cpfResponsavel"]').type("045.516.520-32");
    cy.get('select[name="tipoRacaCorResponsavel"]').select("Branca");
    cy.get('select[name="estadoCivilResponsavel"]').select("Solteiro(a)");
    cy.get('input[name="telefone1Responsavel"]').type("(88) 9 9446-2965");
    cy.get('input[name="telefone2Responsavel"]').type("(88) 9 9446-2965");
    //---------------//
    cy.get('select[name="escolaridadeResponsavel"]').select(
      "Ensino superior completo",
    );
    cy.get('select[name="ocupacaoResponsavel"]').select("Médico(a)");
    cy.get('input[name="descricaoOcupacaoResponsavel"]').type("Clínica Geral");
    //---------------//
    cy.get('select[name="procedencia"]').select("NUTEP");
    cy.get('input[name="dsOutroTipoDeProcedenciaPaciente"]').type(
      "Outra procedência.",
    );

    // Enviar o formulário
    cy.get('button[name="salvar"]').click();
    cy.wait(4000);

    // Verificar se o envio foi bem-sucedido
    // cy.contains("O paciente foi cadastrado com sucesso.").should("be.visible");
  });
});
