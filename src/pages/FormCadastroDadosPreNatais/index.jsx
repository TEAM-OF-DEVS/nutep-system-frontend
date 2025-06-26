import { useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import Procedencia from "../../models/enum/Procedencia.js";
import Alergias from "../../models/enum/PreNatais/Alergias.js";
import ContraceptiveMethods from "../../models/enum/PreNatais/ContraceptiveMethods.js";
import Convenio from "../../models/enum/PreNatais/Convenio.js";
import Diagnostico from "../../models/enum/PreNatais/Diagnostico.js";
import DoencasPreExistentesMae from "../../models/enum/PreNatais/DoencasPreExistentesMae.js";
import ExamesRealizadosMae from "../../models/enum/PreNatais/ExamesRealizadosMae.js";
import Infeccoes from "../../models/enum/PreNatais/Infeccoes.js";
import IntercorrenciasGestacao from "../../models/enum/PreNatais/IntercorrenciasGestacao.js";
import ListSimOuNao from "../../models/enum/PreNatais/ListSimOuNao.js";
import MedicamentosUtilizadosMae from "../../models/enum/PreNatais/MedicamentosUtilizadosMae.js";
import MeioAbortivo from "../../models/enum/PreNatais/MeioAbortivo.js";
import MotivoHospitalizacao from "../../models/enum/PreNatais/MotivoHospitalizacao.js";
import PlanejamentoDeGestacao from "../../models/enum/PreNatais/PlanejamentoDeGestacao.js";
import UsoDrogasMae from "../../models/enum/PreNatais/UsoDrogasMae.js";
import PreNatalBuilder from "../../models/build/PreNatalBuilder.js";
import PreNatalService from "../../services/prenatalService.jsx";
import {
  validateField,
  validateForm,
} from "../../validator/validateFormPaciente.jsx";
import ServiceUtil from "../../services/serviceUtil.jsx";
import { useEffect } from "react";
import ModalSave from "../../components/ModalSave/ModalSave.jsx";

export function FormCadastroDadosPreNatais() {
  const procedencias = Object.entries(Procedencia).map(([key, value]) => ({
    value: key,
    label: value,
  }));
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
  const intercorrenciasGestacao = Object.entries(IntercorrenciasGestacao).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const alergias = Object.entries(Alergias).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const infeccoes = Object.entries(Infeccoes).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const doencasPreExistentesMae = Object.entries(DoencasPreExistentesMae).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const usoDrogasMae = Object.entries(UsoDrogasMae).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const examesRealizadosMae = Object.entries(ExamesRealizadosMae).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const medicamentosUtilizadosMae = Object.entries(
    MedicamentosUtilizadosMae,
  ).map(([key, value]) => ({ value: key, label: value }));
  const motivoHospitalizacao = Object.entries(MotivoHospitalizacao).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const diagnostico = Object.entries(Diagnostico).map(([key, value]) => ({
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
  const [procedenciasList, setProcedenciasList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const validationRules = {
    dataAtendimento: { required: true },
  };

  const carregarCidadesOuMunicipios = async () => {
    try {
      setLoading(true);
      const procedencias = await ServiceUtil.getAllProcedencias();
      setProcedenciasList(procedencias);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarCidadesOuMunicipios();
  }, []);

  const [dadosFormulario, setDadosFormulario] = useState({
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
    intercorrenciasGestacao: [],
    descricaoIntercorrencias: "",
    alergias: [],
    descricaoAlergias: "",
    sangramentoGravidez: "",
    periodoSangramento: "",
    infeccoes: [],
    descricaoInfeccoes: "",
    doencasPreExistentesMae: [],
    descricaoDoencasPreExistentes: "",
    usoDrogasMae: [],
    descricaoUsoDeDrogas: "",
    examesRealizadosMae: [],
    descricaoExamesMae: "",
    medicamentosUtilizadosMae: [],
    descricaoMedicamentosMae: "",
    hospitalizacoesGestacao: "",
    periodoHospitalizacaoSemanas: "",
    motivoHospitalizacao: [],
    diasHospitalizacao: "",
    descricaoMotivoHospitalizacao: "",
    diagnostico: [],
    descricaoDiagnostico: "",
    observacoes: "",
  });

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

    const keys = name.split(".");

    if (keys.length > 1) {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [name]: value,
      }));
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
      enviarDadosPreNataisPaciente(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarDadosPreNataisPaciente(dadosFormulario) {
    const prenatal = new PreNatalBuilder()
      .withDados(dadosFormulario)
      .withPaciente(pacienteEncontrado)
      .build();
    console.log(prenatal);
    try {
      const resposta = await PreNatalService.create(prenatal);
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
            onClose={() => setIsModalOpen(false)}
          />
        ) : message === "400" ? (
          <ModalSave
            title="Erro no cadastro!"
            message="Houve um problema ao cadastrar pré natal do paciente."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
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
                type="Date"
                value={pacienteEncontrado?.dataNascimento || ""}
              />
              <FormField
                name="dataAtendimento"
                label="Data do Atendimento"
                placeholder="00/00/0000"
                type="Date"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dataAtendimento}
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
              options={procedencias}
              onChange={onChange}
              error={errors.procedencia}
            />
            <FormField
              name="descricaoProcedencia"
              label="Descrição da Procedência"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.descricaoProcedencia}
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
              name="descricaoConvenio"
              label="Descrição do Convênio"
              placeholder="Descrição"
              onChange={onChange}
              error={errors.descricaoConvenio}
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
              name="idadeMaeEngravidar"
              label="Idade da mãe ao engravidar"
              onChange={onChange}
              error={errors.idadeMaeEngravidar}
            />
            <FormField
              name="numeroConsultas"
              label="Número de consultas"
              onChange={onChange}
              error={errors.numeroConsultas}
            />
            <FormField
              name="idadePaiGestacao"
              label="Idade do pai no início da gestação"
              onChange={onChange}
              error={errors.idadePaiGestacao}
            />
            <FormField
              name="numeroGestacoes"
              label="Número de gestações"
              onChange={onChange}
              error={errors.numeroGestacoes}
            />
            <FormField
              name="pesoInicialGravidez"
              label="Peso inicial na gravidez (kg)"
              onChange={onChange}
              error={errors.pesoInicialGravidez}
            />
            <FormField
              name="numeroFilhosVivos"
              label="Número de filhos vivos"
              onChange={onChange}
              error={errors.numeroFilhosVivos}
            />
            <FormField
              name="pesoFinalGravidez"
              label="Peso final na gravidez (kg)"
              onChange={onChange}
              error={errors.pesoFinalGravidez}
            />
            <FormField
              name="numeroNatimortos"
              label="Número de natimortos"
              onChange={onChange}
              error={errors.numeroNatimortos}
            />
            <FormField
              name="estaturaMae"
              label="Estatura da mãe (m)"
              onChange={onChange}
              error={errors.estaturaMae}
            />
            <FormField
              name="numeroAbortos"
              label="Número de abortos"
              onChange={onChange}
              error={errors.numeroAbortos}
            />
            <FormField
              name="tempoGestacaoPrimeiraConsulta"
              label="Tempo de gestação na 1ª consulta (Semanas)"
              onChange={onChange}
              error={errors.tempoGestacaoPrimeiraConsulta}
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
              name="metodoContraceptivoAnterior"
              label="Método contraceptivo anterior à gestação"
              isSelect
              options={contraceptiveMethods}
              onChange={onChange}
              error={errors.metodoContraceptivoAnterior}
            />
            <FormField
              name="descricaoMetodoContraceptivo"
              label="Descrição do método contraceptivo"
              onChange={onChange}
              error={errors.descricaoMetodoContraceptivo}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="usoAborto"
              label="Uso de Abortivo"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.usoAborto}
            />
            <FormField
              name="tempoGestacaoSemanas"
              label="Tempo gestação (Semanas)"
              onChange={onChange}
              error={errors.tempoGestacaoSemanas}
            />
            <FormField
              name="meioAborto"
              label="Meio Abortivo"
              isSelect
              options={meioAbortivo}
              onChange={onChange}
              error={errors.meioAborto}
            />
            <FormField
              name="descricaoMeioAbortivo"
              label="Descrição do meio abortivo"
              onChange={onChange}
              error={errors.descricaoMeioAbortivo}
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
              name="descricaoConsanguinidade"
              label="Descrição da Consanguinidade"
              onChange={onChange}
              error={errors.descricaoConsanguinidade}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
           <FormField
              name="intercorrenciasGestacao"
              label="Intercorrências na gestação"
              isSelect
              isMulti
              options={intercorrenciasGestacao}
              value={dadosFormulario.intercorrenciasGestacao} 
              onChange={onChange}
              error={errors.intercorrenciasGestacao}
            />
            <FormField
              name="descricaoIntercorrencias"
              label="Descrição da Intercorrência"
              onChange={onChange}
              error={errors.descricaoIntercorrencias}
            />
            <FormField
              name="alergias"
              label="Alergias"
              isSelect
              isMulti
              options={alergias}
              value={dadosFormulario.alergias}
              onChange={onChange}
              error={errors.alergias}
            />
            <FormField
              name="descricaoAlergias"
              label="Descrição de Alergias"
              onChange={onChange}
              error={errors.descricaoAlergias}
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
              name="periodoSangramento"
              label="Período do Sangramento"
              onChange={onChange}
              error={errors.periodoSangramento}
            />
            <FormField
              name="infeccoes"
              label="Infecções"
              isSelect
              isMulti
              options={infeccoes}
              value={dadosFormulario.infeccoes}
              onChange={onChange}
              error={errors.infeccoes}
            />
            <FormField
              name="descricaoInfeccoes"
              label="Descrição de Infecções"
              onChange={onChange}
              error={errors.descricaoInfeccoes}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="doencasPreExistentesMae"
              label="Doenças Pré Existentes da Mãe"
              isSelect
              isMulti
              options={doencasPreExistentesMae}
              value={dadosFormulario.doencasPreExistentesMae}
              onChange={onChange}
              error={errors.doencasPreExistentesMae}
            />
            <FormField
              name="descricaoDoencasPreExistentes"
              label="Descrição de Doenças Pré existentes"
              onChange={onChange}
              error={errors.descricaoDoencasPreExistentes}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="usoDrogasMae"
              label="Uso de Drogas Pela Mãe"
              isSelect
              isMulti
              options={usoDrogasMae}
               value={dadosFormulario.usoDrogasMae}
              onChange={onChange}
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
              options={examesRealizadosMae}
              value={dadosFormulario.examesRealizadosMae}
              onChange={onChange}
              error={errors.consanguinidadePais}
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
              options={medicamentosUtilizadosMae}
              value={dadosFormulario.medicamentosUtilizadosMae}
              onChange={onChange}
              error={errors.medicamentosUtilizadosMae}
            />
            <FormField
              name="descricaoMedicamentosMae"
              label="Descrição dos medicamentos utilizados pela mãe"
              onChange={onChange}
              error={errors.descricaoMedicamentosMae}
            />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="hospitalizacoesGestacao"
              label="Hospitalizações no período gestacional"
              isSelect
              options={listSimOuNao}
              onChange={onChange}
              error={errors.hospitalizacoesGestacao}
            />
            <FormField
              name="periodoHospitalizacaoSemanas"
              label="Qual periodo (semanas)"
              onChange={onChange}
              error={errors.periodoHospitalizacaoSemanas}
            />
            <FormField
              name="motivoHospitalizacao"
              label="Motivo da hospitalização"
              isSelect
              isMulti
              options={motivoHospitalizacao}
              value={dadosFormulario.motivoHospitalizacao}
              onChange={onChange}
              error={errors.motivoHospitalizacao}
            />
            <FormField
              name="diasHospitalizacao"
              label="Dias de hospitalização"
              onChange={onChange}
              error={errors.diasHospitalizacao}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="descricaoMotivoHospitalizacao"
              label="Descrição do Motivo da hospitalização"
              onChange={onChange}
              error={errors.descricaoMotivoHospitalizacao}
            />
            <FormField
              name="diagnostico"
              label="Diagnóstico"
              isSelect
              isMulti
              options={diagnostico}
              value={dadosFormulario.diagnostico}
              onChange={onChange}
              error={errors.diagnostico}
            />
            <FormField
              name="descricaoDiagnostico"
              label="Descrição do Diagnóstico"
              onChange={onChange}
              error={errors.descricaoDiagnostico}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 px-8 pt-4">
            <FormField
              name="observacoes"
              label="Observações"
              type="textarea"
              onChange={onChange}
              error={errors.observacoes}
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
