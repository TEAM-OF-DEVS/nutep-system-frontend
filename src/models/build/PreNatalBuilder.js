class PreNatalBuilder {
  constructor() {
    this.preNatal = {
      paciente: {},
      procedencia: null,
      descricaoProcedencia: null,
      convenio: null,
      descricaoConvenio: null,
      idadeMaeEngravidar: null,
      numeroConsultas: null,
      idadePaiGestacao: null,
      numeroGestacoes: null,
      pesoInicialGravidez: null,
      numeroFilhosVivos: null,
      pesoFinalGravidez: null,
      numeroNatimortos: null,
      estaturaMae: null,
      numeroAbortos: null,
      tempoGestacaoPrimeiraConsulta: null,
      planejamentoGestacao: null,
      metodoContraceptivoAnterior: null,
      descricaoMetodoContraceptivo: null,
      usoAborto: null,
      tempoGestacaoSemanas: null,
      meioAborto: null,
      descricaoMeioAbortivo: null,
      consanguinidadePais: null,
      descricaoConsanguinidade: null,
      intercorrenciasGestacao: null,
      descricaoIntercorrencias: null,
      alergias: null,
      descricaoAlergias: null,
      sangramentoGravidez: null,
      periodoSangramento: null,
      infeccoes: null,
      descricaoInfeccoes: null,
      doencasPreExistentesMae: null,
      descricaoDoencasPreExistentes: null,
      usoDrogasMae: null,
      descricaoUsoDeDrogas: null,
      examesRealizadosMae: null,
      descricaoExamesMae: null,
      medicamentosUtilizadosMae: null,
      descricaoMedicamentosMae: null,
      hospitalizacoesGestacao: null,
      periodoHospitalizacaoSemanas: null,
      motivoHospitalizacao: null,
      diasHospitalizacao: null,
      descricaoMotivoHospitalizacao: null,
      diagnostico: null,
      descricaoDiagnostico: null,
      observacoes: null,
    };
  }

  withPaciente(paciente) {
    this.preNatal.paciente = { ...paciente };
    return this;
  }

  withProcedencia(procedencia) {
    this.preNatal.procedencia = procedencia;
    return this;
  }

  withDescricaoProcedencia(descricaoProcedencia) {
    this.preNatal.descricaoProcedencia = descricaoProcedencia;
    return this;
  }

  withConvenio(convenio) {
    this.preNatal.convenio = convenio;
    return this;
  }

  withDescricaoConvenio(descricaoConvenio) {
    this.preNatal.descricaoConvenio = descricaoConvenio;
    return this;
  }

  withIdadeMaeEngravidar(idadeMaeEngravidar) {
    this.preNatal.idadeMaeEngravidar = idadeMaeEngravidar;
    return this;
  }

  withNumeroConsultas(numeroConsultas) {
    this.preNatal.numeroConsultas = numeroConsultas;
    return this;
  }

  withIdadePaiGestacao(idadePaiGestacao) {
    this.preNatal.idadePaiGestacao = idadePaiGestacao;
    return this;
  }

  withNumeroGestacoes(numeroGestacoes) {
    this.preNatal.numeroGestacoes = numeroGestacoes;
    return this;
  }

  withPesoInicialGravidez(pesoInicialGravidez) {
    this.preNatal.pesoInicialGravidez = pesoInicialGravidez;
    return this;
  }

  withNumeroFilhosVivos(numeroFilhosVivos) {
    this.preNatal.numeroFilhosVivos = numeroFilhosVivos;
    return this;
  }

  withPesoFinalGravidez(pesoFinalGravidez) {
    this.preNatal.pesoFinalGravidez = pesoFinalGravidez;
    return this;
  }

  withNumeroNatimortos(numeroNatimortos) {
    this.preNatal.numeroNatimortos = numeroNatimortos;
    return this;
  }

  withEstaturaMae(estaturaMae) {
    this.preNatal.estaturaMae = estaturaMae;
    return this;
  }

  withNumeroAbortos(numeroAbortos) {
    this.preNatal.numeroAbortos = numeroAbortos;
    return this;
  }

  withTempoGestacaoPrimeiraConsulta(tempoGestacaoPrimeiraConsulta) {
    this.preNatal.tempoGestacaoPrimeiraConsulta = tempoGestacaoPrimeiraConsulta;
    return this;
  }

  withPlanejamentoGestacao(planejamentoGestacao) {
    this.preNatal.planejamentoGestacao = planejamentoGestacao;
    return this;
  }

  withMetodoContraceptivoAnterior(metodoContraceptivoAnterior) {
    this.preNatal.metodoContraceptivoAnterior = metodoContraceptivoAnterior;
    return this;
  }

  withDescricaoMetodoContraceptivo(descricaoMetodoContraceptivo) {
    this.preNatal.descricaoMetodoContraceptivo = descricaoMetodoContraceptivo;
    return this;
  }

  withUsoAborto(usoAborto) {
    this.preNatal.usoAborto = usoAborto;
    return this;
  }

  withTempoGestacaoSemanas(tempoGestacaoSemanas) {
    this.preNatal.tempoGestacaoSemanas = tempoGestacaoSemanas;
    return this;
  }

  withMeioAborto(meioAborto) {
    this.preNatal.meioAborto = meioAborto;
    return this;
  }

  withDescricaoMeioAbortivo(descricaoMeioAbortivo) {
    this.preNatal.descricaoMeioAbortivo = descricaoMeioAbortivo;
    return this;
  }

  withConsanguinidadePais(consanguinidadePais) {
    this.preNatal.consanguinidadePais = consanguinidadePais;
    return this;
  }

  withDescricaoConsanguinidade(descricaoConsanguinidade) {
    this.preNatal.descricaoConsanguinidade = descricaoConsanguinidade;
    return this;
  }

  withIntercorrenciasGestacao(intercorrenciasGestacao) {
    this.preNatal.intercorrenciasGestacao = intercorrenciasGestacao;
    return this;
  }

  withDescricaoIntercorrencias(descricaoIntercorrencias) {
    this.preNatal.descricaoIntercorrencias = descricaoIntercorrencias;
    return this;
  }

  withAlergias(alergias) {
    this.preNatal.alergias = alergias;
    return this;
  }

  withDescricaoAlergias(descricaoAlergias) {
    this.preNatal.descricaoAlergias = descricaoAlergias;
    return this;
  }

  withSangramentoGravidez(sangramentoGravidez) {
    this.preNatal.sangramentoGravidez = sangramentoGravidez;
    return this;
  }

  withPeriodoSangramento(periodoSangramento) {
    this.preNatal.periodoSangramento = periodoSangramento;
    return this;
  }

  withInfeccoes(infeccoes) {
    this.preNatal.infeccoes = infeccoes;
    return this;
  }

  withDescricaoInfeccoes(descricaoInfeccoes) {
    this.preNatal.descricaoInfeccoes = descricaoInfeccoes;
    return this;
  }

  withDoencasPreExistentesMae(doencasPreExistentesMae) {
    this.preNatal.doencasPreExistentesMae = doencasPreExistentesMae;
    return this;
  }

  withDescricaoDoencasPreExistentes(descricaoDoencasPreExistentes) {
    this.preNatal.descricaoDoencasPreExistentes = descricaoDoencasPreExistentes;
    return this;
  }

  withUsoDrogasMae(usoDrogasMae) {
    this.preNatal.usoDrogasMae = usoDrogasMae;
    return this;
  }

  withDescricaoUsoDeDrogas(descricaoUsoDeDrogas) {
    this.preNatal.descricaoUsoDeDrogas = descricaoUsoDeDrogas;
    return this;
  }

  withExamesRealizadosMae(examesRealizadosMae) {
    this.preNatal.examesRealizadosMae = examesRealizadosMae;
    return this;
  }

  withDescricaoExamesMae(descricaoExamesMae) {
    this.preNatal.descricaoExamesMae = descricaoExamesMae;
    return this;
  }

  withMedicamentosUtilizadosMae(medicamentosUtilizadosMae) {
    this.preNatal.medicamentosUtilizadosMae = medicamentosUtilizadosMae;
    return this;
  }

  withDescricaoMedicamentosMae(descricaoMedicamentosMae) {
    this.preNatal.descricaoMedicamentosMae = descricaoMedicamentosMae;
    return this;
  }

  withHospitalizacoesGestacao(hospitalizacoesGestacao) {
    this.preNatal.hospitalizacoesGestacao = hospitalizacoesGestacao;
    return this;
  }

  withPeriodoHospitalizacaoSemanas(periodoHospitalizacaoSemanas) {
    this.preNatal.periodoHospitalizacaoSemanas = periodoHospitalizacaoSemanas;
    return this;
  }

  withMotivoHospitalizacao(motivoHospitalizacao) {
    this.preNatal.motivoHospitalizacao = motivoHospitalizacao;
    return this;
  }

  withDiasHospitalizacao(diasHospitalizacao) {
    this.preNatal.diasHospitalizacao = diasHospitalizacao;
    return this;
  }

  withDescricaoMotivoHospitalizacao(descricaoMotivoHospitalizacao) {
    this.preNatal.descricaoMotivoHospitalizacao = descricaoMotivoHospitalizacao;
    return this;
  }

  withDiagnostico(diagnostico) {
    this.preNatal.diagnostico = diagnostico;
    return this;
  }

  withDescricaoDiagnostico(descricaoDiagnostico) {
    this.preNatal.descricaoDiagnostico = descricaoDiagnostico;
    return this;
  }

  withObservacoes(observacoes) {
    this.preNatal.observacoes = observacoes;
    return this;
  }

  build() {
    return {
      ...this.preNatal,
      dataCriacao: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
    };
  }
}

export default PreNatalBuilder;
