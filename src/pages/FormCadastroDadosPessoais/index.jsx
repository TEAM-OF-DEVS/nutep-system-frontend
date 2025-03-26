import { FormField } from "../../components/FormField/FormField.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import Nacionalidade from "../../models/enum/Nacionalidade.js";
import RacaCor from "../../models/enum/RacaCor.js";
import TipoMoradia from "../../models/enum/TipoMoradia.js";
import EstadoCivil from "../../models/enum/EstadoCivil.js";
import Ocupacao from "../../models/enum/Ocupacao.js";
import Escolaridade from "../../models/enum/Escolaridade.js";
import Procedencia from "../../models/enum/Procedencia.js";
import Vinculo from "../../models/enum/Vinculo.js";
import LocalNascimento from "../../models/enum/LocalNascimento.js";
import SimOuNao from "../../models/enum/SimNao.js";
import Sexo from "../../models/enum/Sexo.js";
import MunicipioService from "../../services/municipioService.jsx";
import PacienteService from "../../services/pacienteService.jsx";
import PacienteBuilder from "../../models/build/PacienteBuilder.js";
import { validateForm } from "../../validator/validateFormPaciente.jsx";
import MessageAlert from "../../util/MessageAlert.jsx";
import { useEffect, useState } from "react";

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
    ([key, value]) => ({ value: key, label: value })
  );
  const estadoCivil = Object.entries(EstadoCivil).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const ocupacao = Object.entries(Ocupacao).map(([key, value]) => ({
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
  const procedencias = Object.entries(Procedencia).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const sexo = Object.entries(Sexo).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const uf = Object.entries(["CE - Ceará"]).map(([key, value]) => ({
    value: value,
    label: value,
  }));

  const [loading, setLoading] = useState(false);
  const [cidades, setCidades] = useState([]);
  const [naturalidade, setNaturalidade] = useState([]);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [paiOuMaeResponsavel, setPaiOuMaeResponsavel] = useState(false);

  const carregarCidadesOuMunicipios = async () => {
    try {
      setLoading(true);
      const citys = await MunicipioService.getAll();
      setCidades(citys);
      setNaturalidade(citys);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

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
    dsOutroTipoDeLocalDeNascimentoPaciente: { required: false },
    cep: { required: true },
    logradouro: { required: true },
    numero: { required: true },
    complemento: { required: false },
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

    nomeResponsavel: { required: !paiOuMaeResponsavel },
    dataNascimentoResponsavel: { required: !paiOuMaeResponsavel },
    vinculoResponsavel: { required: !paiOuMaeResponsavel },
    descricaoVinculoResponsavel: { required: false },
    cpfResponsavel: { required: !paiOuMaeResponsavel },
    tipoRacaCorResponsavel: { required: !paiOuMaeResponsavel },
    estadoCivilResponsavel: { required: !paiOuMaeResponsavel },
    telefone1Responsavel: { required: !paiOuMaeResponsavel },
    telefone2Responsavel: { required: false },
    escolaridadeResponsavel: { required: !paiOuMaeResponsavel },
    ocupacaoResponsavel: { required: !paiOuMaeResponsavel },
    descricaoOcupacaoResponsavel: { required: false },

    procedencia: { required: true },
    dsOutroTipoDeProcedenciaPaciente: { required: false },
  };

  useEffect(() => {
    carregarCidadesOuMunicipios();
  }, []);

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
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipioLogradouro: {},
    estado: "",
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
    ocupacaoMae: "",
    ocupacaoPai: "",
    ocupacaoResponsavel: "",
    descricaoOcupacaoMae: "",
    descricaoOcupacaoPai: "",
    descricaoOcupacaoResponsavel: "",
    responsavelPelaCriancaMae: "",
    responsavelPelaCriancaPai: "",
    vinculoResponsavel: "",
    descricaoVinculoResponsavel: "",
    procedencia: "",
    dsOutroTipoDeProcedenciaPaciente: "",
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleResponsavelChange = (valueMae, valuePai) => {
    const isResponsavel = valueMae === "Sim" || valuePai === "Sim";
    setPaiOuMaeResponsavel(isResponsavel);
    setErrors((prevErrors) => ({
      ...prevErrors,
      nomeResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      dataNascimentoResponsavel: isResponsavel
        ? ""
        : "Este campo é obrigatório",
      vinculoResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      cpfResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      tipoRacaCorResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      estadoCivilResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      telefone1Responsavel: isResponsavel ? "" : "Este campo é obrigatório",
      escolaridadeResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
      ocupacaoResponsavel: isResponsavel ? "" : "Este campo é obrigatório",
    }));
  };

  const fetchCEPData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
      return data;
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      throw error;
    }
  };
  
  
  const onChange = async (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
  
    const upperCaseValue = formattedValue.toUpperCase();
  
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
          const cepData = await fetchCEPData(value);
          setDadosFormulario((prevState) => ({
            ...prevState,
            logradouro: cepData.logradouro || "",
            bairro: cepData.bairro || "",
            municipioLogradouro: cepData.localidade || "",
            estado: cepData.uf || "",
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
          : dadosFormulario.responsavelPelaCriancaPai
      );
    }
  };
  
  

  const handleSubmit = async () => {
    const formErrors = validateForm(dadosFormulario, validationRules);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      enviarPaciente(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarPaciente(dadosFormulario) {
    const paciente = new PacienteBuilder()
      .withFormulario(dadosFormulario)
      .build();
    try {
      const resposta = await PacienteService.create(paciente);
      handleShowAlert(resposta != null ? "201" : "400");
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
      {/* DADOS PACIENTE */}
      <form>
        {message === "201" ? (
          <MessageAlert
            type="success"
            title="Cadastrado com sucesso!"
            message="O paciente foi cadastrado com sucesso."
          />
        ) : message === "400" ? (
          <MessageAlert
            type="error"
            title="Erro no cadastro"
            message="Houve um problema ao cadastrar o paciente."
          />
        ) : null}

        <FormGroup
          title="Dados Paciente"
          description="Cadastro de dados pessoais do Paciente"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="dataAdmissao"
              label="Data da Admissão"
              placeholder="00/00/0000"
              type="date"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.dataAdmissao}
            />
            <FormField
              name="descricaoProntuario"
              label="Prontuário"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.descricaoProntuario}
            />
            <FormField
              name="nomeCompleto"
              label="Nome Completo"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.nomeCompleto}
            />
            <FormField
              name="dataNascimento"
              label="Data de Nascimento"
              placeholder="00/00/0000"
              type="date"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.dataNascimento}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 px-8 pt-4">
            <FormField
              name="cpf"
              label="CPF"
              value={dadosFormulario.cpf}
              onChange={onChange}
              styleClass="campoObrigatorio"
              placeholder="000.000.000-00"
              error={errors.cpf}
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
              name="naturalidade"
              label="Naturalidade"
              styleClass="campoObrigatorio"
              isSelect
              isAPI
              options={naturalidade}
              onChange={onChange}
              displayAttribute="nomeMunicipio"
              error={errors.naturalidade}
            />
            <FormField
              name="uf"
              label="UF"
              styleClass="campoObrigatorio"
              isSelect
              options={uf}
              onChange={onChange}
              error={errors.uf}
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
            label="Número do Cartão SUS"
            value={dadosFormulario.descricaoCartaoSUS}
            onChange={onChange}
            placeholder="000 0000 0000 0000"
            error={errors.descricaoCartaoSUS}
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
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.dsOutroTipoDeLocalDeNascimentoPaciente}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField 
            name="cep" 
            label="CEP" 
            value={dadosFormulario.cep}
            onChange={onChange}
            placeholder="00000-000"
            error={errors.cep}
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
              value={dadosFormulario.numero}
              onChange={onChange}
              error={errors.numero}
            />
            <FormField
              name="complemento"
              label="Complemento"
              styleClass="campoObrigatorio"
              onChange={onChange}
              error={errors.complemento}
            />
            <FormField
              name="bairro"
              label="Bairro"
              styleClass="campoObrigatorio"
              value={dadosFormulario.bairro}
              onChange={onChange}
              error={errors.bairro}
            />
            <FormField
              name="municipioLogradouro"
              label="Cidade"
              styleClass="campoObrigatorio"              
              value={dadosFormulario.municipioLogradouro}
              onChange={onChange}
              displayAttribute="nomeMunicipio"
              error={errors.municipioLogradouro}
            />
            <FormField
              name="estado"
              label="Estado"
              styleClass="campoObrigatorio"
              value={dadosFormulario.estado}
              onChange={onChange}
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
        {/* DADOS DOS PAIS */}

        <FormGroup
          title="Dados dos Pais"
          description="Cadastro de dados pessoais dos pais do Paciente"
        >
          <div className="flex items-center mt-8 px-8 w-full">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="nomeMae"
                label="Nome da Mãe"
                placeholder="Nome da Mãe"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.nomeMae}
              />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="dataNascimentoMae"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dataNascimentoMae}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField
                name="responsavelPelaCriancaMae"
                label="Responsável pela criança"
                styleClass="campoObrigatorio"
                isSelect
                options={simOuNao}
                onChange={onChange}
                error={errors.responsavelPelaCriancaMae}
              />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="cpfMae"
                label="CPF"
                value={dadosFormulario.cpfMae}
                styleClass="campoObrigatorio"
                placeholder="000.000.000-00"
                onChange={onChange}
                error={errors.cpfMae}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="tipoRacaCorMae"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={tipoRacaCor}
                onChange={onChange}
                error={errors.tipoRacaCorMae}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="estadoCivilMae"
                label="Estado Civil"
                styleClass="campoObrigatorio"
                isSelect
                options={estadoCivil}
                onChange={onChange}
                error={errors.estadoCivilMae}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
            <FormField 
            name="telefone1Mae" 
            label="Telefone 1"
            value={dadosFormulario.telefone1Mae}
            styleClass="campoObrigatorio" 
            onChange={onChange}
            placeholder="(00) 00000-0000"
            error={errors.telefone1Mae}
          />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2Mae"
                label="Telefone 2"
                value={dadosFormulario.telefone2Mae}
                placeholder="(00) 00000-0000"
                onChange={onChange}
                error={errors.telefone2Mae}
              />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="escolaridadeMae"
                label="Escolaridade"
                styleClass="campoObrigatorio"
                isSelect
                options={escolaridade}
                onChange={onChange}
                error={errors.escolaridadeMae}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="ocupacaoMae"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
                error={errors.ocupacaoMae}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacaoMae"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
                error={errors.descricaoOcupacaoMae}
              />
            </span>
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="nomePai"
                label="Nome do Pai (Caso desconhecido, selecionar a opção ao lado)"
                placeholder="Nome do Pai"
                styleClass="campoObrigatorio"
                onChange={onChange}
                isDisable={isChecked}
                error={errors.nomePai}
              />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="nadaConsta"
                label="NC"
                type="checkbox"
                styleInput="w-6 h-6"
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="dataNascimentoPai"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
                isDisable={isChecked}
                error={errors.dataNascimentoPai}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
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
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
            <FormField
                name="cpfPai"
                label="CPF"
                value={dadosFormulario.cpfPai}
                styleClass="campoObrigatorio"
                placeholder="000.000.000-00"
                onChange={onChange}
                error={errors.cpfPai}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
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
            </span>
            <span className="font-bold text-sm mr-5 w-full">
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
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="telefone1Pai"
                label="Telefone 1"
                placeholder="(00) 00000-0000"
                value={dadosFormulario.telefone1Pai}
                styleClass="campoObrigatorio"
                onChange={onChange}
                isDisable={isChecked}
                error={errors.telefone1Pai}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2Pai"
                label="Telefone 2"
                placeholder="(00) 00000-0000"
                value={dadosFormulario.telefone2Pai}
                onChange={onChange}
                isDisable={isChecked}
                error={errors.telefone2Pai}
              />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[30%]">
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
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="ocupacaoPai"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
                isDisable={isChecked}
                error={errors.ocupacaoPai}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacaoPai"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
                isDisable={isChecked}
                error={errors.descricaoOcupacaoPai}
              />
            </span>
          </div>
        </FormGroup>

        {/* DADOS RESPONSAVEL*/}

        <FormGroup
          title="Responsável"
          description="Cadastro de dados pessoais do responsável do Paciente (Caso Mãe e/ou Pai não  sejam os responsáveis)"
        >
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5  w-full">
              <FormField
                name="nomeResponsavel"
                label="Nome do Responsável"
                placeholder="Nome do Responsável"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.nomeResponsavel}
              />
            </span>
            <span className="font-bold text-sm mr-10">
              <FormField
                name="dataNascimentoResponsavel"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dataNascimentoResponsavel}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField
                name="vinculoResponsavel"
                label="Vínculo"
                styleClass="campoObrigatorio"
                isSelect
                options={vinculo}
                onChange={onChange}
                error={errors.vinculoResponsavel}
              />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 w-full">
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoVinculoResponsavel"
                label="Descrição do Vínculo"
                onChange={onChange}
                error={errors.descricaoVinculoResponsavel}
              />
            </span>
          </div>

          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="cpfResponsavel"
                label="CPF"
                value={dadosFormulario.cpfResponsavel}
                styleClass="campoObrigatorio"
                placeholder="000.000.000-00"
                onChange={onChange}
                error={errors.cpfResponsavel}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="tipoRacaCorResponsavel"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={tipoRacaCor}
                onChange={onChange}
                error={errors.tipoRacaCorResponsavel}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="estadoCivilResponsavel"
                label="Estado Civil"
                styleClass="campoObrigatorio"
                isSelect
                options={estadoCivil}
                onChange={onChange}
                error={errors.estadoCivilResponsavel}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="telefone1Responsavel"
                label="Telefone 1"
                placeholder="(00) 00000-0000"
                styleClass="campoObrigatorio"
                value={dadosFormulario.telefone1Responsavel}
                onChange={onChange}
                error={errors.telefone1Responsavel}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2Responsavel"
                label="Telefone 2"
                placeholder="(00) 00000-0000"
                value={dadosFormulario.telefone2Responsavel}
                onChange={onChange}
                error={errors.telefone2Responsavel}
              />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField
                name="escolaridadeResponsavel"
                label="Escolaridade"
                styleClass="campoObrigatorio"
                isSelect
                options={escolaridade}
                onChange={onChange}
                error={errors.escolaridadeResponsavel}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField
                name="ocupacaoResponsavel"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
                error={errors.ocupacaoResponsavel}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacaoResponsavel"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
                error={errors.descricaoOcupacaoResponsavel}
              />
            </span>
          </div>
        </FormGroup>

        {/* ENCAMINHAMENTO ORIGEM */}

        <FormGroup title="Encaminhamento de Origem">
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-10 w-[50%]">
              <FormField
                name="procedencia"
                label="Procedência"
                isSelect
                styleClass="campoObrigatorio"
                options={procedencias}
                onChange={onChange}
                error={errors.procedencia}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="dsOutroTipoDeProcedenciaPaciente"
                label="Descrição da Procedência"
                placeholder="Descrição"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dsOutroTipoDeProcedenciaPaciente}
              />
            </span>
          </div>
        </FormGroup>

        <div className="flex items-end justify-end px-8 pt-4">
          <button
            name="salvar"
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
