import React from "react";
import { Header } from "../../components/Header/index.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";

export function FormServicoSocial() {

  const configuracaoFamiliar = ["Avós maternos", "Avós paternos", "Casal heteroafetivo", "Casal homoafetivo", "Mãe solo", "Pai solo", "Outros", "SI"];
  const situacaoConjugalPais = ["Casado (a)", "Divorciado (a)", "Solteiro (a)", "União estável", "Viúvo (a)", "Outros", "SI"];
  const presencaDosPais = ["Mãe e Pai convivem com a criança", "Mãe convive com a criança e Pai ausente", "Pai convive com a criança e Mãe ausente", "Mãe e Pai ausentes", "Mãe convive com a criança e Pai falecido", "Mãe ausente e Pai falecido", "Pai convive com a criança e Mãe falecida", "Pai ausente e Mãe falecida", "Mãe e Pai falecidos", "SI"];
  const tipoAcolhimento = ["Criança Institucionalizada", "Família Acolhedora", "Criança adotada"];
  const abrigos = ["Abrigo Casa da Criança", "Abrigo Nossa Casa", "Abrigo Nova Vida", "Abrigo Recanto da Luz", "Abrigo Renascer", "Abrigo Santa Gianna Beretta Molla", "Abrigo São Lázaro", "Abrigo Tia Júlia", "Acolhimento Casa da Criança", "Acolhimento Casa de Jeremias", "ADOC (Abrigo Des. Olívio Câmara)", "Casa de Criança Escola-Creche", "Casa do Menor São Miguel Arcanjo - Fortaleza", "Casas Abrigo", "Instituto Cristo Rei", "Instituto de Assistência e Proteção Social", "Instituto Orfanato Cristo Rei", "Lar Amigos de Jesus", "Lar Santa Mônica", "Outro"];
  const opcoesPadrao = ["0", "1", "2", "3", "4", "+"];
  const opcaoSimOuNao = ["Sim", "Não"];
  const grauInstrucao = ["Analfabeto", "Ensino fundamental completo", "Ensino fundamental incompleto", "Ensino médio completo", "Ensino médio incompleto", "Ensino superior completo", "Ensino superior incompleto"];
  const periodicidadeTerapia = ["1 vez por semana", "2 vezes por semana", "3 vezes por semana", "Acompanhamento mensal", "Programa domiciliar", "Outros"];
  const diasTurnoTerapia = ["Segunda - Manhã", "Segunda - Tarde", "Segunda - Intermediário", "Terça - Manhã", "Terça - Tarde", "Terça - Intermediário", "Quarta - Manhã", "Quarta - Tarde", "Quarta - Intermediário", "Quinta - Manhã", "Quinta - Tarde", "Quinta - Intermediário", "Sexta - Manhã", "Sexta - Tarde", "Sexta - Intermediário"];
  const tipoTerapia = ["A.V.D.S", "Casa adaptada", "Comunicacao alternativa/suplementar", "Disfagia", "Estimulação auditiva", "Estimulação visual", "Fisioterapia", "Fisioterapia motora", "Fisioterapia respiratória", "Fonoaudiologia", "Fortalecimento", "Game", "Gestão de Comportamento", "Grupo de T21", "Habilidades Sociais", "Interdisciplinar", "Intermediário", "Motricidade", "Multiprofissional I e II", "Multiprofissional III", "Multiprofissional V", "Musicoterapia", "Outros", "Projeto quatro estações", "Psicologia", "Psicomotricidade", "Reabilitação auditiva", "Reabilitação de Fala e linguagem", "Reabilitação intelectual", "Robótica", "Seletividade Alimentar", "Terapia ocupacional", "Treinamento bimanual"];
  const situacaoAtualInstituicao = ["Ativo", "Afastado (a) por falta", "Afastado (a) por Internação", "Alta", "Alta por idade", "Atestado", "Cirurgia", "Desligado (a)", "Internado (a)", "Óbito", "Transferido para outra instituição"];



  return (
    <>
      <Header />
      <AutoComplete />
      <form>
        {/* Dados Serviço Social */}
        <FormGroup title="Dados Serviço Social" description="Cadastro de Dados Sociais do Paciente">
          <div className="flex flex-row items-center justify-between px-8 mt-4">
            <span className="font-bold text-sm mr-5">
              <FormField label="Prontuário" placeholder="N° do Prontuário" />
            </span>
            <span className="font-bold text-sm w-full mr-5 ">
              <FormField label="Nome Completo" placeholder="Nome Completo" />
            </span>
            <span className="font-bold text-sm mr-5 ">
              <FormField label="Data de Nascimento" placeholder="00/00/0000" type="Date" />
            </span>
            <span className="font-bold text-sm ">
              <FormField label="Data do Atendimento" placeholder="00/00/0000" type="Date" styleClass="campoObrigatorio" />
            </span>
          </div>
        </FormGroup>
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
