import React from 'react';

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

            <form className="flex flex-row justify-between pt-8 mt-4">
                <span className="font-bold text-sm px-4">
                    Periodicidade da Terapia
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="1 vez por semana">1 vez por semana</option>
                            <option value="2 vezes por semana">2 vezes por semana</option>
                            <option value="3 vezes por semana">3 vezes por semana</option>
                            <option value="Acompanhamento mensal">Acompanhamento mensal</option>
                            <option value="Programa domiciliar">Programa domiciliar</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </form>
                </span>

                <span className="font-bold text-sm w-[80%] pl-5 px-8">
                    Descrição da periodicidade da terapia
                    <div className="w-full">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Descrição"
                        />
                    </div>
                </span>
            </form>

            <form className="flex flex-row items-center justify-between px-8 mt-4">
                <span className="font-bold text-sm">
                    Dias/turno da terapia
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Segunda - Manhã">Segunda - Manhã</option>
                            <option value="Segunda - Tarde">Segunda - Tarde</option>
                            <option value="Segunda - Intermediário">Segunda - Intermediário</option>
                            <option value="Terça - Manhã">Terça - Manhã</option>
                            <option value="Terça - Tarde">Terça - Tarde</option>
                            <option value="Terça - Intermediário">Terça - Intermediário</option>
                            <option value="Quarta - Manhã">Quarta - Manhã</option>
                            <option value="Quarta - Tarde">Quarta - Tarde</option>
                            <option value="Quarta - Intermediário">Quarta - Intermediário</option>
                            <option value="Quinta - Manhã">Quinta - Manhã</option>
                            <option value="Quinta - Tarde">Quinta - Tarde</option>
                            <option value="Quinta - Intermediário">Quinta - Intermediário</option>
                            <option value="Sexta - Manhã">Sexta - Manhã</option>
                            <option value="Sexta - Tarde">Sexta - Tarde</option>
                            <option value="Sexta - Intermediário">Sexta - Intermediário</option>
                            <option value="Sunday">Domingo</option>
                        </select>
                    </form>
                </span>
                <span className="font-bold text-sm">
                    Tipo de Terapia
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="A.V.D.S">A.V.D.S</option>
                            <option value="Casa adaptada">Casa adaptada</option>
                            <option value="Comunicacao alternativa/suplementar">Comunicação alternativa/suplementar</option>
                            <option value="Disfagia">Disfagia</option>
                            <option value="Estimulação auditiva">Estimulação auditiva</option>
                            <option value="Estimulação visual">Estimulação visual</option>
                            <option value="Fisioterapia">Fisioterapia</option>
                            <option value="Fisioterapia motora">Fisioterapia motora</option>
                            <option value="Fisioterapia respiratória">Fisioterapia respiratória</option>
                            <option value="Fonoaudiologia">Fonoaudiologia</option>
                            <option value="Fortalecimento">Fortalecimento</option>
                            <option value="Game">Game</option>
                            <option value="Gestão de Comportamento">Gestão de Comportamento</option>
                            <option value="Grupo de T21">Grupo de T21</option>
                            <option value="Habilidades Sociais">Habilidades Sociais</option>
                            <option value="Interdisciplinar">Interdisciplinar</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Motricidade">Motricidade</option>
                            <option value="Multiprofissional I e II">Multiprofissional I e II</option>
                            <option value="Multiprofissional III">Multiprofissional III</option>
                            <option value="Multiprofissional V">Multiprofissional V</option>
                            <option value="Musicoterapia">Musicoterapia</option>
                            <option value="Outros">Outros</option>
                            <option value="Projeto quatro estações">Projeto quatro estações</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Psicomotricidade">Psicomotricidade</option>
                            <option value="Reabilitação auditiva">Reabilitação auditiva</option>
                            <option value="Reabilitação de Fala e linguagem">Reabilitação de Fala e linguagem</option>
                            <option value="Reabilitação intelectual">Reabilitação intelectual</option>
                            <option value="Robótica">Robótica</option>
                            <option value="Seletividade Alimentar">Seletividade Alimentar</option>
                            <option value="Terapia ocupacional">Terapia ocupacional</option>
                            <option value="Treinamento bimanual">Treinamento bimanual</option>
                        </select>
                    </form>
                </span>

                <span className="font-bold text-sm">
                    Situação atual na instituição
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Afastado (a) por falta">Afastado (a) por falta</option>
                            <option value="Afastado (a) por Internação">Afastado (a) por Internação</option>
                            <option value="Alta">Alta</option>
                            <option value="Alta por idade">Alta por idade</option>
                            <option value="Alta por idade">Alta por idade</option>
                            <option value="Atestado">Atestado</option>
                            <option value="Cirurgia">Cirurgia</option>
                            <option value="Desligado (a)">Desligado (a)</option>
                            <option value="Internado (a)">Internado (a)</option>
                            <option value="Óbito">Óbito</option>
                            <option value="Transferido para outra instituição">Transferido para outra instituição</option>
                        </select>
                    </form>
                </span>
            </form>

            <form className="flex items-center mt-12 px-8">
                <span className="font-bold text-sm w-full">
                    Observações
                    <div className="w-full ">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Descrição"
                        />
                    </div>
                </span>
            </form>
        </>
    );
}