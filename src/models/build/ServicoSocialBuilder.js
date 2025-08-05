class ServicoSocialBuilder {
  constructor() {
    this.dadosFormulario = {};
    this.servicoSocial = {
      dtAtendimento: "",
      dsAbrigo: "",
      possuiRuaPavimentada: "",
      possuiAguaEncanda: "",
      nrSecadoraRoupa: "",
      nrMotocicleta: "",
      nrMicroondas: "",
      nrDvd: "",
      nrLavaRoupa: "",
      nrFreezer: "",
      nrGeladeira: "",
      nrLavaLoucas: "",
      nrMicrocomputador: "",
      nrAutomoveis: "",
      nrEmpregadosDomesticos: "",
      nrBanheiro: "",
      dsObservacao: "",
      dsConfiguracaoFamiliar: "",
      dsPeriodicidadeTerapia: "",
      configuracaoFamiliar: "",
      tpAcolhimento: "",
      grauInstrucaoChefeFamilia: "",
      situacaoConjugal: "",
      presencasPais: "",
      situacaoAtualInstituicao: "",
      paciente: {},
      abrigo: {},
      periodicidadeTerapia: {},
      diasTurnosTerapia: "",
      tipoTerapia: "",
    };
  }

  setCampo(campo, valor) {
    this.servicoSocial[campo] = valor;
    return this;
  }

  withPaciente(paciente) {
    return this.setCampo("paciente", { ...paciente });
  }

  withTipoTerapia(tipoTerapia) {
    return this.setCampo("tipoTerapia", { ...tipoTerapia });
  }

  withDataAtendimento(dataAtendimento) {
    return this.setCampo("dtAtendimento", dataAtendimento);
  }

  withConfiguracaoFamiliar(configuracaoFamiliar) {
    return this.setCampo("configuracaoFamiliar", configuracaoFamiliar);
  }

  withDescricaoConfiguracaoFamiliar(descricaoConfiguracaoFamiliar) {
    return this.setCampo(
      "dsConfiguracaoFamiliar",
      descricaoConfiguracaoFamiliar,
    );
  }

  withSituacaoConjugalPais(situacaoConjugalPais) {
    return this.setCampo("situacaoConjugal", situacaoConjugalPais);
  }

  withPresencaDosPais(presencaDosPais) {
    return this.setCampo("presencasPais", presencaDosPais);
  }

  withTipoAcolhimento(tipoAcolhimento) {
    return this.setCampo("tpAcolhimento", tipoAcolhimento);
  }

  withAbrigo(abrigo) {
    return this.setCampo("abrigo", abrigo);
  }

  withDescricaoAbrigo(descricaoAbrigo) {
    return this.setCampo("dsAbrigo", descricaoAbrigo);
  }

  withBanheiro(banheiro) {
    return this.setCampo("nrBanheiro", banheiro);
  }

  withDvd(dvd) {
    return this.setCampo("nrDvd", dvd);
  }

  withAutomovel(automovel) {
    return this.setCampo("nrAutomoveis", automovel);
  }

  withMicroOndas(microondas) {
    return this.setCampo("nrMicroondas", microondas);
  }

  withLavaLoucas(lavaLoucas) {
    return this.setCampo("nrLavaLoucas", lavaLoucas);
  }

  withMotocicleta(motocicleta) {
    return this.setCampo("nrMotocicleta", motocicleta);
  }

  withFreezer(freezer) {
    return this.setCampo("nrFreezer", freezer);
  }

  withSecadoraRoupa(secadoraRoupa) {
    return this.setCampo("nrSecadoraRoupa", secadoraRoupa);
  }

  withEmpregadosDomesticos(empregadosDomesticos) {
    return this.setCampo("nrEmpregadosDomesticos", empregadosDomesticos);
  }

  withAguaEncanada(aguaEncanada) {
    return this.setCampo("possuiAguaEncanda", aguaEncanada);
  }

  withMicrocomputador(microcomputador) {
    return this.setCampo("nrMicrocomputador", microcomputador);
  }

  withRuaPavimentada(ruaPavimentada) {
    return this.setCampo("possuiRuaPavimentada", ruaPavimentada);
  }

  withGeladeira(geladeira) {
    return this.setCampo("nrGeladeira", geladeira);
  }

  withGrauInstrucaoChefeFamilia(grauInstrucaoChefeFamilia) {
    return this.setCampo(
      "grauInstrucaoChefeFamilia",
      grauInstrucaoChefeFamilia,
    );
  }

  withLavaRoupa(lavaRoupa) {
    return this.setCampo("nrLavaRoupa", lavaRoupa);
  }

  withPeriodicidadeTerapia(periodicidadeTerapia) {
    return this.setCampo("periodicidadeTerapia", periodicidadeTerapia);
  }

  withDescricaoPeriodicidadeTerapia(descricaoPeriodicidadeTerapia) {
    return this.setCampo(
      "dsPeriodicidadeTerapia",
      descricaoPeriodicidadeTerapia,
    );
  }

  withDiasTurnoTerapia(diasTurnoTerapia) {
    return this.setCampo("diasTurnosTerapia", diasTurnoTerapia);
  }
  nrAutomoveis;

  withSituacaoAtualInstituicao(situacaoAtualInstituicao) {
    return this.setCampo("situacaoAtualInstituicao", situacaoAtualInstituicao);
  }

  withObservacoes(observacoes) {
    return this.setCampo("dsObservacao", observacoes);
  }

  withDados(dados) {
    Object.keys(dados).forEach((campo) => {
      if (this.servicoSocial.hasOwnProperty(campo)) {
        this.servicoSocial[campo] = dados[campo];
      }
    });
    return this;
  }

  build() {
    return {
      ...this.servicoSocial,
    };
  }
}

export default ServicoSocialBuilder;
