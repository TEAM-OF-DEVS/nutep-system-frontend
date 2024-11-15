import React from 'react';

export const AutoComplete = ({}) => (
    <form>
        <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10">
                <text>Prontuário</text>
                <div className="w-full max-w-sm">
                    <input
                        className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Prontuário"
                    />
                </div>
            </span>
            <span className="font-bold text-sm mr-10">
                <text>Nome</text>
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
    </form>
);
