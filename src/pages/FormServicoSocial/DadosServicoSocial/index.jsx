import React from 'react';
import { FormField } from '../../../components/FormField/FormField';
import { AutoComplete } from '../../../components/AutoComplete/AutoComplete';

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

            <AutoComplete />

            <form className="flex flex-row items-center justify-between px-8 mt-4">
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
            </form>
        </>
    );
}