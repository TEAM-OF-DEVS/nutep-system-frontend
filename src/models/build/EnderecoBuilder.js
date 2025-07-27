class EnderecoBuilder {
  constructor() {
    this.endereco = {
      id: null,
      dataCriacao: null,
      ativo: true,
      cep: "",
      dsLogradouro: "",
      nrLogradouro: "",
      dsComplementoLogradouro: "",
      dsBairro: "",
      municipioLogradouro: {
        id: null,
        dataCriacao: null,
        ativo: true,
        nomeMunicipio: "",
        estado: {
          id: null,
          dataCriacao: null,
          ativo: true,
          nomeEstado: "",
          uf: "",
        },
      },
      tpMoradia: null,
    };
  }

  withCep(cep) {
    this.endereco.cep = cep;
    return this;
  }

  withLogradouro(logradouro) {
    this.endereco.dsLogradouro = logradouro;
    return this;
  }

  withNumero(numero) {
    this.endereco.nrLogradouro = numero;
    return this;
  }

  withComplemento(complemento) {
    this.endereco.dsComplementoLogradouro = complemento;
    return this;
  }

  withBairro(bairro) {
    this.endereco.dsBairro = bairro;
    return this;
  }

  withTpMoradia(tipo) {
    this.endereco.tpMoradia = tipo;
    return this;
  }
  withMunicipio(municipioLogradouro) {
    this.endereco.municipioLogradouro = {
      ...municipioLogradouro,
      ativo: true,
      estado: {
        ...municipioLogradouro.estado,
        ativo: true,
      },
    };
    return this;
  }

  withDataCriacao(data = new Date().toISOString()) {
    this.endereco.dataCriacao = data;
    this.endereco.municipioLogradouro.dataCriacao = data;
    this.endereco.municipioLogradouro.estado.dataCriacao = data;
    return this;
  }

  withId(id) {
    this.endereco.id = id;
    return this;
  }

  build() {
    return this.endereco;
  }
}

export default EnderecoBuilder;
