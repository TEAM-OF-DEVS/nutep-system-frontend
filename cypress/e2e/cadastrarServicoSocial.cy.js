describe('Formulário de Cadastro de Paciente', () => {
    
    beforeEach(() => {
        cy.visit('/servico-social');
        cy.viewport(1920, 1080);
    });

    it('Deve preencher e enviar o formulário de cadastro de paciente', () => {

        cy.get('input[name="numeroProtuario"]').type('2530');
        cy.get('button[name="pesquisar"]').click();
        cy.wait(2000);

        cy.get('input[name="dataAtendimento"]').type('2025-02-23');

        cy.get('select[name="configuracaoFamiliar"]').select('Casal heteroafetivo');
        cy.get('input[name="descricaoConfiguracaoFamiliar"]').type('Descrição Configuração familiar');
        cy.get('select[name="situacaoConjugalPais"]').select('Casado (a)');
        cy.get('select[name="presencaDosPais"]').select('Mãe e Pai convivem com a criança');
        cy.get('select[name="tipoAcolhimento"]').select('Criança Institucionalizada');
        cy.get('select[name="abrigo"]').select('Instituto Orfanato Cristo Rei');
        cy.get('input[name="descricaoAbrigo"]').type('Descrição para o Abrigo.');

        //---------------//
        cy.get('select[name="banheiro"]').select('2');
        cy.get('select[name="dvd"]').select('2');
        cy.get('select[name="automovel"]').select('2');

        //---------------//
        cy.get('select[name="microondas"]').select('2');
        cy.get('select[name="lavaLoucas"]').select('2');
        cy.get('select[name="motocicleta"]').select('2');

        //---------------//
        cy.get('select[name="freezer"]').select('2');
        cy.get('select[name="secadoraRoupa"]').select('2');
        cy.get('select[name="empregadosDomesticos"]').select('2');

        //---------------//
        cy.get('select[name="aguaEncanada"]').select('Sim');
        cy.get('select[name="microcomputador"]').select('2');
        cy.get('select[name="ruaPavimentada"]').select('Sim');

        //---------------//
        cy.get('select[name="geladeira"]').select('1');
        cy.get('select[name="lavaRoupa"]').select('1');
        cy.get('select[name="grauInstrucaoChefeFamilia"]').select('Ensino superior completo');

        //---------------//
        cy.get('select[name="periodicidadeTerapia"]').select('2 vezes por semana');
        cy.get('input[name="descricaoPeriodicidadeTerapia"]').type('descrição da periodicidade da terapia');
        cy.get('select[name="diasTurnoTerapia"]').select('Quinta - Tarde');
        cy.get('select[name="tipoTerapia"]').select('Fisioterapia motora');
        cy.get('select[name="situacaoAtualInstituicao"]').select('Atestado');
        cy.get('input[name="observacoes"]').type('Observações para o Atendimento.');

        // Enviar o formulário
        cy.get('button[name="salvar"]').click();
        cy.wait(4000);

        // Verificar se o envio foi bem-sucedido
        //cy.contains('O paciente foi cadastrado com sucesso.').should('be.visible');
    });
});