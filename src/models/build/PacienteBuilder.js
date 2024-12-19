import SimOuNao from "../enum/SimNao";

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
            dataCricao: new Date().toLocaleString("pt-Br",{ timeZone: "America/Sao_Paulo" }),
            dsLogradouro: this.dadosFormulario.logradouro,
            nrLogradouro: this.dadosFormulario.numero,
            dsComplementoLogradouro: this.dadosFormulario.complemento,
            dsBairro: this.dadosFormulario.bairro,
            municipioLogradouro: JSON.parse(this.dadosFormulario.municipioLogradouro),
            tpMoradia: this.dadosFormulario.tpMoradia,
            cep: this.dadosFormulario.cep,
        };
    }

    criarResponsavel(nomeCampo, campos) {
        return {
            ativo: true,
            dataCricao: new Date().toLocaleString("pt-Br",{ timeZone: "America/Sao_Paulo" }),
            dsNome: this.dadosFormulario[campos.nome],
            dataNascimento: this.dadosFormulario[campos.dataNascimento],
            dsCPF: this.dadosFormulario[campos.cpf],
            estadoCivil: this.dadosFormulario[campos.estadoCivil],
            racaCor: this.dadosFormulario[campos.racaCor],
            escolaridade: this.dadosFormulario[campos.escolaridade],
            ocupacao: this.dadosFormulario[campos.ocupacao],
            dsOutroTipoDeOcupacaoResponsavel: this.dadosFormulario[campos.descricaoOcupacao],
            telefone: [ "88 - 9 9446-2965", "88 - 9 9446-2965" ],
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
            telefone: ["telefone1Mae", "telefone2Mae"]
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
            telefone: ["88 - 9 9446-2965", "88 - 9 9446-2965"]
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
            telefone: ["88 - 9 9446-2965", "88 - 9 9446-2965"]
        });
    }

    build() {
        return {
            ativo: true,
            dataCricao: new Date().toLocaleString("pt-Br",{ timeZone: "America/Sao_Paulo" }),
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
            isConstaPai: this.dadosFormulario.responsavelPelaCriancaPai != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isConstaMae: this.dadosFormulario.responsavelPelaCriancaMae != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isPaiResponsavel: this.dadosFormulario.responsavelPelaCriancaPai != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isMaeResponsavel: this.dadosFormulario.responsavelPelaCriancaMae != "false" ? SimOuNao.Sim : SimOuNao.Não,
        };
    }
}
export default PacienteBuilder;