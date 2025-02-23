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
import { validateField, validateForm } from "../../validator/validateFormPaciente.jsx";
import MessageAlert from "../../util/MessageAlert.jsx";
import CepService from "../../services/cepService.jsx";

export function FormCadastroDadosPessoais() {

  const simOuNao = Object.entries(SimOuNao).map(([key, value]) => ({ value: value, label: key }));
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
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

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
  }

  const validationRules = {
    dataAdmissao: { required: true },
    descricaoProntuario: { required: true },
    nomeCompleto: { required: true },
    dataNascimento: { required: true },
    cpf: { required: true },
    nacionalidade: { required: true },
    naturalidade: { required: true },
    uf: { required: true },
    sexo: { required: true },
    tipoRacaCor: { required: true },
    descricaoCartaoSUS: { required: true },
    localDeNascimento: { required: true },
    dsOutroTipoDeLocalDeNascimentoPaciente: { required: true },
    cep: { required: true },
    logradouro: { required: true },
    numero: { required: true },
    complemento: { required: true },
    bairro: { required: true },
    municipioLogradouro: { required: true },
    estado: { required: true },
    tpMoradia: { required: false },

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

    nomeResponsavel: { required: true },
    dataNascimentoResponsavel: { required: true },
    vinculoResponsavel: { required: true },
    descricaoVinculoResponsavel: { required: false },
    cpfResponsavel: { required: true },
    tipoRacaCorResponsavel: { required: true },
    estadoCivilResponsavel: { required: true },
    telefone1Responsavel: { required: true },
    telefone2Responsavel: { required: false },
    escolaridadeResponsavel: { required: true },
    ocupacaoResponsavel: { required: true },
    descricaoOcupacaoResponsavel: { required: false },

    procedencia: { required: true },
    dsOutroTipoDeProcedenciaPaciente: { required: true },
  };

  useEffect(() => {
    carregarCidadesOuMunicipios();
  }, []);

  const [dadosFormulario, setDadosFormulario] = useState({
    ativo: true,
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
    cpfMae: '',
    cpfPai: '',
    cpfResponsavel: '',
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: '',
    dataNascimentoMae: '',
    dataNascimentoPai: '',
    dataNascimentoResponsavel: '',
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
    responsavelPelaCriancaMae: '',
    responsavelPelaCriancaPai: '',
    vinculoResponsavel: '',
    descricaoVinculoResponsavel: '',
    procedencia: '',
    dsOutroTipoDeProcedenciaPaciente: '',
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleBlurCep = async () => {
    const { cep } = dadosFormulario;

    // Verifica se a resposta está em um formato correto

    if (cep.length === 8) { // Valida o formato do CEP
      try {
        // Simula uma chamada à API para buscar o logradouro
        console.log(cep);
        const response = await CepService.getById(cep);
        console.log(response);
        // const response =  await fetch(`http://localhost:9090/cep/${cep}`);
        if (!response || response.erro) {
          throw new Error(`CEP inválido ou não encontrado ${response.status}` );
        }
        const data = response;
        console.log(data);
        if (data) {
          setDadosFormulario((prevState) => ({
            ...prevState,
            logradouro: data.logradouro,
            bairro: data.bairro,
            municipioLogradouro: { value: data.localidade },
          }));
        } else {
          console.log("Logradouro não encontrado para este CEP.");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    } else {
      console.log("CEP inválido.");
    }
  };

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
    const error = validateField(name, value, validationRules[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  }

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
    const paciente = new PacienteBuilder().withFormulario(dadosFormulario).build();
    console.log(paciente);
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

        <FormGroup title="Dados Paciente" description="Cadastro de dados pessoais do Paciente">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField name="dataAdmissao" label="Data da Admissão" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" onChange={onChange} error={errors.dataAdmissao} />
            <FormField name="descricaoProntuario" label="Prontuário" styleClass="campoObrigatorio" onChange={onChange} error={errors.descricaoProntuario} />
            <FormField name="nomeCompleto" label="Nome Completo" styleClass="campoObrigatorio" onChange={onChange} error={errors.nomeCompleto} />
            <FormField name="dataNascimento" label="Data de Nascimento" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" onChange={onChange} error={errors.dataNascimento} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 px-8 pt-4">
            <FormField name="cpf" label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" onChange={onChange} error={errors.cpf} />
            <FormField name="nacionalidade" label="Nacionalidade" styleClass="campoObrigatorio" isSelect options={nacionalidade} onChange={onChange} error={errors.nacionalidade} />
            <FormField name="naturalidade" label="Naturalidade" styleClass="campoObrigatorio" isSelect isAPI options={naturalidade} onChange={onChange} displayAttribute="nomeMunicipio" error={errors.naturalidade} />
            <FormField name="uf" label="UF" styleClass="campoObrigatorio" isSelect options={uf} onChange={onChange} error={errors.uf} />
            <FormField name="sexo" label="Sexo" styleClass="campoObrigatorio" isSelect options={sexo} onChange={onChange} error={errors.sexo} />
            <FormField name="tipoRacaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} error={errors.tipoRacaCor} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="descricaoCartaoSUS" label="Número do cartão SUS" styleClass="campoObrigatorio" placeholder="000 0000 0000 0000" onChange={onChange} error={errors.descricaoCartaoSUS} />
            <FormField name="localDeNascimento" label="Local de Nascimento" styleClass="campoObrigatorio" isSelect options={locaisDeNascimento} onChange={onChange} error={errors.localDeNascimento} />
            <FormField name="dsOutroTipoDeLocalDeNascimentoPaciente" label="Descrição Local de Nascimento" styleClass="campoObrigatorio" onChange={onChange} error={errors.dsOutroTipoDeLocalDeNascimentoPaciente} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField name="cep" label="CEP" styleClass="campoObrigatorio" onChange={onChange} onBlur={handleBlurCep} error={errors.cep} />
            <FormField name="logradouro" value={dadosFormulario.logradouro} label="Logradouro" styleClass="campoObrigatorio" onChange={onChange} error={errors.logradouro} />
            <FormField name="numero" label="Número" styleClass="campoObrigatorio" onChange={onChange} error={errors.numero} />
            <FormField name="complemento" label="Complemento" styleClass="campoObrigatorio" onChange={onChange} error={errors.complemento} />
            <FormField name="bairro" value={dadosFormulario.bairro} label="Bairro" styleClass="campoObrigatorio" onChange={onChange} error={errors.bairro} />
            <FormField name="municipioLogradouro" value={dadosFormulario.municipioLogradouro} label="Cidade" styleClass="campoObrigatorio" isSelect isAPI options={cidades} onChange={onChange} displayAttribute="nomeMunicipio" error={errors.municipioLogradouro} />
            <FormField name="estado" label="Estado" styleClass="campoObrigatorio" isSelect options={uf} onChange={onChange} error={errors.estado} />
            <FormField name="tpMoradia" label="Tipo de moradia" isSelect options={tipoMoradia} onChange={onChange} error={errors.tpMoradia} />
          </div>
        </FormGroup >
        {/* DADOS DOS PAIS */}

        <FormGroup title="Dados dos Pais" description="Cadastro de dados pessoais dos pais do Paciente">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField name="nomeMae" label="Nome da Mãe" placeholder="Nome" styleClass="campoObrigatorio" onChange={onChange} error={errors.nomeMae} />
            <FormField name="dataNascimentoMae" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} error={errors.dataNascimentoMae} />
            <FormField name="cpfMae" label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" onChange={onChange} error={errors.cpfMae} />
            <FormField name="responsavelPelaCriancaMae" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} error={errors.responsavelPelaCriancaMae} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField name="tipoRacaCorMae" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} error={errors.tipoRacaCorMae} />
            <FormField name="estadoCivilMae" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} error={errors.estadoCivilMae} />
            <FormField name="telefone1Mae" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} error={errors.telefone1Mae} />
            <FormField name="telefone2Mae" label="Telefone 2" placeholder="Telefone" onChange={onChange} error={errors.telefone2Mae} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="escolaridadeMae" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} error={errors.escolaridadeMae} />
            <FormField name="ocupacaoMae" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} error={errors.ocupacaoMae} />
            <FormField name="descricaoOcupacaoMae" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} error={errors.descricaoOcupacaoMae} />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          {/* <div className={`${isChecked ? 'bg-neutral-200 pt-4 pb-4'  : ''}`}> */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pb-2">
            <FormField name="nadaConsta" label="NC (Caso desconhecido, selecionar está opção)" type="checkbox" styleInput="w-6 h-6" onChange={handleCheckboxChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4'">
            <FormField name="nomePai" label="Nome do Pai" placeholder="Nome"
              styleClass="campoObrigatorio" onChange={onChange} isDisable={isChecked} error={errors.nomePai} className="col-span-1" />
            <FormField name="dataNascimentoPai" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} isDisable={isChecked} error={errors.dataNascimentoPai} />
            <FormField name="responsavelPelaCriancaPai" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} isDisable={isChecked} error={errors.responsavelPelaCriancaPai} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pt-4">
            <FormField name="cpfPai" label="CPF" styleClass="campoObrigatorio" onChange={onChange} isDisable={isChecked} error={errors.cpfPai} />
            <FormField name="tipoRacaCorPai" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} isDisable={isChecked} error={errors.tipoRacaCorPai} />
            <FormField name="estadoCivilPai" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} isDisable={isChecked} error={errors.estadoCivilPai} />
            <FormField name="telefone1Pai" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} isDisable={isChecked} error={errors.telefone1Pai} />
            <FormField name="telefone2Pai" label="Telefone 2" placeholder="Telefone" onChange={onChange} isDisable={isChecked} error={errors.telefone2Pai} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="escolaridadePai" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} isDisable={isChecked} error={errors.escolaridadePai} />
            <FormField name="ocupacaoPai" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} isDisable={isChecked} error={errors.ocupacaoPai} />
            <FormField name="descricaoOcupacaoPai" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} isDisable={isChecked} error={errors.descricaoOcupacaoPai} />
          </div>
          {/* </div> */}
        </FormGroup>

        {/* DADOS RESPONSAVEL*/}

        <FormGroup title="Responsável" description="Cadastro de dados pessoais do responsável do Paciente">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="nomeResponsavel" label="Nome do Responsável" placeholder="Nome" styleClass="campoObrigatorio" onChange={onChange} error={errors.nomeResponsavel} />
            <FormField name="dataNascimentoResponsavel" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} error={errors.dataNascimentoResponsavel} />
            <FormField name="vinculoResponsavel" label="Vínculo" styleClass="campoObrigatorio" isSelect options={vinculo} onChange={onChange} error={errors.vinculoResponsavel} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pt-4">
            <FormField name="descricaoVinculoResponsavel" label="Descrição do Vínculo" onChange={onChange} error={errors.descricaoVinculoResponsavel} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pt-4">
            <FormField name="cpfResponsavel" label="CPF" styleClass="campoObrigatorio" onChange={onChange} error={errors.cpfResponsavel} />
            <FormField name="tipoRacaCorResponsavel" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={tipoRacaCor} onChange={onChange} error={errors.tipoRacaCorResponsavel} />
            <FormField name="estadoCivilResponsavel" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} error={errors.estadoCivilResponsavel} />
            <FormField name="telefone1Responsavel" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} error={errors.telefone1Responsavel} />
            <FormField name="telefone2Responsavel" label="Telefone 2" placeholder="Telefone" onChange={onChange} error={errors.telefone2Responsavel} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="escolaridadeResponsavel" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} error={errors.escolaridadeResponsavel} />
            <FormField name="ocupacaoResponsavel" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} error={errors.ocupacaoResponsavel} />
            <FormField name="descricaoOcupacaoResponsavel" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} error={errors.descricaoOcupacaoResponsavel} />
          </div>
        </FormGroup>

        {/* ENCAMINHAMENTO ORIGEM */}

        <FormGroup title="Encaminhamento de Origem">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField name="procedencia" label="Procedência" isSelect styleClass="campoObrigatorio" options={procedencias} onChange={onChange} error={errors.procedencia} />
            <FormField name="dsOutroTipoDeProcedenciaPaciente" label="Descrição da Procedência" placeholder="Descrição" styleClass="campoObrigatorio" onChange={onChange} error={errors.dsOutroTipoDeProcedenciaPaciente} />
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
      </form>
    </>
  );
}
