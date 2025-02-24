class PreNatalBuilder {
    constructor() {
        this.preNatal = {
            paciente: {},
            procedencia: "",
            descricaoProcedencia: "",
            convenio: "",
            descricaoConvenio: "",
            idadeMaeEngravidar: "",
            numeroConsultas: "",
            idadePaiGestacao: "",
            numeroGestacoes: "",
            pesoInicialGravidez: "",
            numeroFilhosVivos: "",
            pesoFinalGravidez: "",
            numeroNatimortos: "",
            estaturaMae: "",
            numeroAbortos: "",
            tempoGestacaoPrimeiraConsulta: "",
            planejamentoGestacao: "",
            metodoContraceptivoAnterior: "",
            descricaoMetodoContraceptivo: "",
            usoAborto: "",
            tempoGestacaoSemanas: "",
            meioAborto: "",
            descricaoMeioAbortivo: "",
            consanguinidadePais: "",
            descricaoConsanguinidade: "",
            intercorrenciasGestacao: "",
            descricaoIntercorrencias: "",
            alergias: "",
            descricaoAlergias: "",
            sangramentoGravidez: "",
            periodoSangramento: "",
            infeccoes: "",
            descricaoInfeccoes: "",
            doencasPreExistentesMae: "",
            descricaoDoencasPreExistentes: "",
            usoDrogasMae: "",
            descricaoUsoDeDrogas: "",
            examesRealizadosMae: "",
            descricaoExamesMae: "",
            medicamentosUtilizadosMae: "",
            descricaoMedicamentosMae: "",
            hospitalizacoesGestacao: "",
            periodoHospitalizacaoSemanas: "",
            motivoHospitalizacao: "",
            diasHospitalizacao: "",
            descricaoMotivoHospitalizacao: "",
            diagnostico: "",
            descricaoDiagnostico: "",
            observacoes: ""
        };
    }

    setCampo(campo, valor) {
        this.preNatal[campo] = valor;
        return this;
    }

    withDados(dados) {
        Object.keys(dados).forEach(campo => {
            if (this.preNatal.hasOwnProperty(campo)) {
                this.preNatal[campo] = dados[campo];
            }
        });
        return this;
    }

    withPaciente(paciente) {
        return this.setCampo("paciente", { ...paciente });
    }

    withProcedencia(procedencia) {
        return this.setCampo("procedencia", procedencia);
    }
    withDescricaoProcedencia(descricaoProcedencia) {
        return this.setCampo("descricaoProcedencia", descricaoProcedencia);
    }
    withConvenio(convenio) {
        return this.setCampo("convenio", convenio);
    }
    withDescricaoConvenio(descricaoConvenio) {
        return this.setCampo("descricaoConvenio", descricaoConvenio);
    }
    withIdadeMaeEngravidar(idadeMaeEngravidar) {
        return this.setCampo("idadeMaeEngravidar", idadeMaeEngravidar);
    }
    withNumeroConsultas(numeroConsultas) {
        return this.setCampo("numeroConsultas", numeroConsultas);
    }
    withIdadePaiGestacao(idadePaiGestacao) {
        return this.setCampo("idadePaiGestacao", idadePaiGestacao);
    }
    withNumeroGestacoes(numeroGestacoes) {
        return this.setCampo("numeroGestacoes", numeroGestacoes);
    }
    withPesoInicialGravidez(pesoInicialGravidez) {
        return this.setCampo("pesoInicialGravidez", pesoInicialGravidez);
    }
    withNumeroFilhosVivos(numeroFilhosVivos) {
        return this.setCampo("numeroFilhosVivos", numeroFilhosVivos);
    }
    withPesoFinalGravidez(pesoFinalGravidez) {
        return this.setCampo("pesoFinalGravidez", pesoFinalGravidez);
    }
    withNumeroNatimortos(numeroNatimortos) {
        return this.setCampo("numeroNatimortos", numeroNatimortos);
    }
    withEstaturaMae(estaturaMae) {
        return this.setCampo("estaturaMae", estaturaMae);
    }
    withNumeroAbortos(numeroAbortos) {
        return this.setCampo("numeroAbortos", numeroAbortos);
    }
    withTempoGestacaoPrimeiraConsulta(tempoGestacaoPrimeiraConsulta) {
        return this.setCampo("tempoGestacaoPrimeiraConsulta", tempoGestacaoPrimeiraConsulta);
    }
    withPlanejamentoGestacao(planejamentoGestacao) {
        return this.setCampo("planejamentoGestacao", planejamentoGestacao);
    }
    withMetodoContraceptivoAnterior(metodoContraceptivoAnterior) {
        return this.setCampo("metodoContraceptivoAnterior", metodoContraceptivoAnterior);
    }
    withDescricaoMetodoContraceptivo(descricaoMetodoContraceptivo) {
        return this.setCampo("descricaoMetodoContraceptivo", descricaoMetodoContraceptivo);
    }
    withUsoAborto(usoAborto) {
        return this.setCampo("usoAborto", usoAborto);
    }
    withTempoGestacaoSemanas(tempoGestacaoSemanas) {
        return this.setCampo("tempoGestacaoSemanas", tempoGestacaoSemanas);
    }
    withMeioAborto(meioAborto) {
        return this.setCampo("meioAborto", meioAborto);
    }
    withDescricaoMeioAbortivo(descricaoMeioAbortivo) {
        return this.setCampo("descricaoMeioAbortivo", descricaoMeioAbortivo);
    }
    withConsanguinidadePais(consanguinidadePais) {
        return this.setCampo("consanguinidadePais", consanguinidadePais);
    }
    withDescricaoConsanguinidade(descricaoConsanguinidade) {
        return this.setCampo("descricaoConsanguinidade", descricaoConsanguinidade);
    }
    withObservacoes(observacoes) {
        return this.setCampo("observacoes", observacoes);
    }

    build() {
        return {
            ...this.preNatal,
            dataCriacao: new Date().toLocaleString("pt-Br", { timeZone: "America/Sao_Paulo" })
        };
    }
}

export default PreNatalBuilder;