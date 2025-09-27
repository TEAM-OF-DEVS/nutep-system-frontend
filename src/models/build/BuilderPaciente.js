class BuilderPaciente {
  constructor() {
    this.paciente = {
      id: null,
      dataCriacao: null,
      ativo: true,
      dsNome: null,
      dataNascimento: null,
      sexo: null,
      tipoRacaCor: null,
      localDeNascimento: null,
      dsOutroTipoDeLocalDeNascimentoPaciente: null,
      dsOutroTipoDeProcedenciaPaciente: null,
      dataAdmissao: null,
      descricaoProntuario: null,
      descricaoCartaoSUS: null,
      constaPai: false,
      constaMae: false,
      cpf: null,
      nacionalidade: null,
      maeResponsavel: null,
      paiResponsavel: null,
      naturalidade: null,
      endereco: null,
      procedencia: null,
      responsavel: null,
      temMaeResponsalvel: true,
      temPaiResponsavel: true,
      temResponsavel: true,
    };
  }

  withId(id) {
    this.paciente.id = id;
    return this;
  }

  withTemMaeResponsavel(temMaeResponsavel) {
    this.paciente.temMaeResponsalvel = temMaeResponsavel;
    return this;
  }

  withTemPaiResponsavel(temPaiResponsavel) {
    this.paciente.temPaiResponsavel = temPaiResponsavel;
    return this;
  }

  withTemResponsavel(temResponsavel) {
    this.paciente.temResponsavel = temResponsavel;
    return this;
  }

  withDataCriacao(data) {
    this.paciente.dataCriacao = data;
    return this;
  }

  withNome(nome) {
    this.paciente.dsNome = nome;
    return this;
  }

  withSexo(sexo) {
    this.paciente.sexo = sexo;
    return this;
  }

  withRacaCor(raca) {
    this.paciente.tipoRacaCor = raca;
    return this;
  }

  withLocalDeNascimento(local) {
    this.paciente.localDeNascimento = local;
    return this;
  }

  withMaeResponsavel(maeResponsavel) {
    this.paciente.maeResponsavel = maeResponsavel;
    return this;
  }

  withPaiResponsavel(paiResponsavel) {
    this.paciente.paiResponsavel = paiResponsavel;
    return this;
  }

  withNaturalidade({ id, dataCriacao, nomeMunicipio, estado }) {
    this.paciente.naturalidade = {
      id,
      dataCriacao,
      ativo: true,
      nomeMunicipio,
      estado: {
        ...estado,
        ativo: true,
      },
    };
    return this;
  }

  withEndereco(endereco) {
    this.paciente.endereco = {
      ...endereco,
      ativo: true,
    };
    return this;
  }

  withProcedencia(procedencia) {
    this.paciente.procedencia = {
      ...(procedencia || null),
    };
    return this;
  }

  withOutrosTipos(outroProcedencia, outroLocalNascimento) {
    this.paciente.dsOutroTipoDeProcedenciaPaciente = outroProcedencia;
    this.paciente.dsOutroTipoDeLocalDeNascimentoPaciente = outroLocalNascimento;
    return this;
  }

  withResponsavel(tipo, responsavel) {
    this.paciente[tipo] = {
      ...responsavel,
    };
    return this;
  }

  withAdmissao(data) {
    this.paciente.dataAdmissao = data;
    return this;
  }

  withDescricaoProntuario(descricao) {
    this.paciente.descricaoProntuario = descricao;
    return this;
  }

  withCartaoSUS(sus) {
    this.paciente.descricaoCartaoSUS = sus;
    return this;
  }

  withConstaPaiMae(pai, mae) {
    this.paciente.constaPai = pai;
    this.paciente.constaMae = mae;
    return this;
  }

  withNacionalidade(nacionalidade) {
    this.paciente.nacionalidade = nacionalidade;
    return this;
  }

  withCPF(cpf) {
    this.paciente.cpf = cpf;
    return this;
  }

  withDataNascimento(dataNascimento) {
    this.paciente.dataNascimento = dataNascimento;
    return this;
  }

  build() {
    return this.paciente;
  }
}
export default BuilderPaciente;
