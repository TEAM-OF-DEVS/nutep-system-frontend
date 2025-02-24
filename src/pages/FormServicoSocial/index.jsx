import React from "react";
import { useState } from "react";
import { validateField, validateForm } from "../../validator/validateFormPaciente.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import { Abrigos, ConfiguracaoFamiliar, DiasTurnoTerapia, GrauInstrucao, OpcoesPadrao, PeriodicidadeTerapia, PresencaDosPais, SituacaoAtualInstituicao, SituacaoConjugalPais, TipoAcolhimento, TipoTerapia } from "../../models/enum/EnunsServicosSocial.js";
import SimOuNao from "../../models/enum/SimNao.js";
import ServicoSocialService from "../../services/servicoSocialService.jsx";
import MessageAlert from "../../util/MessageAlert.jsx";
import ServicoSocialBuilder from "../../models/build/ServicoSocialBuilder.js";

export function FormServicoSocial() {

  const configuracaoFamiliar = Object.entries(ConfiguracaoFamiliar).map(([key, value]) => ({ value: key, label: value }));
  const situacaoConjugalPais = Object.entries(SituacaoConjugalPais).map(([key, value]) => ({ value: key, label: value }));
  const presencaDosPais = Object.entries(PresencaDosPais).map(([key, value]) => ({ value: key, label: value }));
  const tipoAcolhimento = Object.entries(TipoAcolhimento).map(([key, value]) => ({ value: key, label: value }));
  const abrigos = Object.entries(Abrigos).map(([key, value]) => ({ value: key, label: value }));
  const opcoesPadrao = Object.entries(OpcoesPadrao).map(([key, value]) => ({ value: key, label: value }));
  const opcaoSimOuNao = Object.entries(SimOuNao).map(([key, value]) => ({ value: value, label: key }));
  const grauInstrucao = Object.entries(GrauInstrucao).map(([key, value]) => ({ value: key, label: value }));
  const periodicidadeTerapia = Object.entries(PeriodicidadeTerapia).map(([key, value]) => ({ value: key, label: value }));
  const diasTurnoTerapia = Object.entries(DiasTurnoTerapia).map(([key, value]) => ({ value: key, label: value }));
  const tipoTerapia = Object.entries(TipoTerapia).map(([key, value]) => ({ value: key, label: value }));
  const situacaoAtualInstituicao = Object.entries(SituacaoAtualInstituicao).map(([key, value]) => ({ value: key, label: value }));

  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validationRules = {
    dataAtendimento: { required: true },
  }

  const [dadosFormulario, setDadosFormulario] = useState({
    paciente: {},
    dataAtendimento: '',
    configuracaoFamiliar: '',
    descricaoConfiguracaoFamiliar: '',
    situacaoConjugalPais: '',
    presencaDosPais: '',
    tipoAcolhimento: '',
    abrigo: '',
    descricaoAbrigo: '',
    banheiro: '',
    dvd: '',
    automovel: '',
    microondas: '',
    lavaLoucas: '',
    motocicleta: '',
    freezer: '',
    secadoraRoupa: '',
    empregadosDomesticos: '',
    aguaEncanada: '',
    microcomputador: '',
    ruaPavimentada: '',
    geladeira: '',
    grauInstrucaoChefeFamilia: '',
    lavaRoupa: '',
    periodicidadeTerapia: '',
    descricaoPeriodicidadeTerapia: '',
    diasTurnoTerapia: '',
    tipoTerapia: '',
    situacaoAtualInstituicao: '',
    observacoes: ''
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
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
      enviarDadosServicoSocialPaciente(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarDadosServicoSocialPaciente(dadosFormulario) {
    const servicoSocial = new ServicoSocialBuilder().withDados(dadosFormulario)
      .withPaciente(pacienteEncontrado).build();
    console.log(servicoSocial);
    try {
      const resposta = await ServicoSocialService.create(servicoSocial);
      handleShowAlert(resposta != null ? "201" : "400");
    } catch (erro) {
      if (erro instanceof Promise) {
        erro = await erro;
      }
      console.error("Erro ao salvar servico social: ", erro.message || erro);
      throw new Error(`Erro ao salvar servico social: ${erro.message}`);
    }
  }
  return (
    <>
      <form>
        {message === "201" ? (
          <MessageAlert
            type="success"
            title="Cadastrado com sucesso!"
            message="Serviço social para o paciente foi cadastrado com sucesso."
          />

        ) : message === "400" ? (

          <MessageAlert
            type="error"
            title="Erro no cadastro"
            message="Houve um problema ao cadastrar serviço social do paciente."
          />

        ) : null}
        <AutoComplete onSelectPaciente={setPacienteEncontrado} />
        {/* Dados Serviço Social */}
        {pacienteEncontrado && (
          <FormGroup title="Dados Serviço Social" description="Cadastro de Dados Sociais do Paciente">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
              <FormField label="Prontuário" placeholder="N° do Prontuário" value={pacienteEncontrado?.descricaoProntuario || ""} />
              <FormField label="Nome Completo" placeholder="Nome Completo" value={pacienteEncontrado?.dsNome || ""} />
              <FormField label="Data de Nascimento" placeholder="00/00/0000" type="Date" value={pacienteEncontrado?.dataNascimento || ""} />
              <FormField name="dataAtendimento" label="Data do Atendimento" placeholder="00/00/0000" type="Date" styleClass="campoObrigatorio" onChange={onChange} error={errors.dataAtendimento} />
            </div>
          </FormGroup>
        )}
        {/* Situação Familiar */}
        <FormGroup title="Situação Familiar" description="Dados sobre a situação familiar do Paciente">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField name="configuracaoFamiliar" label="Configuração Familiar" isSelect options={configuracaoFamiliar}
              onChange={onChange} error={errors.configuracaoFamiliar} />
            <FormField name="descricaoConfiguracaoFamiliar" label="Descrição da Configuração Familiar" onChange={onChange}
              error={errors.descricaoConfiguracaoFamiliar}
            />
            <FormField name="situacaoConjugalPais" label="Situação Conjugal dos Pais" isSelect options={situacaoConjugalPais} onChange={onChange} error={errors.situacaoConjugalPais} />
            <FormField name="presencaDosPais" label="Presença dos Pais" isSelect options={presencaDosPais} onChange={onChange}
              error={errors.presencaDosPais} />
            <FormField name="tipoAcolhimento" label="Tipo de Acolhimento" isSelect options={tipoAcolhimento} onChange={onChange}
              error={errors.tipoAcolhimento} />
            <FormField name="abrigo" label="Abrigo" isSelect options={abrigos} onChange={onChange}
              error={errors.abrigo} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pt-4">
            <FormField name="descricaoAbrigo" label="Descrição do Abrigo" onChange={onChange}
              error={errors.descricaoAbrigo} />
          </div>
        </FormGroup>
        {/* ABEP - Classe Social */}
        <FormGroup title="ABEP - Classe Social">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-2" >
              <FormField isGrid name="banheiro" label="Banheiro" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.banheiro} />
              <FormField isGrid name="dvd" label="DVD" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.dvd} />
              <FormField isGrid name="automovel" label="Automóvel" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.automovel} />
              <FormField isGrid name="microondas" label="Micro-ondas" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.microondas} />
              <FormField isGrid name="lavaLoucas" label="Lava louças" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.lavaLoucas} />
              <FormField isGrid name="motocicleta" label="Motocicleta" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.motocicleta} />
              <FormField isGrid name="freezer" label="Freezer" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.freezer} />
              <FormField isGrid name="secadoraRoupa" label="Secadora roupa" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.secadoraRoupa} />
              <FormField isGrid name="empregadosDomesticos" label="Empregados domésticos" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.empregadosDomesticos} />
              <FormField isGrid name="aguaEncanada" label="Água encanada" isSelect options={opcaoSimOuNao} onChange={onChange}
                error={errors.aguaEncanada} />
              <FormField isGrid name="microcomputador" label="Microcomputador" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.microcomputador} />
              <FormField isGrid name="ruaPavimentada" label="Rua pavimentada" isSelect options={opcaoSimOuNao} onChange={onChange}
                error={errors.ruaPavimentada} />
              <FormField isGrid name="geladeira" label="Geladeira" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.geladeira} />
              <FormField isGrid name="lavaRoupa" label="Lava roupa" isSelect options={opcoesPadrao} onChange={onChange}
                error={errors.lavaRoupa} />
              <FormField isGrid name="grauInstrucaoChefeFamilia" label="Grau de Instrução do Chefe da Família" isSelect options={grauInstrucao} onChange={onChange}
                error={errors.grauInstrucaoChefeFamilia} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-2 sm:p-4 md:p-6 lg:p-8">
              <div className="border p-4 bg-white rounded-lg shadow-md ml-auto">
                <h2 className="text-lg font-semibold mb-2">Referência ABEP</h2>
                <p className="text-sm mb-4">Valores referente à somatória de pontos</p>
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-center">A1</td>
                      <td className="px-4 py-2 text-center">42-46</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">A2</td>
                      <td className="px-4 py-2 text-center">35-41</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">B1</td>
                      <td className="px-4 py-2 text-center">29-34</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">B2</td>
                      <td className="px-4 py-2 text-center">23-28</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">C1</td>
                      <td className="px-4 py-2 text-center">18-22</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">C2</td>
                      <td className="px-4 py-2 text-center">14-17</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">D</td>
                      <td className="px-4 py-2 text-center">8-13</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center">E</td>
                      <td className="px-4 py-2 text-center">0-7</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold">Resultado Calculado = 0</h3>
                </div>
              </div>
            </div>
          </div>
        </FormGroup>
        {/* Atendimentos */}
        <FormGroup title="Atendimentos" description="Dados sobre o atendimento do Paciente">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField name="periodicidadeTerapia" label="Periodicidade da Terapia" isSelect options={periodicidadeTerapia} onChange={onChange}
              error={errors.periodicidadeTerapia} />
            <FormField name="descricaoPeriodicidadeTerapia" label="Descrição da periodicidade da terapia" onChange={onChange}
              error={errors.descricaoPeriodicidadeTerapia} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols- gap-4 px-8 pt-4">
            <FormField name="diasTurnoTerapia" label="Dias/turno da terapia" isSelect options={diasTurnoTerapia} onChange={onChange}
              error={errors.diasTurnoTerapia} />
            <FormField name="tipoTerapia" label="Tipo de Terapia" isSelect options={tipoTerapia} onChange={onChange}
              error={errors.tipoTerapia} />
            <FormField name="situacaoAtualInstituicao" label="Situação atual na instituição" isSelect options={situacaoAtualInstituicao} onChange={onChange}
              error={errors.situacaoAtualInstituicao} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-8 pt-4">
            <FormField name="observacoes" label="Observações" onChange={onChange}
              error={errors.observacoes} />
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form >
    </>
  );
}
