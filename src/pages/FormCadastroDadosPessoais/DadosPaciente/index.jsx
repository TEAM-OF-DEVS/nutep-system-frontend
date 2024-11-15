import React from "react";
import { FormField } from "../../../components/FormField/FormField";

export function DadosPaciente() {

  const nacionalidade = ["Brasileiro", "Brasileiro naturalizado", "Estrangeiro"];
  const natualidade = ["Abaiara", "Acopiara", "Acarape", "Acarau", "Aiuaba", "Alenquer", "Alto Santo", "Altaneira", "Amaraji", "Amontada", "Antonina do Norte", "Apuiarés", "Aracati", "Ararendá", "Assaré", "Aurora", "Baixio", "Barbalha", "Barro", "Barroquinha", "Baturité", "Beberibe", "Bela Cruz", "Boa Viagem", "Brejo Santo", "Camocim", "Campos Sales", "Caririaçu", "Carnaubal", "Catarina", "Caucaia", "Cedro", "Chaval", "Choró", "Coreau", "Crateús", "Crato", "Croatá", "Deputado Irapuan Pinheiro", "Ererê", "Eusébio", "Farias Brito", "Fortaleza", "Frecheirinha", "Guaiúba", "Icó", "Icapuí", "Ibiapina", "Ibaretama", "Ipu", "Ipueiras", "Itaitinga", "Itapagé", "Itapipoca", "Itarema", "Itaitinga", "Jaguaretama", "Jaguaribe", "Jaguaruana", "Jardim", "Jati", "Jijoca de Jericoacoara", "Jucás", "Lavras da Mangabeira", "Limoeiro do Norte", "Maracanaú", "Maranguape", "Marco", "Massapê", "Mauriti", "Meruoca", "Milagres", "Milhã", "Miraíma", "Missão Velha", "Mombaça", "Monsenhor Tabosa", "Morada Nova", "Mucambo", "Mulungú", "Nova Olinda", "Nova Russas", "Novo Oriente", "Ocara", "Orós", "Pacajus", "Pacatuba", "Paracuru", "Paraipaba", "Parambu", "Pedra Branca", "Piquet Carneiro", "Poranga", "Quixadá", "Quixeramobim", "Quixeré", "Redenção", "Russas", "Santa Quitéria", "Santana do Cariri", "São Benedito", "São João do Jaguaribe", "São Luís do Curu", "São Mateus", "São Raimundo Nonato", "Senador Pompeu", "Solonópole", "Sobral", "Tauá", "Tejuçuoca", "Tianguá", "Umari", "Umirim", "Uruburetama", "Várzea Alegre", "Viçosa do Ceará"];
  const racaCor = ["Amarela", "Branca", "Indígena", "Parda", "Preta"];
  const tipoMoradia = ["Abrigo", "Alugada", "Cedida", "Própria", "Situação de rua"];
  const locaisAtendimento = ["Casa de Saúde Nossa Senhora das Graças", "Domicilio", "Hospital ana lima", "Hospital Distrital Gonzaga Mota - Gonzaguinha da Barra do Ceará", "Hospital Distrital Gonzaga Mota - Gonzaguinha da Messejana", "Hospital Distrital Gonzaga Mota - Gonzaguinha do José Walter", "Hospital Distrital Nossa Senhora da Conceição", "Hospital e Maternidade Zilda Arns", "Hospital Geral de Fortaleza (HGF)", "Hospital Geral Dr. César Cals", "Hospital Geral Manuel Assunção Pires", "Hospital São Camilo Cura D´ars", "Hospital Unimed", "MEAC - Maternidade Escola Assis Chateaubriand", "Via Pública", "Outro", "SI"];


  return (
    <>
      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Dados Paciente
        </span>
      </div>

      <div className="flex mt-3">
        <span className="pl-8 font-bold text-sm">
          Cadastro de dados pessoais do Paciente
        </span>
      </div>
      <form>
        <div className="flex mt-8 px-8">
          <FormField label="Data da Adimissão" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" />
          <span className="font-bold text-sm mx-5 ">
            <FormField label="Prontuário" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-full mr-10">
            <FormField label="Nome Completo" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm">
            <FormField label="Data de Nascimento" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" />
          </span>
        </div>
        <div className="flex mt-8 px-8">
          <span className="font-bold w-full text-sm mr-5">
            <FormField label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" />
          </span>
          <span className="font-bold w-full text-sm ml-5">
            <FormField label="Nacionalidade" styleClass="campoObrigatorio" isSelect options={nacionalidade} />
          </span>
          <span className="font-bold text-sm w-full ml-5">
            <FormField label="Naturalidade" styleClass="campoObrigatorio" isSelect options={natualidade} />
          </span>
          <span className="font-bold text-sm w-full ml-5">
            <FormField label="UF" styleClass="campoObrigatorio" isSelect options={["CE"]} />
          </span>
          <span className="font-bold text-sm w-full ml-5">
            <FormField label="Sexo" styleClass="campoObrigatorio" isSelect options={["Masculino", "Feminino"]} />
          </span>
          <span className="font-bold text-sm w-full ml-5">
            <FormField label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} />
          </span>
        </div>
        <div className="flex mt-8 px-8">
          <span className="font-bold text-sm w-full mr-10">
            <FormField label="Número do cartão SUS" styleClass="campoObrigatorio" placeholder="000.000.000-00" />
          </span>
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Local de Nascimento" styleClass="campoObrigatorio" isSelect options={locaisAtendimento} />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Descrição Local de Nascimento" styleClass="campoObrigatorio" />
          </span>
        </div >
        <div className="flex mt-8 px-8">
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="CEP" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Logradouro" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Número" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Complemento" styleClass="campoObrigatorio" />
          </span>
        </div>
        <div className="flex mt-8 px-8">
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Bairro" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Cidade" styleClass="campoObrigatorio" isSelect options={natualidade} />
          </span>
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Estado" isSelect options={["CE - Ceará"]} styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Tipo de moradia" isSelect options={tipoMoradia} />
          </span>
        </div>
      </form >
    </>
  );
}
