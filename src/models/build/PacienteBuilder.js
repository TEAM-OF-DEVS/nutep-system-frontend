import SimOuNao from "../enum/SimNao";

class PacienteBuilder {
  constructor() {
    this.dsForm = {}; // Inicializa com um objeto vazio
  }

  withFormulario(dadosFormulario) {
    this.dsForm = dadosFormulario;
    return this;
  }

  criarEndereco() {
    return {
      id: this.dsForm.idEndereco != null ? this.dsForm.idEndereco : null,
      ativo: true,
      dataCriacao: new Date().toLocaleString("pt-Br", {
        timeZone: "America/Sao_Paulo",
      }),
      cep: this.dsForm.cep,
      estado: this.dsForm.estado,
      nrLogradouro: this.dsForm.numero,
      dsLogradouro: this.dsForm.logradouro,
      dsBairro: this.dsForm.bairro,
      municipioLogradouro: this.dsForm.municipioLogradouro,
      dsComplementoLogradouro: this.dsForm.complemento,
      tpMoradia: this.dsForm.tpMoradia,
    };
  }

  criarResponsavel(nomeCampo, campos) {
    return {
      ativo: true,
      dataCricao: new Date().toLocaleString("pt-Br", {
        timeZone: "America/Sao_Paulo",
      }),
      dsCPF: this.dsForm[campos.cpf],
      dsNome: this.dsForm[campos.nome],
      dataNascimento: this.dsForm[campos.dataNascimento],
      racaCor: this.dsForm[campos.racaCor],
      estadoCivil: this.dsForm[campos.estadoCivil],
      escolaridade: this.dsForm[campos.escolaridade],
      ocupacao: this.dsForm[campos.ocupacao],
      dsOutroTipoDeOcupacaoResponsavel: this.dsForm[campos.descricaoOcupacao],
      vinculoResponsavel: this.dsForm[campos.vinculoResponsavel],
      descricaoVinculoResponsavel:
        this.dsForm[campos.descricaoVinculoResponsavel],
      telefone: ["88 - 9 9446-2965", "88 - 9 9446-2965"],
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
      descricaoOcupacao: "descricaoOcupacaoMae",
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
      descricaoOcupacao: "descricaoOcupacaoPai",
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
      telefone: ["88 - 9 9446-2965", "88 - 9 9446-2965"],
    });
  }

  build() {
    return {
      ativo: true,
      dataCricao: new Date().toLocaleString("pt-Br", {
        timeZone: "America/Sao_Paulo",
      }),
      dataAdmissao: this.dsForm.dataAdmissao,
      descricaoProntuario: this.dsForm.descricaoProntuario,
      dsNome: this.dsForm.nomeCompleto,
      dataNascimento: this.dsForm.dataNascimento,
      cpf: this.dsForm.cpf,
      nacionalidade: this.dsForm.nacionalidade,
      naturalidade: this.dsForm.naturalidade,
      sexo: this.dsForm.sexo,
      tipoRacaCor: this.dsForm.tipoRacaCor,
      descricaoCartaoSUS: this.dsForm.descricaoCartaoSUS,
      localDeNascimento: this.dsForm.localDeNascimento,
      dsOutroTipoDeLocalDeNascimentoPaciente:
        this.dsForm.dsOutroTipoDeLocalDeNascimentoPaciente,
      endereco: this.criarEndereco(),
      maeResponsavel: this.criarMae(),
      paiResponsavel: this.criarPai(),
      responsavel: this.criarOutroResponsavel(),
      procedencia: this.dsForm.procedencia,
      dsOutroTipoDeProcedenciaPaciente:
        this.dsForm.dsOutroTipoDeProcedenciaPaciente,
      isConstaPai: this.dsForm.responsavelPelaCriancaPai,
      isConstaMae: this.dsForm.responsavelPelaCriancaMae,
      isPaiResponsavel: this.dsForm.responsavelPelaCriancaPai,
      isMaeResponsavel: this.dsForm.responsavelPelaCriancaMae,
    };
  }
}
export default PacienteBuilder;
