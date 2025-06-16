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
            cep: this.dadosFormulario.cep,
            estado: this.dadosFormulario.estado,
            nrLogradouro: this.dadosFormulario.numero,
            dsLogradouro: this.dadosFormulario.logradouro,
            dsBairro: this.dadosFormulario.bairro,
            municipioLogradouro: this.dadosFormulario.municipioLogradouro,
            dsComplementoLogradouro: this.dadosFormulario.complemento,
            tpMoradia: this.dadosFormulario.tpMoradia,
        };
    }

    criarResponsavel(nomeCampo, campos) {
        return {
            ativo: true,
            dataCricao: new Date().toLocaleString("pt-Br",{ timeZone: "America/Sao_Paulo" }),
            dsCPF: this.dadosFormulario[campos.cpf],
            dsNome: this.dadosFormulario[campos.nome],
            dataNascimento: this.dadosFormulario[campos.dataNascimento],
            racaCor: this.dadosFormulario[campos.racaCor],
            estadoCivil: this.dadosFormulario[campos.estadoCivil],
            escolaridade: this.dadosFormulario[campos.escolaridade],
            ocupacao: this.dadosFormulario[campos.ocupacao],
            dsOutroTipoDeOcupacaoResponsavel: this.dadosFormulario[campos.descricaoOcupacao],
            vinculoResponsavel: this.dadosFormulario[campos.vinculoResponsavel],
            descricaoVinculoResponsavel: this.dadosFormulario[campos.descricaoVinculoResponsavel],
            telefone: [ "88 - 9 9446-2965", "88 - 9 9446-2965" ],
        };
    }

    criarMae() {
        return this.criarResponsavel("nomeMae", {
            cpf: "cpfMae",
            nome: "nomeMae",
            dataNascimento: "dataNascimentoMae",
            racaCor: "tipoRacaCorMae",
            estadoCivil: "estadoCivilMae",
            telefone: ["telefone1Mae", "telefone2Mae"],
            escolaridade: "escolaridadeMae",
            ocupacao: "ocupacaoMae",
            descricaoOcupacao: "descricaoOcupacaoMae"
        });
    }

    criarPai() {
        return this.criarResponsavel("nomePai", {
            cpf: "cpfPai",
            nome: "nomePai",
            dataNascimento: "dataNascimentoPai",
            racaCor: "tipoRacaCorPai",
            estadoCivil: "estadoCivilPai",
            telefone: ["telefone1Pai", "telefone2Pai"],
            escolaridade: "escolaridadePai",
            ocupacao: "ocupacaoPai",
            descricaoOcupacao: "descricaoOcupacaoPai"
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
            dataAdmissao: this.dadosFormulario.dataAdmissao,
            descricaoProntuario: this.dadosFormulario.descricaoProntuario,
            dsNome: this.dadosFormulario.nomeCompleto,
            dataNascimento: this.dadosFormulario.dataNascimento,
            cpf: this.dadosFormulario.cpf,
            nacionalidade: this.dadosFormulario.nacionalidade,
            naturalidade: JSON.parse(this.dadosFormulario.naturalidade),
            sexo: this.dadosFormulario.sexo,
            tipoRacaCor: this.dadosFormulario.tipoRacaCor,
            descricaoCartaoSUS: this.dadosFormulario.descricaoCartaoSUS,
            localDeNascimento: this.dadosFormulario.localDeNascimento,
            dsOutroTipoDeLocalDeNascimentoPaciente: this.dadosFormulario.dsOutroTipoDeLocalDeNascimentoPaciente,
            endereco: this.criarEndereco(),
            maeResponsavel: this.criarMae(), 
            paiResponsavel: this.criarPai(),
            responsavel: this.criarOutroResponsavel(),
            procedencia: this.dadosFormulario.procedencia,
            dsOutroTipoDeProcedenciaPaciente: this.dadosFormulario.dsOutroTipoDeProcedenciaPaciente,
            isConstaPai: this.dadosFormulario.responsavelPelaCriancaPai != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isConstaMae: this.dadosFormulario.responsavelPelaCriancaMae != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isPaiResponsavel: this.dadosFormulario.responsavelPelaCriancaPai != "false" ? SimOuNao.Sim : SimOuNao.Não,
            isMaeResponsavel: this.dadosFormulario.responsavelPelaCriancaMae != "false" ? SimOuNao.Sim : SimOuNao.Não,
        };
    }
}
export default PacienteBuilder;