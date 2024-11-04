import React from 'react';

export function ABEPClasseSocial() {
    // Itens para a coluna da esquerda
    const itensEsquerda = [
        'Banheiro',
        'Automóvel',
        'Lava louças',
        'Freezer',
        'Empregados domésticos',
        'Microcomputador',
        'Geladeira',
        'Lava roupa'
    ];

    // Itens para a coluna da direita
    const itensDireita = [
        'DVD',
        'Micro-ondas',
        'Motocicleta',
        'Secadora roupa'
    ];
    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    ABEP - Classe Social
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                    {itensEsquerda.map((item, index) => (
                        <div key={index} className="flex items-center space-x-6 p-2 rounded-md">
                            <span className="col-5 pl-5 font-bold">{item}:</span>
                            <form className="max-w-sm mx-auto pb-2 font-bold">

                                <select id="countries"
                                    className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                >
                                    <option selected>Selecione</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="+">+</option>
                                </select>
                            </form>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col space-y-2">
                    {itensDireita.map((item, index) => (
                        <div key={index} className="flex items-center p-2 rounded-md">
                            <span className="col-5 pl-5 font-bold">{item}:</span>
                            <form className="max-w-sm mx-auto pb-2 font-bold">

                                <select
                                    id="countries"
                                    className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                >
                                    <option selected>Selecione</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="+">+</option>
                                </select>
                            </form>

                        </div>
                    ))}
                    <div className="flex items-center p-2 rounded-md">
                        <span className="col-5 pl-5 font-bold">Água encanada</span>
                        <form className="max-w-sm mx-auto pb-2 font-bold">

                            <select
                                id="countries"
                                className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            >
                                <option selected>Selecione</option>
                                <option value="S">Não</option>
                                <option value="N">Sim</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex items-center p-2 rounded-md">
                        <span className="col-5 pl-5 font-bold">Rua pavimentada</span>
                        <form className="max-w-sm mx-auto pb-2 font-bold">

                            <select
                                id="countries"
                                className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            >
                                <option selected>Selecione</option>
                                <option value="S">Não</option>
                                <option value="N">Sim</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex items-center p-2 rounded-md">
                        <span className="col-5 pl-5 font-bold">Grau de Instrução do Chefe da Família</span>
                        <form className="max-w-sm mx-auto pb-2 font-bold">

                            <select
                                id="countries"
                                className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            >
                                <option selected>Selecione</option>
                                <option value="Analfabeto">Analfabeto</option>
                                <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                                <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                                <option value="Ensino médio completo">Ensino médio completo</option>
                                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                                <option value="Ensino superior completo">Ensino superior completo</option>
                                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}