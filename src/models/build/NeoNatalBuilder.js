class NeoNatalBuilder {
    constructor() {
        this.neoNatal = {
            paciente: {},
            localNascimento: "",
            descricaoLocalNascimento: "",
            tipoParto: "",
            descricaoTipoParto: "",
            apresentacao: "",
            descricaoApresentacao: "",
            tipoGestacao: "",
            descricaoTipoGestacao: "",
            
            peso: "",
            comprimento: "",
            perimetroCefalico: "",
            perimetroToracico: "",
            apgar1Min: "",
            apgar5Min: "",
            apgar10Min: "",
            
            intercorrencias: "",
            descricaoIntercorrencias: "",
            malformacoes: "",
            descricaoMalformacoes: "",
            
            terapeuticaUtilizada: "",
            descricaoTerapeuticaUtilizada: "",
            antibioticos: "",
            descricaoAntibioticos: "",
            
            cirurgiaRealizada: "",
            descricaoCirurgia: "",
            
            utiNeonatalDias: "",
            cuidadosIntermediariosNeonataisDias: "",
            cuidadosIntermediariosCanguruDias: "",
            alojamentoConjunto: "",
            
            examesRealizados: "",
            descricaoExamesRealizados: "",
            
            testePezinho: "",
            testeOuvidinho: "",
            testeOlhinho: "",
            testeCoracaozinho: "",
            testeLinguinha: "",
            testeOrtolani: "",
            
            doencasCronicas: "",
            maeDoencasCronicas: "",
            descricaoMaeDoencasCronicas: "",
            paiDoencasCronicas: "",
            descricaoPaiDoencasCronicas: "",
            irmaosDoencasCronicas: "",
            descricaoIrmaosDoencasCronicas: "",
            avosPaternosDoencasCronicas: "",
            descricaoAvosPaternosDoencasCronicas: "",
            avosMaternosDoencasCronicas: "",
            descricaoAvosMaternosDoencasCronicas: "",
            
            doencasGeneticas: "",
            maeDoencasGeneticas: "",
            descricaoMaeDoencasGeneticas: "",
            paiDoencasGeneticas: "",
            descricaoPaiDoencasGeneticas: "",
            irmaosDoencasGeneticas: "",
            descricaoIrmaosDoencasGeneticas: "",
            avosPaternosDoencasGeneticas: "",
            descricaoAvosPaternosDoencasGeneticas: "",
            avosMaternosDoencasGeneticas: "",
            descricaoAvosMaternosDoencasGeneticas: "",
            tiosPrimeiroGrauDoencasGeneticas: "",
            descricaoTiosPrimeiroGrauDoencasGeneticas: ""
        };
    }

    setCampo(campo, valor) {
        this.neoNatal[campo] = valor;
        return this;
    }

    withDados(dados) {
        Object.keys(dados).forEach(campo => {
            if (this.neoNatal.hasOwnProperty(campo)) {
                this.neoNatal[campo] = dados[campo];
            }
        });
        return this;
    }

    withPaciente(paciente) {
        return this.setCampo("paciente", { ...paciente });
    }

    build() {
        return { ...this.neoNatal };
    }
}

export default NeoNatalBuilder;