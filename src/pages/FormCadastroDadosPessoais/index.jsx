import React, { useState, useEffect } from "react";
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
import PacienteBuilder from "../../models/build/PacienteBuilder.js"

export function FormCadastroDadosPessoais() {
<<<<<<< HEAD
  const simOuNao = ["Sim", "Não"];
  const nacionalidade = Object.values(Nacionalidade);
  const naturalidade = Object.values(Cidade);
  const cidade = Object.values(Cidade);
  const racaCor = Object.values(RacaCor);
  const tipoMoradia = Object.values(TipoMoradia);
  const locaisDeNascimento = Object.values(LocalNascimento);
  const estadoCivil = Object.values(EstadoCivil);
  const ocupacao = Object.values(Ocupacao);
  const escolaridade = Object.values(Escolaridade);
  const vinculo = Object.values(Vinculo);
  const procedencias = Object.values(Procedencia);
=======

  const simOuNao = Object.entries(SimOuNao).map(([key, value]) => ({ value: key, label: value }));
  const nacionalidade = Object.entries(Nacionalidade).map(([key, value]) => ({ value: key, label: value }));
  const tipoRacaCor = Object.entries(RacaCor).map(([key, value]) => ({ value: key, label: value }));
  const tipoMoradia = Object.entries(TipoMoradia).map(([key, value]) => ({ value: key, label: value }));
  const locaisDeNascimento = Object.entries(LocalNascimento).map(([key, value]) => ({ value: key, label: value }));
  const estadoCivil = Object.entries(EstadoCivil).map(([key, value]) => ({ value: key, label: value }));
  const ocupacao = Object.entries(Ocupacao).map(([key, value]) => ({ value: key, label: value }));
  const escolaridade = Object.entries(Escolaridade).map(([key, value]) => ({ value: key, label: value }));
  const vinculo = Object.entries(Vinculo).map(([key, value]) => ({ value: key, label: value }));
  const procedencias = Object.entries(Procedencia).map(([key, value]) => ({ value: key, label: value }));
  const sexo = Object.entries(Sexo).map(([key, value]) => ({ value: key, label: value }));
  const uf = Object.entries(["CE - Ceará"]).map(([key, value]) => ({ value: value, label: value }));
  
  const [loading, setLoading] = useState(false);
  const [cidades, setCidades] = useState([]);
  const [naturalidade, setNaturalidade] = useState([]);
  const [message, setMessage] = useState('');
  
  const carregarCidadesOuMunicipios = async () => {
    try {
      setLoading(true);
      const citys = await MunicipioService.getAll();
      console.log(citys);
      setCidades(citys);
      setNaturalidade(citys);
    } catch (error) {
      console.log("Erro ao carregar cidades:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarCidadesOuMunicipios();
  }, []);

  const [dadosFormulario, setDadosFormulario] = useState({
    dataAdmissao: '',
    descricaoProntuario: '',
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    nacionalidade: '',
    naturalidade: {},
    uf: '',
    sexo: '',
    tipoRacaCor: '',
    descricaoCartaoSUS: '',
    localDeNascimento: '',
    dsOutroTipoDeLocalDeNascimentoPaciente: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    municipioLogradouro: {},
    estado: '',
    tpMoradia: '',
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: '',
    tipoRacaCorMae: '',
    tipoRacaCorPai: '',
    tipoRacaCorResponsavel: '',
    estadoCivilMae: '',
    estadoCivilPai: '',
    estadoCivilResponsavel: '',
    telefone1Mae: '',
    telefone2Mae: '',
    telefone1Pai: '',
    telefone2Pai: '',
    telefone1Responsavel: '',
    telefone2Responsavel: '',
    escolaridadeMae: '',
    escolaridadePai: '',
    escolaridadeResponsavel: '',
    ocupacaoMae: '',
    ocupacaoPai: '',
    ocupacaoResponsavel: '',
    descricaoOcupacaoMae: '',
    descricaoOcupacaoPai: '',
    descricaoOcupacaoResponsavel: '',
    vinculoResponsavel: '',
    descricaoVinculoResponsavel: '',
    procedencia: '',
    dsOutroTipoDeProcedenciaPaciente: '',
  });


  const handleShowAlert = () => {
    setMessage('Paciente cadastrado com sucesso!');
  };
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c

  const onChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length > 1) {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    } else {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  const handleSubmit = async () => {
    enviarPaciente(dadosFormulario);
    handleShowAlert();
    console.log("Enviando dados:", dadosFormulario);
  };

  async function enviarPaciente(dadosFormulario) {
    const paciente = new PacienteBuilder().withFormulario(dadosFormulario).build();
    const resposta = PacienteService.create(paciente);
    if (!resposta.ok) {
      throw new Error(`Erro ao salvar paciente: ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    console.log("Paciente salvo com sucesso:", dados);
  }
  return (
    <>
      {/* DADOS PACIENTE */}
      <form>
<<<<<<< HEAD
        <div className="flex items-end justify-between px-8 pt-4">
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Limpar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Pesquisa
            </button>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Salvar
          </button>
        </div>

        <FormGroup
          title="Dados Paciente"
          description="Cadastro de dados pessoais do Paciente"
        >
=======

        {message && <div className="text-green-400 mt-2">{message}</div>}

        <FormGroup title="Dados Paciente" description="Cadastro de dados pessoais do Paciente">
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm">
              <FormField
                name="dataAdmissao"
                label="Data da Adimissão"
                placeholder="00/00/0000"
                type="date"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
<<<<<<< HEAD
            <span className="font-bold text-sm mx-5 ">
              <FormField
                name="prontuario"
                label="Prontuário"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
=======
            <span className="font-bold text-sm mx-5">
              <FormField name="descricaoProntuario" label="Prontuário" styleClass="campoObrigatorio" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
            <span className="font-bold text-sm w-full mr-10">
              <FormField
                name="nomeCompleto"
                label="Nome Completo"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm">
              <FormField
                name="dataNascimento"
                label="Data de Nascimento"
                placeholder="00/00/0000"
                type="date"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold w-full text-sm mr-5">
              <FormField
                name="cpf"
                label="CPF"
                styleClass="campoObrigatorio"
                placeholder="000.000.000-00"
                onChange={onChange}
              />
            </span>
            <span className="font-bold w-full text-sm ml-5">
              <FormField
                name="nacionalidade"
                label="Nacionalidade"
                styleClass="campoObrigatorio"
                isSelect
                options={nacionalidade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full ml-5">
<<<<<<< HEAD
              <FormField
                name="naturalidade"
                label="Naturalidade"
                styleClass="campoObrigatorio"
                isSelect
                options={naturalidade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField
                name="uf"
                label="UF"
                styleClass="campoObrigatorio"
                isSelect
                options={["CE"]}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField
                name="sexo"
                label="Sexo"
                styleClass="campoObrigatorio"
                isSelect
                options={["Masculino", "Feminino"]}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField
                name="racaCor"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={racaCor}
                onChange={onChange}
              />
=======
              <FormField name="naturalidade" label="Naturalidade" styleClass="campoObrigatorio" isSelect isAPI options={naturalidade} onChange={onChange} displayAttribute="nomeMunicipio" />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="uf" label="UF" styleClass="campoObrigatorio" isSelect options={uf} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="sexo" label="Sexo" styleClass="campoObrigatorio" isSelect options={sexo} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="tipoRacaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm w-full mr-10">
<<<<<<< HEAD
              <FormField
                name="numeroCartaoSUS"
                label="Número do cartão SUS"
                styleClass="campoObrigatorio"
                placeholder="000 0000 0000 0000"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="localNascimento"
                label="Local de Nascimento"
                styleClass="campoObrigatorio"
                isSelect
                options={locaisDeNascimento}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="dsLocalDeNascimento"
                label="Descrição Local de Nascimento"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
=======
              <FormField name="descricaoCartaoSUS" label="Número do cartão SUS" styleClass="campoObrigatorio" placeholder="000 0000 0000 0000" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="localDeNascimento" label="Local de Nascimento" styleClass="campoObrigatorio" isSelect options={locaisDeNascimento} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="dsOutroTipoDeLocalDeNascimentoPaciente" label="Descrição Local de Nascimento" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div >
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="cep" label="CEP" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="logradouro" label="Logradouro" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="numero" label="Número" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="complemento" label="Complemento" styleClass="campoObrigatorio" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="cep"
                label="CEP"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
<<<<<<< HEAD
              <FormField
                name="logradouro"
                label="Logradouro"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="numero"
                label="Número"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="complemento"
                label="Complemento"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
=======
              <FormField name="municipioLogradouro" label="Cidade" styleClass="campoObrigatorio" isSelect isAPI options={cidades} onChange={onChange} displayAttribute="nomeMunicipio" />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="estado" label="Estado" isSelect options={uf} styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="tpMoradia" label="Tipo de moradia" isSelect options={tipoMoradia} onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="bairro"
                label="Bairro"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="cidade"
                label="Cidade"
                styleClass="campoObrigatorio"
                isSelect
                options={cidade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="estado"
                label="Estado"
                isSelect
                options={["CE - Ceará"]}
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="tipoMoradia"
                label="Tipo de moradia"
                isSelect
                options={tipoMoradia}
                onChange={onChange}
              />
            </span>
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
                placeholder="Nome"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5">
<<<<<<< HEAD
              <FormField
                name="dataNascimento"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField
                name="responsavelPelaCrianca"
                label="Responsável pela criança"
                styleClass="campoObrigatorio"
                isSelect
                options={simOuNao}
                onChange={onChange}
              />
=======
              <FormField name="dataNascimentoMae" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField name="responsavelPelaCriancaMae" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-5 w-full">
<<<<<<< HEAD
              <FormField
                name="cpf"
                label="CPF"
                styleClass="campoObrigatorio"
                placeholder="000.000.000-00"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="racaCor"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={racaCor}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="estadoCivil"
                label="Estado Civil"
                styleClass="campoObrigatorio"
                isSelect
                options={estadoCivil}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="telefone1"
                label="Telefone 1"
                placeholder="Telefone"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2"
                label="Telefone 2"
                placeholder="Telefone"
                onChange={onChange}
              />
=======
              <FormField name="cpfMae" label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="tipoRacaCorMae" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="estadoCivilMae" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1Mae" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2Mae" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
<<<<<<< HEAD
              <FormField
                name="escolaridade"
                label="Escolaridade"
                styleClass="campoObrigatorio"
                isSelect
                options={escolaridade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="ocupacao"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacao"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
              />
=======
              <FormField name="escolaridadeMae" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="ocupacaoMae" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacaoMae" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-5 w-full">
<<<<<<< HEAD
              <FormField
                name="nomeDoPai"
                label="Nome do Pai (Caso desconhecido, selecionar a opção ao lado)"
                placeholder="Nome"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
=======
              <FormField name="nomePai" label="Nome do Pai (Caso desconhecido, selecionar a opção ao lado)" placeholder="Nome"
                styleClass="campoObrigatorio" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="nadaConsta"
                label="NC"
                type="checkbox"
                styleInput="w-6 h-6"
                onChange={onChange}
              />
            </span>
<<<<<<< HEAD
            <span className="font-bold text-sm mr-5">
              <FormField
                name="dataNascimento"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField
                name="responsavelPelaCrianca"
                label="Responsável pela criança"
                styleClass="campoObrigatorio"
                isSelect
                options={simOuNao}
                onChange={onChange}
              />
=======
            <span className="font-bold text-sm mr-5" >
              <FormField name="dataNascimentoPai" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField name="responsavelPelaCriancaPai" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
<<<<<<< HEAD
              <FormField
                name="cpf"
                label="CPF"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="racaCor"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={racaCor}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="estadoCivil"
                label="Estado Civil"
                styleClass="campoObrigatorio"
                isSelect
                options={estadoCivil}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="telefone1"
                label="Telefone 1"
                placeholder="Telefone"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2"
                label="Telefone 2"
                placeholder="Telefone"
                onChange={onChange}
              />
=======
              <FormField name="cpfPai" label="CPF" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="tipoRacaCorPai" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full" >
              <FormField name="estadoCivilPai" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1Pai" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2Pai" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[30%]">
<<<<<<< HEAD
              <FormField
                name="escolaridade"
                label="Escolaridade"
                styleClass="campoObrigatorio"
                isSelect
                options={escolaridade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField
                name="ocupacao"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacao"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
              />
=======
              <FormField name="escolaridadePai" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField name="ocupacaoPai" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacaoPai" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
        </FormGroup>

        {/* DADOS RESPONSAVEL*/}

        <FormGroup
          title="Responsável"
          description="Cadastro de dados pessoais do responsável do Paciente"
        >
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField
                name="nomeResponsavel"
                label="Nome do Responsável"
                placeholder="Nome"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-10">
<<<<<<< HEAD
              <FormField
                name="dataNascimento"
                label="Data de Nascimento"
                type="date"
                placeholder="00/00/0000"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField
                name="vinculo"
                label="Vínculo"
                styleClass="campoObrigatorio"
                isSelect
                options={vinculo}
                onChange={onChange}
              />
=======
              <FormField name="dataNascimentoResponsavel" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]" >
              <FormField name="vinculoResponsavel" label="Vínculo" styleClass="campoObrigatorio" isSelect options={vinculo} onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 w-full">
            <span className="font-bold text-sm w-full">
<<<<<<< HEAD
              <FormField
                name="descricaoVinculo"
                label="Descrição do Vínculo"
                onChange={onChange}
              />
=======
              <FormField name="descricaoVinculoResponsavel" label="Descrição do Vínculo" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>

          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
<<<<<<< HEAD
              <FormField
                name="cpf"
                label="CPF"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="racaCor"
                label="Raça/Cor"
                styleClass="campoObrigatorio"
                isSelect
                options={racaCor}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="estadoCivil"
                label="Estado Civil"
                styleClass="campoObrigatorio"
                isSelect
                options={estadoCivil}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField
                name="telefone1"
                label="Telefone 1"
                placeholder="Telefone"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="telefone2"
                label="Telefone 2"
                placeholder="Telefone"
                onChange={onChange}
              />
=======
              <FormField name="cpfResponsavel" label="CPF" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="tipoRacaCorResponsavel" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="estadoCivilResponsavel" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1Responsavel" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2Responsavel" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[40%]">
<<<<<<< HEAD
              <FormField
                name="escolaridade"
                label="Escolaridade"
                styleClass="campoObrigatorio"
                isSelect
                options={escolaridade}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField
                name="ocupacao"
                label="Ocupação"
                styleClass="campoObrigatorio"
                isSelect
                options={ocupacao}
                onChange={onChange}
              />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField
                name="descricaoOcupacao"
                label="Descrição da ocupação"
                placeholder="Descrição"
                onChange={onChange}
              />
=======
              <FormField name="escolaridadeResponsavel" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField name="ocupacaoResponsavel" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacaoResponsavel" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
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
              />
            </span>
            <span className="font-bold text-sm w-full">
<<<<<<< HEAD
              <FormField
                name="descricaoProcedencia"
                label="Descrição da Procedência"
                placeholder="Descrição"
                styleClass="campoObrigatorio"
                onChange={onChange}
              />
            </span>
          </div>
        </FormGroup>
=======
              <FormField name="dsOutroTipoDeProcedenciaPaciente" label="Descrição da Procedência" placeholder="Descrição" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div>
        </FormGroup>

        <div className="flex items-end justify-end px-8 pt-4">
          <button name="salvar"
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
>>>>>>> 1798fb87145016b6d6de2591f6121fd346e5aa1c
      </form>
    </>
  );
}
