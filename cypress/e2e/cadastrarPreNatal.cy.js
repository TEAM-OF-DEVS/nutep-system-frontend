describe("Formulário de Cadastro de Paciente", () => {
  beforeEach(() => {
    cy.visit("/dados-pre-natais");
    cy.viewport(1920, 1080);
  });

  it("Deve preencher e enviar o formulário de cadastro de paciente", () => {
    cy.get('input[name="numeroProtuario"]').type("2530");
    cy.get('button[name="pesquisar"]').click();
    cy.wait(2000);

    cy.get('input[name="dataAtendimento"]').type("2025-02-23");

    cy.get('select[name="procedencia"]').select("NUTEP");
    cy.get('input[name="descricaoProcedencia"]').type(
      "Descrição da procedência.",
    );
    cy.get('select[name="convenio"]').select("Sus");
    cy.get('input[name="descricaoConvenio"]').type("Descrição do convênio.");
    cy.get('input[name="idadeMaeEngravidar"]').type("25 Anos");
    cy.get('input[name="numeroConsultas"]').type("12 Consultas");
    cy.get('input[name="idadePaiGestacao"]').type("25 Anos");
    cy.get('input[name="numeroGestacoes"]').type("1");
    cy.get('input[name="pesoInicialGravidez"]').type("75kg");
    cy.get('input[name="numeroFilhosVivos"]').type("0");
    cy.get('input[name="pesoFinalGravidez"]').type("85kg");
    cy.get('input[name="numeroNatimortos"]').type("0");
    cy.get('input[name="estaturaMae"]').type("1.65m");
    cy.get('input[name="numeroAbortos"]').type("3");
    cy.get('input[name="tempoGestacaoPrimeiraConsulta"]').type("3 Meses.");
    cy.get('select[name="planejamentoGestacao"]').type("Planejada");
    //-----------------//
    cy.get('select[name="metodoContraceptivoAnterior"]').select("DIU");
    cy.get('input[name="descricaoMetodoContraceptivo"]').type(
      "Descrição do método contraceptivo.",
    );
    //-----------------//
    cy.get('select[name="usoAborto"]').select("Sim");
    cy.get('input[name="tempoGestacaoSemanas"]').type(
      "Tempo de gestação em semanas.",
    );
    cy.get('select[name="meioAborto"]').select("Chás");
    cy.get('input[name="descricaoMeioAbortivo"]').type(
      "Descrição do meio abortivo.",
    );
    //-----------------//
    cy.get('select[name="consanguinidadePais"]').select("Sim");
    cy.get('input[name="descricaoConsanguinidade"]').type(
      "Descrição da consanguinidade.",
    );
    //-----------------//
    cy.get('select[name="intercorrenciasGestacao"]').select("Acidente");
    cy.get('input[name="descricaoIntercorrencias"]').type(
      "Descrição das intercorrências.",
    );
    cy.get('select[name="alergias"]').select("Asma");
    cy.get('input[name="descricaoAlergias"]').type("Descrição das alergias.");
    cy.get('select[name="sangramentoGravidez"]').select("Não");
    cy.get('input[name="periodoSangramento"]').type("Período do sangramento.");
    cy.get('select[name="infeccoes"]').select("Covid");
    cy.get('input[name="descricaoInfeccoes"]').type("Descrição das infecções.");
    //-----------------//

    cy.get('select[name="doencasPreExistentesMae"]').select("Asma alérgica");
    cy.get('input[name="descricaoDoencasPreExistentes"]').type(
      "Descrição das doenças pré-existentes.",
    );
    //-----------------//
    cy.get('select[name="usoDrogasMae"]').select("Nenhuma");
    cy.get('input[name="descricaoUsoDeDrogas"]').type(
      "Descrição do uso de drogas.",
    );
    //-----------------//
    cy.get('select[name="examesRealizadosMae"]').select("HIV - Normal");
    cy.get('input[name="descricaoExamesMae"]').type(
      "Descrição dos exames realizados.",
    );
    //-----------------//
    cy.get('select[name="medicamentosUtilizadosMae"]').select("Vitaminas");
    cy.get('input[name="descricaoMedicamentosMae"]').type(
      "Descrição dos medicamentos utilizados.",
    );
    //-----------------//
    cy.get('select[name="hospitalizacoesGestacao"]').select("Sim");
    cy.get('input[name="periodoHospitalizacaoSemanas"]').type("4 semanas.");
    cy.get('select[name="motivoHospitalizacao"]').select("Asma");
    cy.get('input[name="diasHospitalizacao"]').type("15 Dias.");
    cy.get('input[name="descricaoMotivoHospitalizacao"]').type(
      "Descrição Motivo Hospitalar.",
    );
    cy.get('select[name="diagnostico"]').select("Doenças autoimunes");
    cy.get('input[name="descricaoDiagnostico"]').type(
      "Descrição do diagnóstico.",
    );
    cy.get('input[name="observacoes"]').type("Observações para o Atendimento.");

    // Enviar o formulário
    cy.get('button[name="salvar"]').click();
    cy.wait(4000);

    // Verificar se o envio foi bem-sucedido
    //cy.contains('O paciente foi cadastrado com sucesso.').should('be.visible');
  });
});
