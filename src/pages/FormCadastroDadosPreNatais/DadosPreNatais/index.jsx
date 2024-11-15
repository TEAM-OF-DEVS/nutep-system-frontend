import React from "react";
import { AutoComplete } from "../../../components/AutoComplete/AutoComplete";
import { FormField } from "../../../components/FormField/FormField";

export function DadosPreNatais() {

  return (
    <>
      <AutoComplete />
      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Dados Pré-Natais
        </span>
      </div>

      <div className="flex mt-3">
        <span className="pl-8 font-bold text-sm">
          Cadastro de Dados Pré Natais do Paciente
        </span>
      </div>
      <form>
        <div className="flex mt-8 px-8">
          <span className="font-bold text-sm w-[40%] mr-10">
            <FormField label="Prontuário" />
          </span>
          <span className="font-bold text-sm w-full mr-10">
            <FormField label="Nome Completo" />
          </span>
          <span className="font-bold text-sm w-[40%] mr-10">
            <FormField label="Data de Nascimento" placeholder="dd/mm/aaaa" type="date" />
          </span>
          <span className="font-bold text-sm w-[40%] mr-10">
            <FormField label="Data do Atendimento" placeholder="dd/mm/aaaa" type="date" styleClass="campoObrigatorio" />
          </span>
        </div>
      </form>
    </>
  );
}
