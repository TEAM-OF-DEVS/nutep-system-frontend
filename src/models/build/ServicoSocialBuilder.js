import SimOuNao from "../enum/SimNao";

class ServicoSocialBuilder {
    constructor() {
        this.dadosFormulario = {}
        this.servicoSocial = {
            paciente: {},
            configuracaoFamiliar: "",
            descricaoConfiguracaoFamiliar: "",
            situacaoConjugalPais: "",
            presencaDosPais: "",
            tipoAcolhimento: "",
            abrigo: "",
            descricaoAbrigo: "",
            banheiro: "",
            dvd: "",
            automovel: "",
            microondas: "",
            lavaLoucas: "",
            motocicleta: "",
            freezer: "",
            secadoraRoupa: "",
            empregadosDomesticos: "",
            aguaEncanada: "",
            microcomputador: "",
            ruaPavimentada: "",
            geladeira: "",
            grauInstrucaoChefeFamilia: "",
            lavaRoupa: "",
            periodicidadeTerapia: "",
            descricaoPeriodicidadeTerapia: "",
            diasTurnoTerapia: "",
            tipoTerapia: "",
            situacaoAtualInstituicao: "",
            observacoes: ""
        };
    }

    setCampo(campo, valor) {
        this.servicoSocial[campo] = valor;
        return this;
    }

    withPaciente(paciente) {
        return this.setCampo("paciente", { ...paciente });
    }

    withDataAtendimento(dataAtendimento) {
        return this.setCampo("dataAtendimento", dataAtendimento);
    }

    withConfiguracaoFamiliar(configuracaoFamiliar) {
        return this.setCampo("configuracaoFamiliar", configuracaoFamiliar);
    }

    withDescricaoConfiguracaoFamiliar(descricaoConfiguracaoFamiliar) {
        return this.setCampo("descricaoConfiguracaoFamiliar", descricaoConfiguracaoFamiliar);
    }

    withSituacaoConjugalPais(situacaoConjugalPais) {
        return this.setCampo("situacaoConjugalPais", situacaoConjugalPais);
    }

    withPresencaDosPais(presencaDosPais) {
        return this.setCampo("presencaDosPais", presencaDosPais);
    }

    withTipoAcolhimento(tipoAcolhimento) {
        return this.setCampo("tipoAcolhimento", tipoAcolhimento);
    }

    withAbrigo(abrigo) {
        return this.setCampo("abrigo", abrigo);
    }

    withDescricaoAbrigo(descricaoAbrigo) {
        return this.setCampo("descricaoAbrigo", descricaoAbrigo);
    }

    withBanheiro(banheiro) {
        return this.setCampo("banheiro", banheiro);
    }

    withDvd(dvd) {
        return this.setCampo("dvd", dvd);
    }

    withAutomovel(automovel) {
        return this.setCampo("automovel", automovel);
    }

    withMicroOndas(microondas) {
        return this.setCampo("microondas", microondas);
    }

    withLavaLoucas(lavaLoucas) {
        return this.setCampo("lavaLoucas", lavaLoucas);
    }

    withMotocicleta(motocicleta) {
        return this.setCampo("motocicleta", motocicleta);
    }

    withFreezer(freezer) {
        return this.setCampo("freezer", freezer);
    }

    withSecadoraRoupa(secadoraRoupa) {
        return this.setCampo("secadoraRoupa", secadoraRoupa);
    }

    withEmpregadosDomesticos(empregadosDomesticos) {
        return this.setCampo("empregadosDomesticos", empregadosDomesticos);
    }

    withAguaEncanada(aguaEncanada) {
        return this.setCampo("aguaEncanada", aguaEncanada);
    }

    withMicrocomputador(microcomputador) {
        return this.setCampo("microcomputador", microcomputador);
    }

    withRuaPavimentada(ruaPavimentada) {
        return this.setCampo("ruaPavimentada", ruaPavimentada);
    }

    withGeladeira(geladeira) {
        return this.setCampo("geladeira", geladeira);
    }

    withGrauInstrucaoChefeFamilia(grauInstrucaoChefeFamilia) {
        return this.setCampo("grauInstrucaoChefeFamilia", grauInstrucaoChefeFamilia);
    }

    withLavaRoupa(lavaRoupa) {
        return this.setCampo("lavaRoupa", lavaRoupa);
    }

    withPeriodicidadeTerapia(periodicidadeTerapia) {
        return this.setCampo("periodicidadeTerapia", periodicidadeTerapia);
    }

    withDescricaoPeriodicidadeTerapia(descricaoPeriodicidadeTerapia) {
        return this.setCampo("descricaoPeriodicidadeTerapia", descricaoPeriodicidadeTerapia);
    }

    withDiasTurnoTerapia(diasTurnoTerapia) {
        return this.setCampo("diasTurnoTerapia", diasTurnoTerapia);
    }

    withTipoTerapia(tipoTerapia) {
        return this.setCampo("tipoTerapia", tipoTerapia);
    }

    withSituacaoAtualInstituicao(situacaoAtualInstituicao) {
        return this.setCampo("situacaoAtualInstituicao", situacaoAtualInstituicao);
    }

    withObservacoes(observacoes) {
        return this.setCampo("observacoes", observacoes);
    }

    withDados(dados) {
        Object.keys(dados).forEach(campo => {
          if (this.servicoSocial.hasOwnProperty(campo)) {
            this.servicoSocial[campo] = dados[campo];
          }
        });
        return this;
      }

    build() {
        return {
            ...this.servicoSocial,
            dataCriacao: new Date().toLocaleString("pt-Br", { timeZone: "America/Sao_Paulo" })
        };
    }
}

export default ServicoSocialBuilder;
