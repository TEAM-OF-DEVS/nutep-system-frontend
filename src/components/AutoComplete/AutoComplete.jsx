import React from 'react';

export const AutoComplete = ({ }) => (
    <div>
        <div className="flex mt-4">
            <span className="pl-8 font-bold text-xl">
                Identificação do Paciente
            </span>
        </div>
        <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10">
                <label>Prontuário</label>
                <div className="w-full max-w-sm">
                    <input
                        className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Prontuário"
                    />
                </div>
            </span>
            <span className="font-bold text-sm mr-10">
                <label>Nome</label>
                <div className="w-full max-w-sm">
                    <input
                        className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Nome"
                    />
                </div>
            </span>
            <span className="font-bold text-sm mt-3">
                <div className="w-full max-w-sm">
                    <button
                        type="button"
                        className="focus:outline-none text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 font-bold rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
                    >
                        Pesquisar
                    </button>
                </div>
            </span>
        </div>
        <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </div>
);
