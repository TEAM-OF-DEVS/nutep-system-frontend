
import React from 'react';

export function SituacaoFamiliar() {
    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    Situação Familiar
                </span>
            </div>

            <form className="flex flex-row items-center justify-between px-8 mt-4">
                <span className="font-bold text-sm">
                    Configuração Familiar
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Avós maternos">Avós maternos</option>
                            <option value="Avós paternos">Avós paternos</option>
                            <option value="Casal heteroafetivo">Casal heteroafetivo</option>
                            <option value="Casal homoafetivo">Casal homoafetivo</option>
                            <option value="Mãe solo">Mãe solo</option>
                            <option value="Pai solo">Pai solo</option>
                            <option value="Outros">Outros</option>
                            <option value="SI">SI</option>
                        </select>
                    </form>
                </span>
                <span className="font-bold text-sm">
                    Descrição da Configuração Familiar
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Descrição da Configuração Familiar"
                        />
                    </div>
                </span>
                <span className="font-bold text-sm">
                    Situação Conjugal dos Pais
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Casado">Casado (a)</option>
                            <option value="Divorciado">Divorciado (a)</option>
                            <option value="Solteiro">Solteiro (a)</option>
                            <option value="União estável">União estável</option>
                            <option value="Viúvo">Viúvo (a)</option>
                            <option value="Outros">Outros</option>
                            <option value="SI">SI</option>

                        </select>
                    </form>
                </span>
            </form>

            <form className="flex flex-row items-center justify-between px-8 mt-4">
                <span className="font-bold text-sm">
                    Presença dos Pais
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Mãe e Pai convivem com a criança">Mãe e Pai convivem com a criança</option>
                            <option value="Mãe convive com a criança e Pai ausente">Mãe convive com a criança e Pai ausente</option>
                            <option value="Pai convive com a criança e Mãe ausente">Pai convive com a criança e Mãe ausente</option>
                            <option value="Mãe e Pai ausentes">Mãe e Pai ausentes</option>
                            <option value="Mãe convive com a criança e Pai falecido">Mãe convive com a criança e Pai falecido</option>
                            <option value="Mãe ausente e Pai falecido">Mãe ausente e Pai falecido</option>
                            <option value="Pai convive com a criança e Mãe falecida">Pai convive com a criança e Mãe falecida</option>
                            <option value="Pai ausente e Mãe falecida">Pai ausente e Mãe falecida</option>
                            <option value="Mãe e Pai falecidos">Mãe e Pai falecidos</option>
                            <option value="SI">SI</option>
                        </select>
                    </form>
                </span>
                <span className="font-bold text-sm">
                    Tipo de Acolhimento
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                            <option selected>Selecione</option>
                            <option value="US">Criança Instotucionalizada</option>
                            <option value="US">Familia Acolhedora</option>
                            <option value="US">Criança adotada</option>
                        </select>
                    </form>
                </span>
                <span className="font-bold text-sm">
                    Abrigo
                    <form className="max-w-sm mx-auto">
                        <select
                            id="countries"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option selected>Selecione</option>
                            <option value="Abrigo Casa da Criança">Abrigo Casa da Criança</option>
                            <option value="Abrigo Nossa Casa">Abrigo Nossa Casa</option>
                            <option value="Abrigo Nova Vida">Abrigo Nova Vida</option>
                            <option value="Abrigo Recanto da Lu">Abrigo Recanto da Luz</option>
                            <option value="Abrigo Renascer">Abrigo Renascer</option>
                            <option value="Abrigo Santa Gianna Beretta Molla">Abrigo Santa Gianna Beretta Molla</option>
                            <option value="Abrigo São Lázaro">Abrigo São Lázaro</option>
                            <option value="Abrigo Tia JúliaUS">Abrigo Tia Júlia</option>
                            <option value="Acolhimento Casa da criança">Acolhimento Casa da criança</option>
                            <option value="Acolhimento Casa de Jeremias">Acolhimento Casa de Jeremias</option>
                            <option value="ADOC (Abrigo Des. Olívio Câmara)">ADOC (Abrigo Des. Olívio Câmara)</option>
                            <option value="Casa de Criança Escola-Creche">Casa de Criança Escola-Creche</option>
                            <option value="Casa do Menor São Miguel Arcanjo - Fortalez">Casa do Menor São Miguel Arcanjo - Fortaleza</option>
                            <option value="Casas Abrigo">Casas Abrigo</option>
                            <option value="Instituto Cristo Rei">Instituto Cristo Rei</option>
                            <option value="Instituto de Assistência e Proteção Socia">Instituto de Assistência e Proteção Social</option>
                            <option value="Instituto Orfanato Cristo Rei">Instituto Orfanato Cristo Rei</option>
                            <option value="Lar Amigos de Jesus">Lar Amigos de Jesus</option>
                            <option value="Lar Santa Mônica">Lar Santa Mônica</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </form>
                </span>
            </form>

            <form className="flex items-center mt-12 px-8">
                <span className="font-bold text-sm w-full">
                    Descrição do Abrigo
                    <div className="w-full max-w-sm min-w-[100%]">
                        <input
                            className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Descrição do Abrigo"
                        />
                    </div>
                </span>
            </form>

        </>
    );
}