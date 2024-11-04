import React from 'react';

export function DadosServicoSocial() {
    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    Dados Serviço Social
                </span>
            </div>

            <div className="flex mt-3">
                <span className="pl-8 font-bold text-sm">
                    Cadastro de Dados Sociais do Paciente
                </span>
            </div>

            <div className="flex mt-16">
                <span className="pl-8 font-bold text-xl">
                    Identificação do Paciente
                </span>
            </div>

            <form className="flex flex-row items-center justify-between px-8 mt-4">
                <span className="font-bold text-sm">
                    Prontuário
                    <div className="w-full max-w-sm min-w-[80px]">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="N° do Prontuário"
                        />
                    </div>
                </span>

                <span className="font-bold text-sm">
                    Nome Completo
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Nome Completo"
                        />
                    </div>
                </span>
                <span className="font-bold text-sm">
                    Data de Nascimento
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input
                            type="date"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="00/00/0000"
                        />
                    </div>
                </span>

                <span className="font-bold text-sm">
                    Data do atendimento
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input
                            type="date"
                            className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="00/00/0000"
                        />
                    </div>
                </span>
            </form>
        </>
    );
}