import React from "react";
import { FormField } from "../../components/FormField/FormField.jsx";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import { Abrigos, ConfiguracaoFamiliar, DiasTurnoTerapia, GrauInstrucao, OpcoesPadrao, PeriodicidadeTerapia, PresencaDosPais, SituacaoAtualInstituicao, SituacaoConjugalPais, TipoAcolhimento, TipoTerapia } from "../../models/enum/EnunsServicosSocial.js";
import SimOuNao from "../../models/enum/SimNao.js";
import { useState } from "react";

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

  const [paciente, setPaciente] = useState(null);

  console.log(paciente);
  return (
    <>
      <form>
        <AutoComplete onSelectPaciente={setPaciente} />
          {/* Dados Serviço Social */}
          {paciente && (
          <FormGroup title="Dados Serviço Social" description="Cadastro de Dados Sociais do Paciente">
              <div className="flex flex-row items-center justify-between px-8 mt-4">
                <span className="font-bold text-sm mr-5">
                  <FormField label="Prontuário" placeholder="N° do Prontuário" value={paciente?.descricaoProntuario || ""} />
                </span>
                <span className="font-bold text-sm w-full mr-5 ">
                  <FormField label="Nome Completo" placeholder="Nome Completo" value={paciente?.dsNome || ""}/>
                </span>
                <span className="font-bold text-sm mr-5 ">
                  <FormField label="Data de Nascimento" placeholder="00/00/0000" type="Date" value={paciente?.dataNascimento || ""}/>
                </span>
                <span className="font-bold text-sm ">
                  <FormField label="Data do Atendimento" placeholder="00/00/0000" type="Date" styleClass="campoObrigatorio" />
                </span>
              </div>
          </FormGroup>
          )}
        {/* Situação Familiar */}
        <FormGroup title="Situação Familiar" description="Dados sobre a situação familiar do Paciente">
          <div className="space-y-4 px-8 py-6">
            <div className="flex-wrap justify-between gap-4">
              <div className="grid grid-cols-3 gap-4 mb-10">
                <FormField label="Configuração Familiar" isSelect options={configuracaoFamiliar} />
                <FormField label="Descrição da Configuração Familiar" />
                <FormField label="Situação Conjugal dos Pais" isSelect options={situacaoConjugalPais} />
                <FormField label="Presença dos Pais" isSelect options={presencaDosPais} />
                <FormField label="Tipo de Acolhimento" isSelect options={tipoAcolhimento} />
                <FormField label="Abrigo" isSelect options={abrigos} />
              </div>
              <FormField label="Descrição do Abrigo" />
            </div>
          </div>
        </FormGroup>
        {/* ABEP - Classe Social */}
        <FormGroup title="ABEP - Classe Social">
          <div className="mt-8 px-8 space-y-6">
            <div className="grid grid-cols-3">
              <div className="grid grid-cols-2 col-span-2">
                <FormField isGrid label="Banheiro" isSelect options={opcoesPadrao} />
                <FormField isGrid label="DVD" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Automóvel" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Micro-ondas" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Lava louças" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Motocicleta" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Freezer" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Secadora roupa" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Empregados domésticos" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Água encanada" isSelect options={opcaoSimOuNao} />
                <FormField isGrid label="Microcomputador" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Rua pavimentada" isSelect options={opcaoSimOuNao} />
                <FormField isGrid label="Geladeira" isSelect options={opcoesPadrao} />
                <FormField isGrid label="Grau de Instrução do Chefe da Família" isSelect options={grauInstrucao} />
                <FormField isGrid label="Lava roupa" isSelect options={opcoesPadrao} />
              </div>
              <div className="flex col-span-1">
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
          </div>
        </FormGroup>
        {/* Atendimentos */}
        <FormGroup title="Atendimentos" description="Dados sobre o atendimento do Paciente">
          <div className="space-y-4 px-8 py-6">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="w-full sm:w-[30%]">
                <FormField label="Periodicidade da Terapia" isSelect options={periodicidadeTerapia} />
              </div>
              <div className="w-full sm:w-[65%]">
                <FormField label="Descrição da periodicidade da terapia" />
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4">
              <div className="w-full sm:w-[30%]">
                <FormField label="Dias/turno da terapia" isSelect options={diasTurnoTerapia} />
              </div>
              <div className="w-full sm:w-[30%]">
                <FormField label="Tipo de Terapia" isSelect options={tipoTerapia} />
              </div>
              <div className="w-full sm:w-[30%]">
                <FormField label="Situação atual na instituição" isSelect options={situacaoAtualInstituicao} />
              </div>
            </div>

            <div className="w-full">
              <FormField label="Observações" />
            </div>
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4">
          <button
            type="button"
            className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
