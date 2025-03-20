describe('Formulário de Cadastro de Paciente', () => {

    beforeEach(() => {
        cy.visit('/dados-neonatais');
        cy.viewport(1920, 1080);
    });

    it('Deve preencher e enviar o formulário de cadastro de paciente', () => {

        cy.get('input[name="numeroProtuario"]').type('2530');
        cy.get('button[name="pesquisar"]').click();
        cy.wait(2000);

        cy.get('input[name="dataAtendimento"]').type('2025-02-23');

        //--------//
        cy.get('select[name="localNascimento"]').select('Hospital Distrital Gonzaga Mota - Gonzaguinha da Barra do Ceará');
        cy.get('input[name="descricaoLocalNascimento"]').type('Descrição do local de nascimento.');
        cy.get('select[name="tipoParto"]').select('Natural');
        cy.get('input[name="descricaoTipoParto"]').type('Descrição do tipo de parto.');
        cy.get('select[name="apresentacao"]').select('Pélvica');
        cy.get('input[name="descricaoApresentacao"]').type('Descrição da apresentação.');
        cy.get('select[name="tipoGestacao"]').select('Gemelaridade');
        cy.get('input[name="descricaoTipoGestacao"]').type('Descrição do tipo de gestação.');
        //--------//
        cy.get('input[name="termo"]').type(2);
        cy.get('input[name="preTermo"]').type(3);
        cy.get('input[name="posTermo"]').type(6);
        //--------//
        cy.get('input[name="peso"]').type('2000g');
        cy.get('input[name="comprimento"]').type('50cm');
        cy.get('input[name="perimetroCefalico"]').type('10cm');
        cy.get('input[name="perimetroToracico"]').type('40cm');
        cy.get('input[name="apgar1Min"]').type('Apgar 1 minuto.');
        cy.get('input[name="apgar5Min"]').type('Apgar 5 minutos.');
        cy.get('input[name="apgar10Min"]').type('Apgar 10 minutos.');
                //--------//
        cy.get('select[name="intercorrencias"]').select('Covid');
        cy.get('input[name="descricaoIntercorrencias"]').type('Descrição das intercorrências.');
        cy.get('select[name="malformacoes"]').select('Pé torto');
        cy.get('input[name="descricaoMalformacoes"]').type('Descrição das malformações.');
                //--------//
        cy.get('select[name="terapeuticaUtilizada"]').select('Cafeína');
        cy.get('input[name="descricaoTerapeuticaUtilizada"]').type('Descrição da terapêutica utilizada.');
        cy.get('select[name="antibioticos"]').select('Amoxicilina');
        cy.get('input[name="descricaoAntibioticos"]').type('Descrição dos antibióticos.');
                //--------//
        cy.get('select[name="cirurgiaRealizada"]').select('Sim');
        cy.get('input[name="descricaoCirurgia"]').type('Descrição da cirurgia.');
                //--------//
        cy.get('input[name="utiNeonatalDias"]').type('35 dias');
        cy.get('input[name="cuidadosIntermediariosNeonataisDias"]').type('30 dias');
        cy.get('input[name="cuidadosIntermediariosCanguruDias"]').type('15 dias');
        cy.get('input[name="alojamentoConjunto"]').type('Alojamento conjunto.');
        cy.get('select[name="examesRealizados"]').select('USTF');
        cy.get('input[name="descricaoExamesRealizados"]').type('Descrição dos exames realizados.');
                //--------//
        cy.get('select[name="testePezinho"]').select('Normal');
        cy.get('select[name="testeOuvidinho"]').select('Normal');
        cy.get('select[name="testeOlhinho"]').select('Normal');
        cy.get('select[name="testeCoracaozinho"]').select('Normal');
        cy.get('select[name="testeLinguinha"]').select('Normal');
        cy.get('select[name="testeOrtolani"]').select('Normal');
                //--------//
        cy.get('select[name="doencasCronicas"]').select('Sim');
        cy.get('select[name="maeDoencasCronicas"]').select('Renais');
        cy.get('input[name="descricaoMaeDoencasCronicas"]').type('Descrição das doenças crônicas da mãe.');
        cy.get('select[name="paiDoencasCronicas"]').select('Pulmonares');
        cy.get('input[name="descricaoPaiDoencasCronicas"]').type('Descrição das doenças crônicas do pai.');
        cy.get('select[name="irmaosDoencasCronicas"]').select('Renais');
        cy.get('input[name="descricaoIrmaosDoencasCronicas"]').type('Descrição das doenças crônicas dos irmãos.');
        cy.get('select[name="avosPaternosDoencasCronicas"]').select('Renais');
        cy.get('input[name="descricaoAvosPaternosDoencasCronicas"]').type('Descrição das doenças crônicas dos avós paternos.');
        cy.get('select[name="avosMaternosDoencasCronicas"]').select('Pulmonares');
        cy.get('input[name="descricaoAvosMaternosDoencasCronicas"]').type('Descrição das doenças crônicas dos avós maternos.');
                //--------//
        cy.get('select[name="doencasGeneticas"]').select('Sim');
        cy.get('select[name="maeDoencasGeneticas"]').select('Infarto');
        cy.get('input[name="descricaoMaeDoencasGeneticas"]').type('Descrição das doenças genéticas da mãe.');
        cy.get('select[name="paiDoencasGeneticas"]').select('Angina');
        cy.get('input[name="descricaoPaiDoencasGeneticas"]').type('Descrição das doenças genéticas do pai.');
        cy.get('select[name="irmaosDoencasGeneticas"]').select('Arritmia');
        cy.get('input[name="descricaoIrmaosDoencasGeneticas"]').type('Descrição das doenças genéticas dos irmãos.');
        cy.get('select[name="avosPaternosDoencasGeneticas"]').select('Miocardite');
        cy.get('input[name="descricaoAvosPaternosDoencasGeneticas"]').type('Descrição das doenças genéticas dos avós paternos.');
        cy.get('select[name="avosMaternosDoencasGeneticas"]').select('Insuficiência cardíaca');
        cy.get('input[name="descricaoAvosMaternosDoencasGeneticas"]').type('Descrição das doenças genéticas dos avós maternos.');
        cy.get('select[name="tiosPrimeiroGrauDoencasGeneticas"]').select('Nenhuma');
        cy.get('input[name="descricaoTiosPrimeiroGrauDoencasGeneticas"]').type('Descrição das doenças genéticas dos tios de primeiro grau.');
        


        // Enviar o formulário
        cy.get('button[name="salvar"]').click();
        cy.wait(4000);

        // Verificar se o envio foi bem-sucedido
        //cy.contains('O paciente foi cadastrado com sucesso.').should('be.visible');
    });
});