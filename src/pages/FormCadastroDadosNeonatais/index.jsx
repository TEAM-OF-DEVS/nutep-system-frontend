import { useEffect, useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete";
import { FormField } from "../../components/FormField/FormField";
import { FormGroup } from "../../components/FormGroup";
import LocalNascimento from "../../models/enum/LocalNascimento";

import {
  validateField,
  validateForm,
} from "../../validator/validateFormPaciente";

import NeoNatalBuilder from "../../models/build/NeoNatalBuilder";
import NeoNatalService from "../../services/neonatalService";
import Apresentacao from "../../models/enum/NeoNatais/Apresentacao";
import OpcaoSimOuNaoOuSi from "../../models/enum/NeoNatais/OpcaoSimOuNaoOuSi";
import ResultadoTeste from "../../models/enum/NeoNatais/ResultadoTeste";
import TiposDeGestacao from "../../models/enum/NeoNatais/TiposDeGestacao";
import TiposDeParto from "../../models/enum/NeoNatais/TiposDeParto";
import ModalSave from "../../components/ModalSave/ModalSave";
import ServiceUtil from "../../services/serviceUtil";
import SimOuNao from "../../models/enum/SimNao";

export function FormCadastroDadosNeonatais() {
  useEffect(() => {
    // Desativa o comportamento de manter a rolagem após reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Garante que a rolagem vá para o topo
    window.scrollTo(0, 0);
  }, []);

  const locaisDeNascimento = Object.entries(LocalNascimento).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const resultadoTeste = Object.entries(ResultadoTeste).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const opcaoSimOuNaoOuSi = Object.entries(OpcaoSimOuNaoOuSi).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const tiposDeParto = Object.entries(TiposDeParto).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const apresentacao = Object.entries(Apresentacao).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const tiposDeGestacao = Object.entries(TiposDeGestacao).map(
    ([key, value]) => ({ value: key, label: value }),
  );

  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const [malFormacoes, setMalFormacoes] = useState([]);
  const [terapeuticaUtilizada, setTerapeuticaUtilizada] = useState([]);
  const [antibioticos, setAntibioticos] = useState([]);
  const [doencasCronicas, setDoencasCronicas] = useState([]);
  const [doencasGeneticas, setDoencasGeneticas] = useState([]);
  const [intercorrencias, setIntercorrencias] = useState([]);
  const [examesRealizados, setExamesRealizados] = useState([]);

  const validationRules = {
    dtAtendimento: { required: true },
  };

  const [dadosFormulario, setDadosFormulario] = useState({
    paciente: {},

    dtAtendimento: "",
    dsLocalNascimento: "",
    dsTpParto: "",
    tpParto: null,
    tpApresentacao: null,
    dsApresentacao: "",
    tpGestacao: null,
    dsGestacao: "",

    dsTermo: "",
    dsPreTermo: "",
    dsPosTermo: "",

    nrPeso: "",
    nrComprimento: "",
    nrPerimetroCefalico: "",
    nrPerimetroToracico: "",
    nrAPGAR1: "",
    nrAPGAR5: "",
    nrAPGAR10: "",

    dsIntercorrencia: "",
    dsMalFormacao: "",
    malFormacoes: [],
    descricaoTerapeuticaUtilizada: "",
    descricaoAntibioticos: "",

    cirurgiaRealizada: false,
    dsCirurgiaRealizada: "",

    examesRealizados: null,
    dsExameRealizado: "",

    tpTestePezinho: null,
    tpTesteOuvidinho: null,
    tpTesteOlhinho: null,
    tpTesteCoracao: null,
    tpTesteLinguinha: null,
    tpTesteOrtolani: null,

    doencaCronica: false,
    dsDoencaCronicaMae: "",
    dsDoencaCronicaPai: "",
    dsDoencaCronicaIrmaos: "",
    dsDoencaCronicaAvosMaternos: "",

    doencaGenetica: false,
    dsDoencaGeneticaMae: "",
    dsDoencaGeneticaPai: "",
    dsDoencaGeneticaIrmaos: "",
    dsDoencaGeneticaAvosPaternos: "",
    dsDoencaGeneticaAvosMaternos: "",
    dsDoencaGeneticaTios1Grau: "",

    nrDiasUTINeonatal: null,
    nrDiasUniCuidIntermCang: null,
    nrDiasUniCuidIntermNeon: null,
    nrAlojamentoConjunto: null,

    intercorrencias: [],
    terapeuticaUtilizada: [],
    antibioticos: [],
    maeDoencasCronicas: [],
    paiDoencasCronicas: [],
    irmaosDoencasCronicas: [],
    avosPaternosDoencasCronicas: [],
    avosMaternosDoencasCronicas: [],
    tiosPrimeiroGrauDoencasGeneticas: [],
    maeDoencasGeneticas: [],
    paiDoencasGeneticas: [],
    irmaosDoencasGeneticas: [],
    avosPaternosDoencasGeneticas: [],
    avosMaternosDoencasGeneticas: [],
  });

  useEffect(() => {
    carregarMalFormacoes();
    carregarTerapeuticaUtilizada();
    carregarAntibioticos();
    carregarDoencasCronicas();
    carregarDoencasGeneticas();
    carregarIntercorrencias();
    carregarExamesRealizados();
  }, []);

  useEffect(() => {
    console.log("DADOS ENVIADO", dadosFormulario);
  }, [dadosFormulario]);

  const carregarMalFormacoes = async () => {
    try {
      setLoading(true);
      const malFormacoes = await ServiceUtil.getAllMalFormacoes();
      setMalFormacoes(malFormacoes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarTerapeuticaUtilizada = async () => {
    try {
      setLoading(true);
      const terapeuticaUtilizada = await ServiceUtil.getAllTerapeuticas();
      setTerapeuticaUtilizada(terapeuticaUtilizada);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarAntibioticos = async () => {
    try {
      setLoading(true);
      const antibioticos = await ServiceUtil.getAllAntibioticos();
      setAntibioticos(antibioticos);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarDoencasCronicas = async () => {
    try {
      setLoading(true);
      const doencasCronicas = await ServiceUtil.getAllDoencasCronicas();
      setDoencasCronicas(doencasCronicas);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarDoencasGeneticas = async () => {
    try {
      setLoading(true);
      const doencasGeneticas = await ServiceUtil.getAllDoencasGeneticas();
      setDoencasGeneticas(doencasGeneticas);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarIntercorrencias = async () => {
    try {
      setLoading(true);
      const intercorrencias = await ServiceUtil.getAllIntercorrencias();
      setIntercorrencias(intercorrencias);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarExamesRealizados = async () => {
    try {
      setLoading(true);
      const examesRealizados = await ServiceUtil.getAllExames();
      console.log(examesRealizados);
      setExamesRealizados(examesRealizados);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  const onChange = (e, fieldName) => {
    if (Array.isArray(e)) {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
      return;
    }

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

    const error = validateField(name, value, validationRules[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSelectionChange = (name, selected) => {
    setDadosFormulario((prevState) => ({
      ...prevState,
      [name]: selected,
    }));
  };

  const handleSubmit = async () => {
    console.log("Formulário:", dadosFormulario);
    const formErrors = validateForm(dadosFormulario, validationRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      enviarDadosNeoNatais(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarDadosNeoNatais(dadosFormulario) {
    dadosFormulario.paciente = pacienteEncontrado;
    console.log(dadosFormulario);
    try {
      const resposta = await NeoNatalService.create(dadosFormulario);
      handleShowAlert(resposta != null ? "201" : "400");
    } catch (erro) {
      if (erro instanceof Promise) {
        erro = await erro;
      }
      console.error("Erro ao salvar neo natal: ", erro.message || erro);
      throw new Error(`Erro ao salvar neo natal: ${erro.message}`);
    }
  }

  function formatarDataParaInput(dataBR) {
    if (!dataBR) return "";
    const [dia, mes, ano] = dataBR.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  }

  const dataFormatada = pacienteEncontrado?.dataNascimento
    ? formatarDataParaInput(pacienteEncontrado.dataNascimento)
    : "";

  return (
    <>
      <form>
        {message === "201" ? (
          <ModalSave
            type="success"
            title="Neo Natal cadastrado!"
            message="O Neo natal do paciente foi cadastrado com sucesso."
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              window.location.reload(); // Recarrega a página somente em caso de sucesso
            }}
          />
        ) : message === "400" ? (
          <ModalSave
            type="error"
            title="Erro no cadastro!"
            message="Houve um problema ao cadastrar o neo natal do paciente."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // Apenas fecha o modal
          />
        ) : null}

        <AutoComplete onSelectPaciente={setPacienteEncontrado} />

        {pacienteEncontrado && (
          <FormGroup
            title="Dados Paciente"
            description="Dados pessoais do Paciente"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
              <FormField
                label="Prontuário"
                placeholder="N° do Prontuário"
                value={pacienteEncontrado?.descricaoProntuario || ""}
              />
              <FormField
                label="Nome Completo"
                placeholder="Nome Completo"
                value={pacienteEncontrado?.dsNome || ""}
              />
              <FormField
                label="Data de Nascimento"
                placeholder="00/00/0000"
                type="date"
                value={dataFormatada}
              />
              <FormField
                name="dtAtendimento"
                label="Data do Atendimento"
                placeholder="00/00/0000"
                type="date"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dtAtendimento}
              />
            </div>
          </FormGroup>
        )}

        <FormGroup title="Dados Neonatais">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="localNascimento"
              label="Local de nascimento"
              isSelect
              options={locaisDeNascimento}
              onChange={onChange}
              error={errors.localNascimento}
            />
            <FormField
              name="dsLocalNascimento"
              label="Descrição do local de nascimento"
              onChange={onChange}
              error={errors.dsLocalNascimento}
            />
            <FormField
              name="tpParto"
              label="Tipo de parto"
              isSelect
              options={tiposDeParto}
              onChange={onChange}
              error={errors.tpParto}
            />
            <FormField
              name="dsTpParto"
              label="Descrição do Tipo de parto"
              onChange={onChange}
              error={errors.dsTpParto}
            />
            <FormField
              name="tpApresentacao"
              label="Apresentação"
              isSelect
              options={apresentacao}
              onChange={onChange}
              error={errors.tpApresentacao}
            />
            <FormField
              name="dsApresentacao"
              label="Descrição da Apresentação"
              onChange={onChange}
              error={errors.dsApresentacao}
            />
            <FormField
              name="tpGestacao"
              label="Tipo de gestação"
              isSelect
              options={tiposDeGestacao}
              onChange={onChange}
              error={errors.tipoGestacao}
            />
            <FormField
              name="dsGestacao"
              label="Descrição do Tipo de gestação"
              onChange={onChange}
              error={errors.descricaoTipoGestacao}
            />
          </div>
          <label className="pl-8 pt-2 font-bold text-sm text-gray-800 w-1/2">
            Idade gestacional (em semanas)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8 pt-4">
            <FormField
              name="dsTermo"
              label="Termo"
              onChange={onChange}
              error={errors.dsTermo}
            />
            <FormField
              name="dsPreTermo"
              label="Pré termo"
              onChange={onChange}
              error={errors.dsPreTermo}
            />
            <FormField
              name="dsPosTermo"
              label="Pós termo"
              onChange={onChange}
              error={errors.dsPosTermo}
            />
          </div>
        </FormGroup>

        <FormGroup title="Dados Antropométricos">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="nrPeso"
              label="Peso (g)"
              onChange={onChange}
              error={errors.nrPeso}
            />
            <FormField
              name="nrComprimento"
              label="Comprimento (cm)"
              onChange={onChange}
              error={errors.nrComprimento}
            />
            <FormField
              name="nrPerimetroCefalico"
              label="Perímetro Cefálico (cm)"
              onChange={onChange}
              error={errors.nrPerimetroCefalico}
            />
            <FormField
              name="nrPerimetroToracico"
              label="Perímetro Torácico (cm)"
              onChange={onChange}
              error={errors.nrPerimetroToracico}
            />
            <FormField
              name="nrAPGAR1"
              label="Apgar 1º Minuto"
              onChange={onChange}
              error={errors.nrAPGAR1}
            />
            <FormField
              name="nrAPGAR5"
              label="Apgar 5º Minuto"
              onChange={onChange}
              error={errors.nrAPGAR5}
            />
            <FormField
              name="nrAPGAR10"
              label="Apgar 10º Minuto"
              onChange={onChange}
              error={errors.nrAPGAR10}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="intercorrencias"
              label="Intercorrências"
              data-testid="intercorrencias-field"
              isSelect
              isMulti
              isAPI
              options={intercorrencias}
              value={dadosFormulario.intercorrencias}
              onChange={(selected) => onChange(selected, "intercorrencias")}
              error={errors.intercorrencias}
            />
            <FormField
              name="dsIntercorrencia"
              label="Descrição das Intercorrências"
              onChange={onChange}
              error={errors.dsIntercorrencia}
            />
            <FormField
              name="malFormacoes"
              label="Malformações"
              isSelect
              isMulti
              isAPI
              options={malFormacoes}
              value={dadosFormulario.malFormacoes}
              onChange={(selected) => onChange(selected, "malFormacoes")}
              error={errors.malFormacoes}
            />
            <FormField
              name="dsMalFormacao"
              label="Descrição das Malformações"
              onChange={onChange}
              error={errors.dsMalFormacao}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="terapeuticaUtilizada"
              label="Terapêutica Utilizada"
              isSelect
              isMulti
              isAPI
              options={terapeuticaUtilizada}
              value={dadosFormulario.terapeuticaUtilizada}
              onChange={(selected) =>
                onChange(selected, "terapeuticaUtilizada")
              }
              error={errors.terapeuticaUtilizada}
            />
            <FormField
              name="descricaoTerapeuticaUtilizada"
              label="Descrição da Terapêutica utilizada"
              onChange={onChange}
              error={errors.descricaoTerapeuticaUtilizada}
            />
            <FormField
              name="antibioticos"
              label="Antibióticos"
              isSelect
              isMulti
              isAPI
              options={antibioticos}
              value={dadosFormulario.antibioticos}
              onChange={(selected) => onChange(selected, "antibioticos")}
              error={errors.antibioticos}
            />
            <FormField
              name="descricaoAntibioticos"
              label="Descrição do antibióticos"
              onChange={onChange}
              error={errors.descricaoAntibioticos}
            />
          </div>
        </FormGroup>

        <FormGroup title="Cirurgia">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="cirurgiaRealizada"
              label="Cirurgia realizada"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.cirurgiaRealizada}
            />
            <FormField
              name="dsCirurgiaRealizada"
              label="Descrição em caso de Cirurgias"
              onChange={onChange}
              error={errors.dsCirurgiaRealizada}
            />
          </div>
        </FormGroup>

        <FormGroup title="Tempo de Hospitalização">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="nrDiasUTINeonatal"
              isGrid
              label="UTI Neonatal (dias)"
              onChange={onChange}
              error={errors.nrDiasUTINeonatal}
            />
            <FormField
              name="nrDiasUniCuidIntermNeon"
              isGrid
              label="Unidade de Cuidados Intermediários Neonatais (dias)"
              onChange={onChange}
              error={errors.nrDiasUniCuidIntermNeon}
            />
            <FormField
              name="nrDiasUniCuidIntermCang"
              isGrid
              label="Unidade de Cuidados Intermediários Canguru (dias)"
              onChange={onChange}
              error={errors.nrDiasUniCuidIntermCang}
            />
            <FormField
              name="nrAlojamentoConjunto"
              isGrid
              label="Alojamento conjunto"
              onChange={onChange}
              error={errors.nrAlojamentoConjunto}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="examesRealizados"
              label="Exames realizados"
              isSelect
              isMulti
              isAPI
              options={examesRealizados}
              value={dadosFormulario.examesRealizados}
              onChange={(selected) => onChange(selected, "examesRealizados")}
              error={errors.examesRealizados}
            />
            <FormField
              name="dsExameRealizado"
              label="Descrição para exames realizados"
              onChange={onChange}
              error={errors.dsExameRealizado}
            />
          </div>
        </FormGroup>

        <FormGroup title="Testes de Triagem Neonatal">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="tpTestePezinho"
              label="Teste do Pezinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTestePezinho}
            />
            <FormField
              name="tpTesteOuvidinho"
              label="Teste do Ouvidinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTesteOuvidinho}
            />
            <FormField
              name="tpTesteOlhinho"
              label="Teste do Olhinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTesteOlhinho}
            />
            <FormField
              name="tpTesteCoracao"
              label="Teste do Coraçãozinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTesteCoracao}
            />
            <FormField
              name="tpTesteLinguinha"
              label="Teste da Linguinha"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTesteLinguinha}
            />
            <FormField
              name="tpTesteOrtolani"
              label="Teste de Ortolani"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.tpTesteOrtolani}
            />
          </div>
        </FormGroup>

        <FormGroup title="Antecedentes Familiares">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="doencaCronica"
              label="Doenças crônicas"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.doencaCronica}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="maeDoencasCronicas"
              label="Mãe"
              isSelect
              isMulti
              isAPI
              options={doencasCronicas}
              value={dadosFormulario.maeDoencasCronicas}
              onChange={(selected) => onChange(selected, "maeDoencasCronicas")}
              error={errors.maeDoencasCronicas}
            />
            <FormField
              name="dsDoencaCronicaMae"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaCronicaMae}
            />
            <FormField
              name="paiDoencasCronicas"
              label="Pai"
              isSelect
              isMulti
              isAPI
              options={doencasCronicas}
              value={dadosFormulario.paiDoencasCronicas}
              onChange={(selected) => onChange(selected, "paiDoencasCronicas")}
              error={errors.paiDoencasCronicas}
            />
            <FormField
              name="dsDoencaCronicaPai"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaCronicaPai}
            />
            <FormField
              name="irmaosDoencasCronicas"
              label="Irmãos"
              isSelect
              isMulti
              isAPI
              options={doencasCronicas}
              value={dadosFormulario.irmaosDoencasCronicas}
              onChange={(selected) =>
                onChange(selected, "irmaosDoencasCronicas")
              }
              error={errors.irmaosDoencasCronicas}
            />
            <FormField
              name="dsDoencaCronicaIrmaos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaCronicaIrmaos}
            />
            <FormField
              name="avosPaternosDoencasCronicas"
              label="Avós paternos"
              isSelect
              isMulti
              isAPI
              options={doencasCronicas}
              value={dadosFormulario.avosPaternosDoencasCronicas}
              onChange={(selected) =>
                onChange(selected, "avosPaternosDoencasCronicas")
              }
              error={errors.avosPaternosDoencasCronicas}
            />
            <FormField
              name="dsDoencaCronicaAvosPaternos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaCronicaAvosPaternos}
            />
            <FormField
              name="avosMaternosDoencasCronicas"
              label="Avós maternos"
              isSelect
              isMulti
              isAPI
              options={doencasCronicas}
              value={dadosFormulario.avosMaternosDoencasCronicas}
              onChange={(selected) =>
                onChange(selected, "avosMaternosDoencasCronicas")
              }
              error={errors.avosMaternosDoencasCronicas}
            />
            <FormField
              name="dsDoencaCronicaAvosMaternos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaCronicaAvosMaternos}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="doencaGenetica"
              label="Doenças genéticas"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.doencaGenetica}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="maeDoencasGeneticas"
              label="Mãe"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.maeDoencasGeneticas}
              onChange={(selected) => onChange(selected, "maeDoencasGeneticas")}
              error={errors.maeDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaMae"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaMae}
            />
            <FormField
              name="paiDoencasGeneticas"
              label="Pai"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.paiDoencasGeneticas}
              onChange={(selected) => onChange(selected, "paiDoencasGeneticas")}
              error={errors.paiDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaPai"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaPai}
            />
            <FormField
              name="irmaosDoencasGeneticas"
              label="Irmãos"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.irmaosDoencasGeneticas}
              onChange={(selected) =>
                onChange(selected, "irmaosDoencasGeneticas")
              }
              error={errors.irmaosDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaIrmaos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaIrmaos}
            />
            <FormField
              name="avosPaternosDoencasGeneticas"
              label="Avós paternos"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.avosPaternosDoencasGeneticas}
              onChange={(selected) =>
                onChange(selected, "avosPaternosDoencasGeneticas")
              }
              error={errors.avosPaternosDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaAvosPaternos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaAvosPaternos}
            />
            <FormField
              name="avosMaternosDoencasGeneticas"
              label="Avós maternos"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.avosMaternosDoencasGeneticas}
              onChange={(selected) =>
                onChange(selected, "avosMaternosDoencasGeneticas")
              }
              error={errors.avosMaternosDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaAvosMaternos"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaAvosMaternos}
            />
            <FormField
              name="tiosPrimeiroGrauDoencasGeneticas"
              label="Tios de 1º grau"
              isSelect
              isMulti
              isAPI
              options={doencasGeneticas}
              value={dadosFormulario.tiosPrimeiroGrauDoencasGeneticas}
              onChange={(selected) =>
                onChange(selected, "tiosPrimeiroGrauDoencasGeneticas")
              }
              error={errors.tiosPrimeiroGrauDoencasGeneticas}
            />
            <FormField
              name="dsDoencaGeneticaTios1Grau"
              label="Descrição"
              onChange={onChange}
              error={errors.dsDoencaGeneticaTios1Grau}
            />
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4 mb-10">
          <button
            type="button"
            name="salvar"
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
