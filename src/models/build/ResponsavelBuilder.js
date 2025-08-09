class ResponsavelBuilder {
  constructor() {
    this.responsavel = {
      id: null,
      dataCriacao: null,
      ativo: true,
      dsNome: null,
      telefone1: null,
      telefone2: null,
      dataNascimento: null,
      dsCPF: null,
      estadoCivil: null,
      racaCor: null,
      escolaridade: null,
      tipoVinculoFamiliar: null,
      dsOutroTipoDeVinculoResponsavel: null,
      ocupacao: null,
      dsOutroTipoDeOcupacaoResponsavel: null,
    };
  }

  withId(id) {
    this.responsavel.id = id;
    return this;
  }

  withDataCriacao(data) {
    this.responsavel.dataCriacao = data;
    return this;
  }

  withNome(nome) {
    this.responsavel.dsNome = nome;
    return this;
  }

  withTelefone1(tel) {
    this.responsavel.telefone1 = tel;
    return this;
  }

  withTelefone2(tel) {
    this.responsavel.telefone2 = tel;
    return this;
  }

  withDataNascimento(data) {
    this.responsavel.dataNascimento = data;
    return this;
  }

  withCPF(cpf) {
    this.responsavel.dsCPF = cpf.replace(/\D/g, "");
    return this;
  }

  withEstadoCivil(estadoCivil) {
    this.responsavel.estadoCivil = estadoCivil;
    return this;
  }

  withRacaCor(racaCor) {
    this.responsavel.racaCor = racaCor;
    return this;
  }

  withEscolaridade(escolaridade) {
    this.responsavel.escolaridade = escolaridade;
    return this;
  }

  withTipoVinculo(vinculo) {
    this.responsavel.tipoVinculoFamiliar = vinculo;
    return this;
  }

  withOutroTipoVinculo(desc) {
    this.responsavel.dsOutroTipoDeVinculoResponsavel = desc;
    return this;
  }

  withOcupacao(ocupacao) {
    this.responsavel.ocupacao = ocupacao;
    return this;
  }

  withOutraOcupacao(desc) {
    this.responsavel.dsOutroTipoDeOcupacaoResponsavel = desc;
    return this;
  }

  build() {
    return this.responsavel;
  }
}
export default ResponsavelBuilder;
