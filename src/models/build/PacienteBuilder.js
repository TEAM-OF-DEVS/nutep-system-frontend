class PacienteBuilder {
    constructor() {
        this.dadosFormulario = {}; // Inicializa com um objeto vazio
    }

    withFormulario(dadosFormulario) {
        this.dadosFormulario = dadosFormulario;
        return this;
    }

    criarEndereco() {
        return {
            ativo: true,
            dataCricao: new Date(Date.now()),
            CEP: this.dadosFormulario.cep,
            dsLogradouro: this.dadosFormulario.logradouro,
            nrLogradouro: this.dadosFormulario.numero,
            dsComplementoLogradouro: this.dadosFormulario.complemento,
            dsBairro: this.dadosFormulario.bairro,
            municipioLogradouro: JSON.parse(this.dadosFormulario.municipioLogradouro),
            tpMoradia: this.dadosFormulario.tpMoradia,
        };
    }

    criarResponsavel(nomeCampo, campos) {
        return {
            ativo: true,
            dataCricao: new Date(Date.now()),
            dsNome: this.dadosFormulario[campos.nome],
            dataNascimento: this.dadosFormulario[campos.dataNascimento],
            dsCPF: this.dadosFormulario[campos.cpf],
            estadoCivil: this.dadosFormulario[campos.estadoCivil],
            racaCor: this.dadosFormulario[campos.racaCor],
            escolaridade: this.dadosFormulario[campos.escolaridade],
            ocupacao: this.dadosFormulario[campos.ocupacao],
            dsOutroTipoDeOcupacaoResponsavel: this.dadosFormulario[campos.descricaoOcupacao],
            telefone: [
                { string: this.dadosFormulario[campos.telefone1] },
                { string: this.dadosFormulario[campos.telefone2] },
            ],
        };
    }

    criarMae() {
        return this.criarResponsavel("nomeMae", {
            nome: "nomeMae",
            dataNascimento: "dataNascimentoMae",
            cpf: "cpfMae",
            estadoCivil: "estadoCivilMae",
            racaCor: "tipoRacaCorMae",
            escolaridade: "escolaridadeMae",
            ocupacao: "ocupacaoMae",
            descricaoOcupacao: "descricaoOcupacaoMae",
            telefone1: "telefone1Mae",
            telefone2: "telefone2Mae",
        });
    }

    criarPai() {
        return this.criarResponsavel("nomePai", {
            nome: "nomePai",
            dataNascimento: "dataNascimentoPai",
            cpf: "cpfPai",
            estadoCivil: "estadoCivilPai",
            racaCor: "tipoRacaCorPai",
            escolaridade: "escolaridadePai",
            ocupacao: "ocupacaoPai",
            descricaoOcupacao: "descricaoOcupacaoPai",
            telefone1: "telefone1Pai",
            telefone2: "telefone2Pai",
        });
    }

    criarOutroResponsavel() {
        return this.criarResponsavel("nomeResponsavel", {
            nome: "nomeResponsavel",
            dataNascimento: "dataNascimentoResponsavel",
            cpf: "cpfResponsavel",
            estadoCivil: "estadoCivilResponsavel",
            racaCor: "tipoRacaCorResponsavel",
            escolaridade: "escolaridadeResponsavel",
            ocupacao: "ocupacaoResponsavel",
            descricaoOcupacao: "descricaoOcupacaoResponsavel",
            telefone1: "telefone1Responsavel",
            telefone2: "telefone2Responsavel",
        });
    }

    build() {
        return {
            ativo: true,
            dataCricao: new Date(Date.now()),
            naturalidade: JSON.parse(this.dadosFormulario.naturalidade),
            nacionalidade: this.dadosFormulario.nacionalidade,
            procedencia: this.dadosFormulario.procedencia,
            dsOutroTipoDeProcedenciaPaciente: this.dadosFormulario.dsOutroTipoDeProcedenciaPaciente,
            localDeNascimento: this.dadosFormulario.localDeNascimento,
            dsOutroTipoDeLocalDeNascimentoPaciente: this.dadosFormulario.dsOutroTipoDeLocalDeNascimentoPaciente,
            endereco: this.criarEndereco(),
            paisResponsaveis: [
                this.criarMae(),
                this.criarPai(),
                this.criarOutroResponsavel(),
            ],
            dataAdmissao: this.dadosFormulario.dataAdmissao,
            descricaoProntuario: this.dadosFormulario.descricaoProntuario,
            sexo: this.dadosFormulario.sexo,
            tipoRacaCor: this.dadosFormulario.tipoRacaCor,
            descricaoCartaoSUS: this.dadosFormulario.descricaoCartaoSUS,
            isConstaPai: this.dadosFormulario.responsavelPelaCriancaPai,
            isConstaMae: this.dadosFormulario.responsavelPelaCriancaMae,
            isPaiResponsavel: this.dadosFormulario.responsavelPelaCriancaPai,
            isMaeResponsavel: this.dadosFormulario.responsavelPelaCriancaMae,
        };
    }
}
export default PacienteBuilder;