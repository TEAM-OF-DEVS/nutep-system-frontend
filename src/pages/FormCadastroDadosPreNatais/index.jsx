import { useEffect, useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import ModalSave from "../../components/ModalSave/ModalSave.jsx";
import PreNatalBuilder from "../../models/build/PreNatalBuilder.js";
import ContraceptiveMethods from "../../models/enum/PreNatais/ContraceptiveMethods.js";
import Convenio from "../../models/enum/PreNatais/Convenio.js";
import ListSimOuNao from "../../models/enum/PreNatais/ListSimOuNao.js";
import MeioAbortivo from "../../models/enum/PreNatais/MeioAbortivo.js";
import PlanejamentoDeGestacao from "../../models/enum/PreNatais/PlanejamentoDeGestacao.js";
import PreNatalService from "../../services/prenatalService.jsx";
import ServiceUtil from "../../services/serviceUtil.jsx";
import {
  validateField,
  validateForm,
} from "../../validator/validateFormPaciente.jsx";

export function FormCadastroDadosPreNatais() {
  useEffect(() => {
    // Desativa o comportamento de manter a rolagem após reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Garante que a rolagem vá para o topo
    window.scrollTo(0, 0);
  }, []);

  const convenio = Object.entries(Convenio).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const planejamentoDeGestacao = Object.entries(PlanejamentoDeGestacao).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const contraceptiveMethods = Object.entries(ContraceptiveMethods).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const meioAbortivo = Object.entries(MeioAbortivo).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const listSimOuNao = Object.entries(ListSimOuNao).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [procedencias, setProcedencias] = useState([]);

  const [intercorrenciasGestacao, setIntercorrenciasGestacao] = useState([]);
  const [alergias, setAlergias] = useState([]);
  const [infeccoes, setInfeccoes] = useState([]);
  const [doencasPreExistentesMae, setDoencasPreExistentesMae] = useState([]);
  const [usoDrogasMae, setUsoDrogasMae] = useState([]);
  const [examesRealizadosMae, setExamesRealizadosMae] = useState([]);
  const [medicamentosUtilizadosMae, setMedicamentosUtilizadosMae] = useState(
    [],
  );
  const [motivosHospitalizacaoMae, setMotivosHospitalizacaoMae] = useState([]);
  const [diagnosticoHospitalizacaoMae, setDiagnosticoHospitalizacaoMae] =
    useState([]);

  const validationRules = {
    dtAtendimento: { required: true },
  };

  useEffect(() => {
    carregarProcedencias();
    carregarIntercorrenciasGestacao();
    carregarAlergias();
    carregarInfeccoes();
    carregarDoencasPreExistentesMae();
    carregarUsoDrogasMae();
    carregarExamesRealizadosMae();
    carregarMedicamentosUtilizadosMae();
    carregarMotivosHospitalizacaoMae();
    carregarDiagnosticoHospitalizacaoMae();
  }, []);

  const carregarProcedencias = async () => {
    try {
      setLoading(true);
      const procedencias = await ServiceUtil.getAllProcedencias();
      setProcedencias(procedencias);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarIntercorrenciasGestacao = async () => {
    try {
      setLoading(true);
      const intercorrenciasGestacoes =
        await ServiceUtil.getAllIntercorrenciasGestacao();
      setIntercorrenciasGestacao(intercorrenciasGestacoes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarAlergias = async () => {
    try {
      setLoading(true);
      const alergias = await ServiceUtil.getAllAlergias();
      setAlergias(alergias);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarInfeccoes = async () => {
    try {
      setLoading(true);
      const infeccoes = await ServiceUtil.getAllInfeccoes();
      setInfeccoes(infeccoes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarDoencasPreExistentesMae = async () => {
    try {
      setLoading(true);
      const doencasPreExistentesMae = await ServiceUtil.getAllDoencas();
      setDoencasPreExistentesMae(doencasPreExistentesMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarUsoDrogasMae = async () => {
    try {
      setLoading(true);
      const usoDrogasMae = await ServiceUtil.getAllUsoDrogas();
      setUsoDrogasMae(usoDrogasMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarExamesRealizadosMae = async () => {
    try {
      setLoading(true);
      const examesRealizadosMae = await ServiceUtil.getAllExames();
      setExamesRealizadosMae(examesRealizadosMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarMedicamentosUtilizadosMae = async () => {
    try {
      setLoading(true);
      const medicamentosUtilizadosMae = await ServiceUtil.getAllMedicamentos();
      setMedicamentosUtilizadosMae(medicamentosUtilizadosMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarMotivosHospitalizacaoMae = async () => {
    try {
      setLoading(true);
      const motivosHospitalizacaoMae =
        await ServiceUtil.getAllMotivosHospitalizacao();
      setMotivosHospitalizacaoMae(motivosHospitalizacaoMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const carregarDiagnosticoHospitalizacaoMae = async () => {
    try {
      setLoading(true);
      const diagnosticoHospitalizacaoMae =
        await ServiceUtil.getAllDiagnosticos();
      setDiagnosticoHospitalizacaoMae(diagnosticoHospitalizacaoMae);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [dadosFormulario, setDadosFormulario] = useState({
    dtAtendimento: null,
    nrPesoInicioGravidez: null,
    nrPesoFimGravidez: null,
    nrEstaturaMae: null,
    nrIdadeMaeEngravidar: null,
    nrIdadePaiInicioGestacao: null,
    nrTempoGestacaoPrimeiraConsulta: null,
    nrNumeroConsultas: null,
    nrGestacoes: null,
    nrFilhosVivos: null,
    nrNatimortos: null,
    nrAbortos: null,
    nrTempoGestacaoSemanasAborto: null,
    nrSemanasHospitalizacaoPeriodoGestacional: null,
    nrDiasHospitalizacaoPeriodoGestacional: null,
    usoAbortivo: false,
    consanguinidadePais: false,
    sangramentoGravidez: false,
    hospitalizacaoPeriodoGestacional: false,
    dsProcedencia: null,
    dsConvenio: null,
    dsMetodoContraceptivoAnteriorGestacao: null,
    dsMeioAbortivo: null,
    dsConsanguinidadePais: null,
    dsIntercorrenciaGestacao: null,
    dsAlergia: null,
    dsPeriodoSangramentoGravidez: null,
    dsInfeccoesMae: null,
    dsDoencaPreExistentesMae: null,
    dsMedicamentosUtilizadosMae: null,
    dsMotivoHospitalizacaoPeriodoGestacional: null,
    dsDiagnosticoHospitalizacaoMae: null,
    dsObservacao: null,
    convenio: null,
    planejamentoGestacao: null,
    metodoContraceptivoAnteriorGestacao: null,
    meioAbortivo: null,
    paciente: pacienteEncontrado || null,
    procedencia: null,
    intercorrenciasGestacao: [],
    alergias: [],
    infeccoes: [],
    doencasPreExistentesMae: [],
    usoDrogasMae: [],
    examesRealizadosMae: [],
    medicamentosUtilizadosMae: [],
    motivosHospitalizacaoMae: [],
    diagnosticoHospitalizacaoMae: [],
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  useEffect(() => {
    console.log("DADOS ATUAIS DO FORMULÁRIO:", dadosFormulario);
  }, [dadosFormulario]);

const onChange = (e, fieldName) => {
  if (Array.isArray(e)) {
    setDadosFormulario((prevState) => ({
      ...prevState,
      [fieldName]: e,
    }));
    return;
  }

  const { name, value } = e.target;

   
  if (name === "nrEstaturaMae") {
    
    const numericValue = value.replace(/\D/g, '');
    
    let formattedValue = '';
    
    if (numericValue.length <= 2) {
      
      formattedValue = numericValue;
    } else if (numericValue.length <= 4) {
     
      formattedValue = `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
    } else {

      formattedValue = `${numericValue.slice(0, 2)}.${numericValue.slice(2, 4)}`;
    }

    setDadosFormulario((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));


    const isValid = /^[0-9]{1,2}(\.[0-9]{0,2})?$/.test(formattedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: isValid ? "" : "Formato inválido (ex: 99.99)"
    }));

    return;
  }


  let parsedValue;
  try {
    parsedValue = JSON.parse(value);
  } catch {
    parsedValue = value;
  }

  const upperCaseValue = typeof parsedValue === "string" ? parsedValue.toUpperCase() : parsedValue;

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

  function formatarDataParaInput(dataBR) {
    if (!dataBR) return "";
    const [dia, mes, ano] = dataBR.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  }

  const dataFormatada = pacienteEncontrado?.dataNascimento
    ? formatarDataParaInput(pacienteEncontrado.dataNascimento)
    : "";

  const handleSubmit = async () => {
    const formErrors = validateForm(dadosFormulario, validationRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      enviarDadosPreNataisPaciente(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarDadosPreNataisPaciente(dadosFormulario) {
    dadosFormulario.paciente = pacienteEncontrado;
    console.log(dadosFormulario);
    try {
      const resposta = await PreNatalService.create(dadosFormulario);
      handleShowAlert(resposta != null ? "201" : "400");
    } catch (erro) {
      if (erro instanceof Promise) {
        erro = await erro;
      }
      console.error(
        "Erro ao salvar dados do pré natal: ",
        erro.message || erro,
      );
      throw new Error(`Erro ao salvar dados do pré natal: ${erro.message}`);
    }
  }

  return (
    <>
      <form>
        {message === "201" ? (
          <ModalSave
            title="Pré Natal cadastrado!"
            message="O Pré natal para o paciente foi cadastrado com sucesso."
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              window.location.reload(); // ← recarrega a página apenas no sucesso
            }}
          />
        ) : message === "400" ? (
          <ModalSave
            title="Erro no cadastro!"
            message="Houve um problema ao cadastrar pré natal do paciente."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // ← só fecha o modal, sem reload
          />
        ) : null}

        {/*DADOS PRE NATAIS*/}
        <AutoComplete onSelectPaciente={setPacienteEncontrado} />
        {pacienteEncontrado && (
          <FormGroup
            title="Dados Pré-Natais"
            description="Cadastro de Dados Pré Natais do Paciente"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
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
        {/* EMCAMINHAMENTO ORIGEM */}
        <FormGroup title="Encaminhamento de Origem">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="procedencia"
              label="Procedência"
              isSelect
              isAPI
              options={procedencias}
              onChange={onChange}
              error={errors.procedencia}
            />
            <FormField
              name="dsProcedencia"
              label="Descrição da Procedência"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.dsProcedencia}
            />
            <FormField
              name="convenio"
              label="Convênio"
              isSelect
              options={convenio}
              onChange={onChange}
              error={errors.convenio}
            />
            <FormField
              name="dsConvenio"
              label="Descrição do Convênio"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.dsConvenio}
            />
          </div>
        </FormGroup>
        {/* DADOS GESTACIONAIS */}
        <FormGroup
          title="Dados Gestacionais"
          description="Cadastro de Dados Gestacionais"
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="nrIdadeMaeEngravidar"
              label="Idade da mãe ao engravidar"
              onChange={onChange}
              error={errors.nrIdadeMaeEngravidar}
            />
            <FormField
              name="nrNumeroConsultas"
              label="Número de consultas"
              onChange={onChange}
              error={errors.nrNumeroConsultas}
            />
            <FormField
              name="nrIdadePaiInicioGestacao"
              label="Idade do pai no início da gestação"
              onChange={onChange}
              error={errors.nrIdadePaiInicioGestacao}
            />
            <FormField
              name="nrGestacoes"
              label="Número de gestações"
              onChange={onChange}
              error={errors.nrGestacoes}
            />
            <FormField
              name="nrPesoInicioGravidez"
              label="Peso inicial na gravidez (kg)"
              onChange={onChange}
              error={errors.nrPesoInicioGravidez}
            />
            <FormField
              name="nrFilhosVivos"
              label="Número de filhos vivos"
              onChange={onChange}
              error={errors.nrFilhosVivos}
            />
            <FormField
              name="nrPesoFimGravidez"
              label="Peso final na gravidez (kg)"
              onChange={onChange}
              error={errors.nrPesoFimGravidez}
            />
            <FormField
              name="nrNatimortos"
              label="Número de natimortos"
              onChange={onChange}
              error={errors.nrNatimortos}
            />
            <FormField
              name="nrEstaturaMae"
              label="Estatura da mãe (m)"
              placeholder="Ex: 1.75"
              onChange={onChange}  
              error={errors.nrEstaturaMae}
              value={dadosFormulario.nrEstaturaMae ?? ""}
              type="text"
              inputMode="decimal"
            />
            <FormField
              name="nrAbortos"
              label="Número de abortos"
              onChange={onChange}
              error={errors.nrAbortos}
            />
            <FormField
              name="nrTempoGestacaoPrimeiraConsulta"
              label="Tempo de gestação na 1ª consulta (Semanas)"
              onChange={onChange}
              error={errors.nrTempoGestacaoPrimeiraConsulta}
            />
            <FormField
              name="planejamentoGestacao"
              label="Planejamento da gestação"
              isSelect
              options={planejamentoDeGestacao}
              onChange={onChange}
              error={errors.planejamentoGestacao}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="metodoContraceptivoAnteriorGestacao"
              label="Método contraceptivo anterior à gestação"
              isSelect
              options={contraceptiveMethods}
              onChange={onChange}
              error={errors.metodoContraceptivoAnteriorGestacao}
            />
            <FormField
              name="dsMetodoContraceptivoAnteriorGestacao"
              label="Descrição do método contraceptivo"
              onChange={onChange}
              error={errors.dsMetodoContraceptivoAnteriorGestacao}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="usoAbortivo"
              label="Uso de Abortivo"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.usoAborto}
            />
            <FormField
              name="nrTempoGestacaoSemanasAborto"
              label="Tempo gestação (Semanas)"
              onChange={onChange}
              error={errors.nrTempoGestacaoSemanasAborto}
            />
            <FormField
              name="meioAbortivo"
              label="Meio Abortivo"
              isSelect
              options={meioAbortivo}
              onChange={onChange}
              error={errors.meioAbortivo}
            />
            <FormField
              name="dsMeioAbortivo"
              label="Descrição do meio abortivo"
              onChange={onChange}
              error={errors.dsMeioAbortivo}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="consanguinidadePais"
              label="Consanguinidade dos pais"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.consanguinidadePais}
            />
            <FormField
              name="dsConsanguinidadePais"
              label="Descrição da Consanguinidade"
              onChange={onChange}
              error={errors.dsConsanguinidadePais}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="intercorrenciasGestacao"
              label="Intercorrências na gestação"
              isSelect
              isMulti
              isAPI
              options={intercorrenciasGestacao}
              value={dadosFormulario.intercorrenciasGestacao}
              onChange={(selected) =>
                onChange(selected, "intercorrenciasGestacao")
              }
              error={errors.intercorrenciasGestacao}
            />
            <FormField
              name="dsIntercorrenciaGestacao"
              label="Descrição da Intercorrência"
              onChange={onChange}
              error={errors.dsIntercorrenciaGestacao}
            />
            <FormField
              name="alergias"
              label="Alergias"
              isSelect
              isMulti
              isAPI
              options={alergias}
              value={dadosFormulario.alergias}
              onChange={(selected) => onChange(selected, "alergias")}
              error={errors.alergias}
            />
            <FormField
              name="dsAlergia"
              label="Descrição de Alergias"
              onChange={onChange}
              error={errors.dsAlergia}
            />
            <FormField
              name="sangramentoGravidez"
              label="Sangramentos na gravidez?"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.sangramentoGravidez}
            />
            <FormField
              name="dsPeriodoSangramentoGravidez"
              label="Período do Sangramento"
              onChange={onChange}
              error={errors.dsPeriodoSangramentoGravidez}
            />
            <FormField
              name="infeccoes"
              label="Infecções"
              isSelect
              isMulti
              isAPI
              options={infeccoes}
              value={dadosFormulario.infeccoes}
              onChange={(selected) => onChange(selected, "infeccoes")}
              error={errors.infeccoes}
            />
            <FormField
              name="dsInfeccoesMae"
              label="Descrição de Infecções"
              onChange={onChange}
              error={errors.dsInfeccoesMae}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="doencasPreExistentesMae"
              label="Doenças Pré Existentes da Mãe"
              isSelect
              isMulti
              isAPI
              options={doencasPreExistentesMae}
              value={dadosFormulario.doencasPreExistentesMae}
              onChange={(selected) =>
                onChange(selected, "doencasPreExistentesMae")
              }
              error={errors.doencasPreExistentesMae}
            />
            <FormField
              name="dsDoencaPreExistentesMae"
              label="Descrição de Doenças Pré existentes"
              onChange={onChange}
              error={errors.dsDoencaPreExistentesMae}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="usoDrogasMae"
              label="Uso de Drogas Pela Mãe"
              isSelect
              isMulti
              isAPI
              options={usoDrogasMae}
              value={dadosFormulario.usoDrogasMae}
              onChange={(selected) => onChange(selected, "usoDrogasMae")}
              error={errors.usoDrogasMae}
            />
            <FormField
              name="descricaoUsoDeDrogas"
              label="Descrição de uso de drogas"
              onChange={onChange}
              error={errors.descricaoUsoDeDrogas}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="examesRealizadosMae"
              label="Exames Realizados Pela Mãe"
              isSelect
              isMulti
              isAPI
              options={examesRealizadosMae}
              value={dadosFormulario.examesRealizadosMae}
              onChange={(selected) => onChange(selected, "examesRealizadosMae")}
              error={errors.examesRealizadosMae}
            />
            <FormField
              name="descricaoExamesMae"
              label="Descrição dos exames realizados pela mãe"
              onChange={onChange}
              error={errors.consanguinidadePais}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="medicamentosUtilizadosMae"
              label="Medicamentos utilizados pela mãe"
              isSelect
              isMulti
              isAPI
              options={medicamentosUtilizadosMae}
              value={dadosFormulario.medicamentosUtilizadosMae}
              onChange={(selected) =>
                onChange(selected, "medicamentosUtilizadosMae")
              }
              error={errors.medicamentosUtilizadosMae}
            />
            <FormField
              name="dsMedicamentosUtilizadosMae"
              label="Descrição dos medicamentos utilizados pela mãe"
              onChange={onChange}
              error={errors.dsMedicamentosUtilizadosMae}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="hospitalizacaoPeriodoGestacional"
              label="Hospitalizações no período gestacional"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.hospitalizacaoPeriodoGestacional}
            />
            <FormField
              name="nrSemanasHospitalizacaoPeriodoGestacional"
              label="Qual periodo (semanas)"
              onChange={onChange}
              error={errors.nrSemanasHospitalizacaoPeriodoGestacional}
            />
            <FormField
              name="motivosHospitalizacaoMae"
              label="Motivo da hospitalização"
              isSelect
              isMulti
              isAPI
              options={motivosHospitalizacaoMae}
              value={dadosFormulario.motivosHospitalizacaoMae}
              onChange={(selected) =>
                onChange(selected, "motivosHospitalizacaoMae")
              }
              error={errors.motivosHospitalizacaoMae}
            />
            <FormField
              name="nrDiasHospitalizacaoPeriodoGestacional"
              label="Dias de hospitalização"
              onChange={onChange}
              error={errors.nrDiasHospitalizacaoPeriodoGestacional}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="dsMotivoHospitalizacaoPeriodoGestacional"
              label="Descrição do Motivo da hospitalização"
              onChange={onChange}
              error={errors.dsMotivoHospitalizacaoPeriodoGestacional}
            />
            <FormField
              name="diagnosticoHospitalizacaoMae"
              label="Diagnóstico"
              isSelect
              isMulti
              isAPI
              options={diagnosticoHospitalizacaoMae}
              value={dadosFormulario.diagnostico}
              onChange={(selected) =>
                onChange(selected, "diagnosticoHospitalizacaoMae")
              }
              error={errors.diagnostico}
            />
            <FormField
              name="dsDiagnosticoHospitalizacaoMae"
              label="Descrição do Diagnóstico"
              onChange={onChange}
              error={errors.dsDiagnosticoHospitalizacaoMae}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 px-8 pt-4">
            <FormField
              name="dsObservacao"
              label="Observações"
              type="textarea"
              onChange={onChange}
              error={errors.dsObservacao}
            />
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4">
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
