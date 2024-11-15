import React from 'react';
import { FormField } from '../../../components/FormField/FormField';

const periodicidadeTerapia = ["1 vez por semana", "2 vezes por semana", "3 vezes por semana", "Acompanhamento mensal", "Programa domiciliar", "Outros"];
const diasTurnoTerapia = ["Segunda - Manhã", "Segunda - Tarde", "Segunda - Intermediário", "Terça - Manhã", "Terça - Tarde", "Terça - Intermediário", "Quarta - Manhã", "Quarta - Tarde", "Quarta - Intermediário", "Quinta - Manhã", "Quinta - Tarde", "Quinta - Intermediário", "Sexta - Manhã", "Sexta - Tarde", "Sexta - Intermediário"];
const tipoTerapia = ["A.V.D.S", "Casa adaptada", "Comunicacao alternativa/suplementar", "Disfagia", "Estimulação auditiva", "Estimulação visual", "Fisioterapia", "Fisioterapia motora", "Fisioterapia respiratória", "Fonoaudiologia", "Fortalecimento", "Game", "Gestão de Comportamento", "Grupo de T21", "Habilidades Sociais", "Interdisciplinar", "Intermediário", "Motricidade", "Multiprofissional I e II", "Multiprofissional III", "Multiprofissional V", "Musicoterapia", "Outros", "Projeto quatro estações", "Psicologia", "Psicomotricidade", "Reabilitação auditiva", "Reabilitação de Fala e linguagem", "Reabilitação intelectual", "Robótica", "Seletividade Alimentar", "Terapia ocupacional", "Treinamento bimanual"];
const situacaoAtualInstituicao = ["Ativo", "Afastado (a) por falta", "Afastado (a) por Internação", "Alta", "Alta por idade", "Atestado", "Cirurgia", "Desligado (a)", "Internado (a)", "Óbito", "Transferido para outra instituição"];

export function Atendimento() {
    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">Atendimentos</span>
            </div>

            <div className="flex mt-2">
                <span className="pl-8 font-bold text-sm">
                    Dados sobre o atendimento do Paciente
                </span>
            </div>
            <form className="space-y-4 px-8 py-6">
                <div className="flex flex-wrap justify-between gap-4">
                    <div className="w-full sm:w-[30%]">
                        <FormField label="Periodicidade da Terapia" isSelect options={periodicidadeTerapia} />
                    </div>
                    <div className="w-full sm:w-[65%]">
                        <FormField label="Descrição da periodicidade da terapia"/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between gap-4">
                    <div className="w-full sm:w-[30%]">
                        <FormField label="Dias/turno da terapia" isSelect options={diasTurnoTerapia}/>
                    </div>
                    <div className="w-full sm:w-[30%]">
                        <FormField label="Tipo de Terapia" isSelect options={tipoTerapia}/>
                    </div>
                    <div className="w-full sm:w-[30%]">
                        <FormField label="Situação atual na instituição" isSelect options={situacaoAtualInstituicao}/>
                    </div>
                </div>

                <div className="w-full">
                    <FormField label="Observações"/>
                </div>
            </form>
        </>
    );
}