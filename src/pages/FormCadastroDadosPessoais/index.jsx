import { useEffect, useState } from "react";
import { FormField } from "../../components/FormField/FormField.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import Nacionalidade from "../../models/enum/Nacionalidade.js";
import RacaCor from "../../models/enum/RacaCor.js";
import TipoMoradia from "../../models/enum/TipoMoradia.js";
import EstadoCivil from "../../models/enum/EstadoCivil.js";
import Escolaridade from "../../models/enum/Escolaridade.js";
import Vinculo from "../../models/enum/Vinculo.js";
import LocalNascimento from "../../models/enum/LocalNascimento.js";
import SimOuNao from "../../models/enum/SimNao.js";
import Sexo from "../../models/enum/Sexo.js";
import MunicipioService from "../../services/municipioService.jsx";
import PacienteService from "../../services/pacienteService.jsx";
import BuilderPaciente from "../../models/build/BuilderPaciente.js";
import HttpStatusGroup from "../../util/HttpStatusGroup.js";

import {
  validateField,
  validateForm,
} from "../../validator/validateFormPaciente.jsx";
import ModalSave from "../../components/ModalSave/ModalSave.jsx";
import EstadoService from "../../services/estadoService.jsx";
import ServiceUtil from "../../services/serviceUtil.jsx";
import CepService from "../../services/cepService.jsx";
import ResponsavelService from "../../services/responsavelService.jsx";
import ResponsavelBuilder from "../../models/build/ResponsavelBuilder.js";
import EnderecoBuilder from "../../models/build/EnderecoBuilder.js";

export function FormCadastroDadosPessoais() {
  const simOuNao = Object.entries(SimOuNao).map(([key, value]) => ({
    value: value,
    label: key,
  }));
  const nacionalidade = Object.entries(Nacionalidade).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const tipoRacaCor = Object.entries(RacaCor).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const tipoMoradia = Object.entries(TipoMoradia).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const locaisDeNascimento = Object.entries(LocalNascimento).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const estadoCivil = Object.entries(EstadoCivil).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const escolaridade = Object.entries(Escolaridade).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const vinculo = Object.entries(Vinculo).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const sexo = Object.entries(Sexo).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const [loading, setLoading] = useState(false);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [naturalidade, setNaturalidade] = useState([]);
  const [uf, setUF] = useState([]);
  const [ocupacoes, setOcupacoes] = useState([]);
  const [procedencias, setProcedencias] = useState([]);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [paiOuMaeResponsavel, setPaiOuMaeResponsavel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const carregarEstados = async () => {
    try {
      setLoading(true);
      const estados = await EstadoService.getAll();
      setEstados(estados);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarUf = async () => {
    try {
      setLoading(true);
      const ufs = await EstadoService.getAllUFs();
      setUF(ufs);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarCidadesOuMunicipios = async () => {
    try {
      setLoading(true);
      const citys = await MunicipioService.getByUF("CE");
      setCidades(citys);
      setNaturalidade(citys);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarOcupacoes = async () => {
    try {
      setLoading(true);
      const ocupacoesAPI = await ServiceUtil.getAllOcupacoes();
      setOcupacoes(ocupacoesAPI);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarProcedencias = async () => {
    try {
      setLoading(true);
      const procedenciasAPI = await ServiceUtil.getAllProcedencias();
      setProcedencias(procedenciasAPI);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProcedencias();
    carregarOcupacoes();
    carregarCidadesOuMunicipios();
    carregarUf();
    carregarEstados();
  }, []);

  const validationRules = {
    dataAdmissao: { required: true },
    descricaoProntuario: { required: true },
    nomeCompleto: { required: true },
    dataNascimento: { required: true },
    cpf: { required: false },
    nacionalidade: { required: true },
    naturalidade: { required: true },
    uf: { required: true },
    sexo: { required: true },
    tipoRacaCor: { required: true },
    descricaoCartaoSUS: { required: true },
    localDeNascimento: { required: true },
    // dsOutroTipoDeLocalDeNascimentoPaciente: { required: false },
    endereco: { required: false },
    cep: { required: true },
    logradouro: { required: true },
    numero: { required: true },
    // complemento: { required: false },
    bairro: { required: true },
    municipioLogradouro: { required: true },
    estado: { required: true },
    tpMoradia: { required: true },

    nomeMae: { required: true },
    dataNascimentoMae: { required: true },
    responsavelPelaCriancaMae: { required: true },
    cpfMae: { required: true },
    tipoRacaCorMae: { required: true },
    estadoCivilMae: { required: true },
    telefone1Mae: { required: true },
    telefone2Mae: { required: false },
    escolaridadeMae: { required: true },
    ocupacaoMae: { required: true },
    descricaoOcupacaoMae: { required: false },

    nomePai: { required: !isChecked },
    dataNascimentoPai: { required: !isChecked },
    responsavelPelaCriancaPai: { required: !isChecked },
    cpfPai: { required: !isChecked },
    tipoRacaCorPai: { required: !isChecked },
    estadoCivilPai: { required: !isChecked },
    telefone1Pai: { required: !isChecked },
    telefone2Pai: { required: false },
    escolaridadePai: { required: !isChecked },
    ocupacaoPai: { required: !isChecked },
    descricaoOcupacaoPai: { required: !isChecked },

    //  nomeResponsavel: { required: paiOuMaeResponsavel },
    // dataNascimentoResponsavel: { required: paiOuMaeResponsavel },
    // vinculoResponsavel: { required: paiOuMaeResponsavel },
    // descricaoVinculoResponsavel: { required: false },
    // cpfResponsavel: { required: paiOuMaeResponsavel },
    // tipoRacaCorResponsavel: { required: paiOuMaeResponsavel },
    // estadoCivilResponsavel: { required: paiOuMaeResponsavel },
    // telefone1Responsavel: { required: paiOuMaeResponsavel },
    // telefone2Responsavel: { required: false },
    // escolaridadeResponsavel: { required: paiOuMaeResponsavel },
    // ocupacaoResponsavel: { required: paiOuMaeResponsavel },
    // descricaoOcupacaoResponsavel: { required: false },


    procedencia: { required: true },
    // dsOutroTipoDeProcedenciaPaciente: { required: false },
  };

  const [dadosFormulario, setDadosFormulario] = useState({
    ativo: true,
    dataAdmissao: "",
    descricaoProntuario: "",
    nomeCompleto: "",
    dataNascimento: "",
    cpf: "",
    nacionalidade: "",
    naturalidade: {},
    uf: "",
    sexo: "",
    tipoRacaCor: "",
    descricaoCartaoSUS: "",
    localDeNascimento: "",
    dsOutroTipoDeLocalDeNascimentoPaciente: "",
    endereco: {},
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipioLogradouro: "",
    estado: {},
    tpMoradia: "",
    cpfMae: "",
    cpfPai: "",
    cpfResponsavel: "",
    nomeMae: "",
    nomePai: "",
    nomeResponsavel: "",
    dataNascimentoMae: "",
    dataNascimentoPai: "",
    dataNascimentoResponsavel: "",
    tipoRacaCorMae: "",
    tipoRacaCorPai: "",
    tipoRacaCorResponsavel: "",
    estadoCivilMae: "",
    estadoCivilPai: "",
    estadoCivilResponsavel: "",
    telefone1Mae: "",
    telefone2Mae: "",
    telefone1Pai: "",
    telefone2Pai: "",
    telefone1Responsavel: "",
    telefone2Responsavel: "",
    escolaridadeMae: "",
    escolaridadePai: "",
    escolaridadeResponsavel: "",
    ocupacaoMae: {},
    ocupacaoPai: {},
    ocupacaoResponsavel: {},
    descricaoOcupacaoMae: "",
    descricaoOcupacaoPai: "",
    descricaoOcupacaoResponsavel: "",
    responsavelPelaCriancaMae: "",
    responsavelPelaCriancaPai: "",
    vinculoResponsavel: "",
    descricaoVinculoResponsavel: "",
    procedencia: {},
    dsOutroTipoDeProcedenciaPaciente: "",
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  const handleListCitysByUF = async (e) => {
    const value = JSON.parse(e.target.value);
    try {
      setLoading(true);
      const citys = await MunicipioService.getByUF(value.uf);
      setCidades(citys);
    } catch (error) {
    } finally {
      setLoading(false);
    }
    setDadosFormulario((prevState) => ({
      ...prevState,
      uf: value ? value.uf : "",
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    console.log("DADOS ENVIADO", dadosFormulario);
  }, [dadosFormulario]);

  useEffect(() => {
    const carregarNaturalidadesPorUF = async () => {
      if (!dadosFormulario.uf) return;

      try {
        setLoading(true);

        const municipios = await MunicipioService.getByUF(dadosFormulario.uf);

        const formatados = municipios.map((municipio) => ({
          ...municipio,
          nomeMunicipio:
            municipio.nome || municipio.nomeMunicipio || municipio.descricao,
        }));
        setNaturalidade(formatados);
      } catch (error) {
        console.error("Erro ao buscar naturalidades por UF:", error);
        setNaturalidade([]);
      } finally {
        setLoading(false);
      }
    };

    carregarNaturalidadesPorUF();
  }, [dadosFormulario.uf]);

const handleResponsavelChange = (valueMae, valuePai) => {
  const isResponsavel = valueMae === "Sim" || valuePai === "Sim";
  setPaiOuMaeResponsavel(isResponsavel);

  
  if (!isResponsavel) {
    setDadosFormulario(prev => ({
      ...prev,
      nomeResponsavel: "",
      dataNascimentoResponsavel: "",
      vinculoResponsavel: "",
      cpfResponsavel: "",
      tipoRacaCorResponsavel: "",
      estadoCivilResponsavel: "",
      telefone1Responsavel: "",
      escolaridadeResponsavel: "",
      ocupacaoResponsavel: "",
      descricaoOcupacaoResponsavel: "",
      descricaoVinculoResponsavel: ""
    }));
  }
};

  const onChange = async (e) => {
    const { name, value } = e.target;

    let parsedValue;
    try {
      parsedValue = JSON.parse(value);
    } catch {
      parsedValue = value;
    }
    const upperCaseValue =
      typeof parsedValue === "string" ? parsedValue.toUpperCase() : parsedValue;

    const keys = name.split(".");
    if (keys.length > 1) {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: upperCaseValue,
        },
      }));
    } else {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [name]: upperCaseValue,
      }));
    }

    if (name === "cep") {
      if (value.length === 0) {
        setDadosFormulario((prevState) => ({
          ...prevState,
          logradouro: "",
          bairro: "",
          municipioLogradouro: "",
          estado: "",
        }));
      } else if (value.length === 9) {
        try {
          const endereco = await CepService.getById(value);
          const endJson = endereco;
          const muniJson = endJson.municipioLogradouro;
          setDadosFormulario((prevState) => ({
            ...prevState,
            cep: endJson.cep,
            logradouro: endJson.dsLogradouro || "",
            bairro: endJson.dsBairro || "",
            municipioLogradouro: endJson.municipioLogradouro,
            estado: muniJson.estado,
          }));
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    }

    if (
      name === "responsavelPelaCriancaMae" ||
      name === "responsavelPelaCriancaPai"
    ) {
      handleResponsavelChange(
        name === "responsavelPelaCriancaMae"
          ? value
          : dadosFormulario.responsavelPelaCriancaMae,
        name === "responsavelPelaCriancaPai"
          ? value
          : dadosFormulario.responsavelPelaCriancaPai,
      );
    }

    const error = validateField(name, value, validationRules[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async () => {
    const formErrors = validateForm(dadosFormulario, validationRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      await enviarPaciente(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function returnValues(dadosFormulario) {
    const pacientePreSalvo = new BuilderPaciente();
    const endereco = await criarEndereco();
    const maeResponsavel = await criarResponsavelMae();
    const paiResponsavel = await criarResponsavelPai();
    const responsavel = await criarResponsavel();

    pacientePreSalvo
      .withCPF(dadosFormulario.cpf)
      .withAdmissao(dadosFormulario.dataAdmissao)
      .withDataNascimento(dadosFormulario.dataNascimento)
      .withCartaoSUS(dadosFormulario.descricaoCartaoSUS)
      .withDescricaoProntuario(dadosFormulario.descricaoProntuario)
      .withNome(dadosFormulario.nomeCompleto)
      .withLocalDeNascimento(dadosFormulario.localDeNascimento)
      .withSexo(dadosFormulario.sexo)
      .withRacaCor(dadosFormulario.tipoRacaCor)
      .withOutrosTipos(
        dadosFormulario.dsOutroTipoDeProcedenciaPaciente,
        dadosFormulario.dsOutroTipoDeLocalDeNascimentoPaciente,
      )
      .withConstaPaiMae(dadosFormulario.constaPai, dadosFormulario.constaMae)
      .withNacionalidade(dadosFormulario.nacionalidade)
      .withProcedencia(dadosFormulario.procedencia)
      .withNaturalidade(dadosFormulario.naturalidade)
      .withEndereco(endereco)
      .withMaeResponsavel(dadosFormulario.responsavelPelaCriancaMae)
      .withPaiResponsavel(dadosFormulario.responsavelPelaCriancaPai)
      .withResponsavel("paiResponsavel", paiResponsavel)
      .withResponsavel("maeResponsavel", maeResponsavel)
      .withResponsavel("responsavel", responsavel);
    return pacientePreSalvo.build();
  }

  async function criarResponsavelMae() {
    let maeResponsavel;
    try {
      maeResponsavel = await ResponsavelService.getByCPF(
        dadosFormulario.cpfMae,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        maeResponsavel = new ResponsavelBuilder()
          .withCPF(dadosFormulario.cpfMae)
          .withDataNascimento(dadosFormulario.dataNascimentoMae)
          .withEscolaridade(dadosFormulario.escolaridadeMae)
          .withEstadoCivil(dadosFormulario.estadoCivilMae)
          .withNome(dadosFormulario.nomeMae)
          .withOcupacao(dadosFormulario.ocupacaoMae)
          .withOutraOcupacao(dadosFormulario.descricaoOcupacaoMae)
          .withRacaCor(dadosFormulario.tipoRacaCorMae)
          .withTelefone1(dadosFormulario.telefone1Mae)
          .withTelefone2(dadosFormulario.telefone2Mae)
          .build();
      } else {
        throw error;
      }
    }
    return maeResponsavel;
  }

  async function criarResponsavelPai() {
    let paiResponsavel;

    try {
      paiResponsavel = await ResponsavelService.getByCPF(
        dadosFormulario.cpfPai,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        paiResponsavel = new ResponsavelBuilder()
          .withCPF(dadosFormulario.cpfPai)
          .withDataNascimento(dadosFormulario.dataNascimentoPai)
          .withEscolaridade(dadosFormulario.escolaridadePai)
          .withEstadoCivil(dadosFormulario.estadoCivilPai)
          .withNome(dadosFormulario.nomePai)
          .withOcupacao(dadosFormulario.ocupacaoPai)
          .withOutraOcupacao(dadosFormulario.descricaoOcupacaoPai)
          .withRacaCor(dadosFormulario.tipoRacaCorPai)
          .withTelefone1(dadosFormulario.telefone1Pai)
          .withTelefone2(dadosFormulario.telefone2Pai)
          .build();
      }
    }
    return paiResponsavel;
  }

  async function criarResponsavel() {
    let responsavel;
    try {
      responsavel = await ResponsavelService.getByCPF(
        dadosFormulario.cpfResponsavel,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        responsavel = new ResponsavelBuilder()
          .withCPF(dadosFormulario.cpfResponsavel)
          .withDataNascimento(dadosFormulario.dataNascimentoResponsavel)
          .withEscolaridade(dadosFormulario.escolaridadeResponsavel)
          .withEstadoCivil(dadosFormulario.estadoCivilResponsavel)
          .withNome(dadosFormulario.nomeResponsavel)
          .withOcupacao(dadosFormulario.ocupacaoResponsavel)
          .withOutraOcupacao(dadosFormulario.descricaoOcupacaoResponsavel)
          .withTipoVinculo(dadosFormulario.vinculoResponsavel)
          .withOutroTipoVinculo(dadosFormulario.descricaoVinculoResponsavel)
          .withRacaCor(dadosFormulario.tipoRacaCorResponsavel)
          .withTelefone1(dadosFormulario.telefone1Responsavel)
          .withTelefone2(dadosFormulario.telefone2Responsavel)
          .build();
      }
    }
    return responsavel;
  }

  async function criarEndereco() {
    const endereco = new EnderecoBuilder()
      .withCep(dadosFormulario.cep)
      .withLogradouro(dadosFormulario.logradouro)
      .withNumero(dadosFormulario.numero)
      .withComplemento(dadosFormulario.complemento)
      .withBairro(dadosFormulario.bairro)
      .withTpMoradia(dadosFormulario.tpMoradia)
      .withMunicipio(dadosFormulario.municipioLogradouro)
      .build();
    return endereco;
  }

  async function enviarPaciente(dadosFormulario) {
    const paciente = await returnValues(dadosFormulario);
    try {
      const resposta = await PacienteService.create(paciente);
      handleShowAlert(resposta.status);
    } catch (erro) {
      if (erro instanceof Promise) {
        erro = await erro;
      }
      console.error("Erro ao salvar paciente: ", erro.message || erro);
      throw new Error(`Erro ao salvar paciente: ${erro.message}`);
    }
  }

  return (
    <>
      <form>
        {HttpStatusGroup.isSuccess(message) ? (
          <ModalSave
            title="Cadastrado com sucesso!"
            message="O paciente foi cadastrado com sucesso."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : HttpStatusGroup.isClientError(message) ? (
          <ModalSave
            title="Erro no cadastro"
            message="Houve um problema ao cadastrar o paciente."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null}

        <FormGroup
          title="Dados do Paciente"
          description="Cadastro de dados pessoais do Paciente"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 px-8 pt-4">
            <FormField
              name="dataAdmissao"
              label="Data da Admissão"
              placeholder="00/00/0000"
              type="text"
              styleClass="campoObrigatorio"
              onChange={onChange}
              value={dadosFormulario.dataAdmissao}
              error={errors.dataAdmissao}
              className="col-span-1"
            />
            <FormField
              name="descricaoProntuario"
              label="Prontuário"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.descricaoProntuario}
              className="col-span-1"
            />
            <FormField
              name="dataNascimento"
              label="Data de Nascimento"
              placeholder="00/00/0000"
              type="text"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.dataNascimento}
              value={dadosFormulario.dataNascimento}
              className="col-span-1"
            />
            <FormField
              name="nomeCompleto"
              label="Nome Completo"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.nomeCompleto}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 px-8 pt-4">
            <FormField
              name="cpf"
              label="CPF"
              styleClass="campoObrigatorio"
              placeholder="000.000.000-00"
              onChange={onChange}
              error={errors.cpf}
              value={dadosFormulario.cpf}
            />
            <FormField
              name="nacionalidade"
              label="Nacionalidade"
              styleClass="campoObrigatorio"
              isSelect
              options={nacionalidade}
              onChange={onChange}
              error={errors.nacionalidade}
            />
            <FormField
              name="uf"
              label="UF"
              displayAttribute="uf"
              styleClass="campoObrigatorio"
              isSelect
              isAPI
              options={uf}
              onChange={handleListCitysByUF}
              error={errors.uf}
            />
            <FormField
              name="naturalidade"
              label="Naturalidade"
              styleClass="campoObrigatorio"
              isAPI
              isSelect
              options={naturalidade}
              onChange={onChange}
              displayAttribute="nomeMunicipio"
              error={errors.naturalidade}
            />
            <FormField
              name="sexo"
              label="Sexo"
              styleClass="campoObrigatorio"
              isSelect
              options={sexo}
              onChange={onChange}
              error={errors.sexo}
            />
            <FormField
              name="tipoRacaCor"
              label="Raça/Cor"
              styleClass="campoObrigatorio"
              isSelect
              options={tipoRacaCor}
              onChange={onChange}
              error={errors.tipoRacaCor}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="descricaoCartaoSUS"
              label="Número do cartão SUS"
              styleClass="campoObrigatorio"
              placeholder="000 0000 0000 0000"
              onChange={onChange}
              error={errors.descricaoCartaoSUS}
              value={dadosFormulario.descricaoCartaoSUS}
            />
            <FormField
              name="localDeNascimento"
              label="Local de Nascimento"
              styleClass="campoObrigatorio"
              isSelect
              options={locaisDeNascimento}
              onChange={onChange}
              error={errors.localDeNascimento}
            />
            <FormField
              name="dsOutroTipoDeLocalDeNascimentoPaciente"
              label="Descrição Local de Nascimento"
              onChange={onChange}
              error={errors.dsOutroTipoDeLocalDeNascimentoPaciente}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="cep"
              label="CEP"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.cep}
              value={dadosFormulario.cep}
            />
            <FormField
              name="logradouro"
              label="Logradouro"
              value={dadosFormulario.logradouro}
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.logradouro}
            />
            <FormField
              name="numero"
              label="Número"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.numero}
              value={dadosFormulario.numero}
            />
            <FormField
              name="complemento"
              label="Complemento"
              onChange={onChange}
              error={errors.complemento}
            />
            <FormField
              name="bairro"
              value={dadosFormulario.bairro}
              label="Bairro"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.bairro}
            />
            <FormField
              name="municipioLogradouro"
              value={dadosFormulario.municipioLogradouro?.nomeMunicipio}
              label="Cidade"
              styleClass="campoObrigatorio"
              isAPI
              options={cidades}
              onChange={onChange}
              displayAttribute="nomeMunicipio"
              error={errors.municipioLogradouro}
            />
            <FormField
              name="estado"
              label="Estado"
              styleClass="campoObrigatorio"
              isSelect
              isApi
              options={estados}
              onChange={onChange}
              displayAttribute="nomeEstado"
              error={errors.estado}
            />
            <FormField
              name="tpMoradia"
              label="Tipo de moradia"
              isSelect
              styleClass="campoObrigatorio"
              options={tipoMoradia}
              onChange={onChange}
              error={errors.tpMoradia}
            />
          </div>
        </FormGroup>

        <FormGroup
          title="Dados dos Pais"
          description="Cadastro de dados pessoais dos pais do Paciente"
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="nomeMae"
              label="Nome da Mãe"
              placeholder="Nome"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.nomeMae}
            />
            <FormField
              name="dataNascimentoMae"
              label="Data de Nascimento"
              type="text"
              placeholder="00/00/0000"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.dataNascimentoMae}
              value={dadosFormulario.dataNascimentoMae}
            />
            <FormField
              name="cpfMae"
              label="CPF"
              styleClass="campoObrigatorio"
              placeholder="000.000.000-00"
              onChange={onChange}
              error={errors.cpfMae}
              value={dadosFormulario.cpfMae}
            />
            <FormField
              name="responsavelPelaCriancaMae"
              label="Responsável pela criança"
              styleClass="campoObrigatorio"
              isSelect
              options={simOuNao}
              onChange={onChange}
              error={errors.responsavelPelaCriancaMae}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="tipoRacaCorMae"
              label="Raça/Cor"
              styleClass="campoObrigatorio"
              isSelect
              options={tipoRacaCor}
              onChange={onChange}
              error={errors.tipoRacaCorMae}
            />
            <FormField
              name="estadoCivilMae"
              label="Estado Civil"
              styleClass="campoObrigatorio"
              isSelect
              options={estadoCivil}
              onChange={onChange}
              error={errors.estadoCivilMae}
            />
            <FormField
              name="telefone1Mae"
              label="Telefone 1"
              placeholder="Telefone"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.telefone1Mae}
              value={dadosFormulario.telefone1Mae}
            />
            <FormField
              name="telefone2Mae"
              label="Telefone 2"
              placeholder="Telefone"
              onChange={onChange}
              error={errors.telefone2Mae}
              value={dadosFormulario.telefone2Mae}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="escolaridadeMae"
              label="Escolaridade"
              styleClass="campoObrigatorio"
              isSelect
              options={escolaridade}
              onChange={onChange}
              error={errors.escolaridadeMae}
            />
            <FormField
              name="ocupacaoMae"
              label="Ocupação"
              styleClass="campoObrigatorio"
              isSelect
              isAPI
              options={ocupacoes}
              onChange={onChange}
              error={errors.ocupacaoMae}
            />
            <FormField
              name="descricaoOcupacaoMae"
              label="Descrição da ocupação"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.descricaoOcupacaoMae}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pb-2">
            <FormField
              name="nadaConsta"
              label="NC (Caso desconhecido, selecionar está opção)"
              type="checkbox"
              styleInput="w-6 h-6"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4'">
            <FormField
              name="nomePai"
              label="Nome do Pai"
              placeholder="Nome"
              styleClass="campoObrigatorio"
              onChange={onChange}
              isDisable={isChecked}
              error={errors.nomePai}
              className="col-span-1"
            />
            <FormField
              name="dataNascimentoPai"
              label="Data de Nascimento"
              type="text"
              placeholder="00/00/0000"
              styleClass="campoObrigatorio"
              onChange={onChange}
              isDisable={isChecked}
              error={errors.dataNascimentoPai}
              value={dadosFormulario.dataNascimentoPai}
            />
            <FormField
              name="responsavelPelaCriancaPai"
              label="Responsável pela criança"
              styleClass="campoObrigatorio"
              isSelect
              options={simOuNao}
              onChange={onChange}
              isDisable={isChecked}
              error={errors.responsavelPelaCriancaPai}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pt-4">
            <FormField
              name="cpfPai"
              label="CPF"
              styleClass="campoObrigatorio"
              onChange={onChange}
              isDisable={isChecked}
              error={errors.cpfPai}
              value={dadosFormulario.cpfPai}
            />
            <FormField
              name="tipoRacaCorPai"
              label="Raça/Cor"
              styleClass="campoObrigatorio"
              isSelect
              options={tipoRacaCor}
              onChange={onChange}
              isDisable={isChecked}
              error={errors.tipoRacaCorPai}
            />
            <FormField
              name="estadoCivilPai"
              label="Estado Civil"
              styleClass="campoObrigatorio"
              isSelect
              options={estadoCivil}
              onChange={onChange}
              isDisable={isChecked}
              error={errors.estadoCivilPai}
            />
            <FormField
              name="telefone1Pai"
              label="Telefone 1"
              placeholder="Telefone"
              styleClass="campoObrigatorio"
              onChange={onChange}
              isDisable={isChecked}
              error={errors.telefone1Pai}
              value={dadosFormulario.telefone1Pai}
            />
            <FormField
              name="telefone2Pai"
              label="Telefone 2"
              placeholder="Telefone"
              onChange={onChange}
              isDisable={isChecked}
              error={errors.telefone2Pai}
              value={dadosFormulario.telefone2Pai}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="escolaridadePai"
              label="Escolaridade"
              styleClass="campoObrigatorio"
              isSelect
              options={escolaridade}
              onChange={onChange}
              isDisable={isChecked}
              error={errors.escolaridadePai}
            />
            <FormField
              name="ocupacaoPai"
              label="Ocupação"
              styleClass="campoObrigatorio"
              isSelect
              isAPI
              options={ocupacoes}
              onChange={onChange}
              isDisable={isChecked}
              error={errors.ocupacaoPai}
            />
            <FormField
              name="descricaoOcupacaoPai"
              label="Descrição da ocupação"
              placeholder="Descrição"
              onChange={onChange}
              isDisable={isChecked}
            />
          </div>
        </FormGroup>

        <FormGroup
          title="Dados do Responsável"
          description="Cadastro de dados pessoais do responsável do Paciente"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="nomeResponsavel"
              label="Nome do Responsável"
              placeholder="Nome"
              onChange={onChange}
            />
            <FormField
              name="dataNascimentoResponsavel"
              label="Data de Nascimento"
              type="text"
              placeholder="00/00/0000"
              onChange={onChange}
              value={dadosFormulario.dataNascimentoResponsavel}
            />
            <FormField
              name="vinculoResponsavel"
              label="Vínculo"
              isSelect
              options={vinculo}
              onChange={onChange}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pt-4">
            <FormField
              name="descricaoVinculoResponsavel"
              label="Descrição do Vínculo"
              onChange={onChange}
              error={errors.descricaoVinculoResponsavel}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pt-4">
            <FormField
              name="cpfResponsavel"
              label="CPF"
              onChange={onChange}
              value={dadosFormulario.cpfResponsavel}
            />
            <FormField
              name="tipoRacaCorResponsavel"
              label="Raça/Cor"
              isSelect
              options={tipoRacaCor}
              onChange={onChange}
            />
            <FormField
              name="estadoCivilResponsavel"
              label="Estado Civil"
              isSelect
              options={estadoCivil}
              onChange={onChange}
            />
            <FormField
              name="telefone1Responsavel"
              label="Telefone 1"
              placeholder="Telefone"
              onChange={onChange}
              value={dadosFormulario.telefone1Responsavel}
            />
            <FormField
              name="telefone2Responsavel"
              label="Telefone 2"
              placeholder="Telefone"
              onChange={onChange}
              value={dadosFormulario.telefone2Responsavel}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="escolaridadeResponsavel"
              label="Escolaridade"
              isSelect
              options={escolaridade}
              onChange={onChange}
            />
            <FormField
              name="ocupacaoResponsavel"
              label="Ocupação"
              isSelect
              isAPI
              options={ocupacoes}
              onChange={onChange}
            />
            <FormField
              name="descricaoOcupacaoResponsavel"
              label="Descrição da ocupação"
              placeholder="Descrição"
              onChange={onChange}
            />
          </div>
        </FormGroup>

        <FormGroup title="Encaminhamento de Origem">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="procedencia"
              label="Procedência"
              isSelect
              isAPI
              styleClass="campoObrigatorio"
              options={procedencias}
              onChange={onChange}
              error={errors.procedencia}
            />
            <FormField
              name="dsOutroTipoDeProcedenciaPaciente"
              label="Descrição da Procedência"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.dsOutroTipoDeProcedenciaPaciente}
            />
          </div>
        </FormGroup>

        <div className="flex items-end justify-end px-8 pt-4">
          <button
            name="salvar"
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
