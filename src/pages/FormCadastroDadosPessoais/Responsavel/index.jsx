import React from "react";
import { FormField } from "../../../components/FormField/FormField";

export function Responsavel() {

  const simOuNao = ["Sim", "Não"];
  const racaCor = ["Amarela", "Branca", "Indígena", "Parda", "Preta"];
  const estadoCivil = ["Casado(a)", "Divorciado(a)", "Solteiro(a)", "União estável", "Viúvo(a)", "Outros"];
  const ocupacao = ["Administrador(a)", "Advogado(a)", "Agente de viagens", "Agricultor(a)", "Analista de sistema", "Analista financeiro", "Arquiteto(a)", "Artista plástico", "Assistente administrativo", "Agente administrativo", "Assistente social", "Ator/Atriz", "Autônomo", "Bombeiro(a)", "Chef de cozinha", "Cientista de dados", "Consultor(a) de RH", "Contador(a)", "Dentista", "Designer", "Designer de moda", "Do lar", "Economista", "Eletricista", "Encanador(a)", "Enfermeiro(a)", "Engenheiro(a)", "Farmacêutico(a)", "Fisioterapeuta", "Geólogo", "Jornalista", "Juiz(a)/Promotor(a)", "Médico veterinário", "Médico(a)", "Motorista de ônibus ou caminhão", "Motorista por aplicativo", "Músico", "Nutricionista", "Oceonógrafo", "Pedreiro", "Pintor", "Policial", "Porteiro", "Professor(a)", "Programador(a) de computador", "Psicólogo(a)", "Psiquiatra", "Publicitário(a)", "Secretário(a)", "Servente", "Técnico(a) agrícola", "Técnico(a) em eletrônica", "Técnico(a) em enfermagem", "Técnico(a) em informática", "Técnico(a) em mecânica", "Técnico(a) em radiologia", "Técnico(a) em segurança do trabalho", "Terapeuta ocupacional", "Tradutor(a)/intérprete", "Veterinário(a)", "Outros", "SI"];
  const escolaridade = ["Analfabeto", "Ensino fundamental completo", "Ensino fundamental incompleto", "Ensino médio completo", "Ensino médio incompleto", "Ensino superior completo", "Ensino superior incompleto"];

  return (
    <>
      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Responsável
        </span>
      </div>
      <div className="flex mt-3">
        <span className="pl-8 font-bold text-sm">
          Cadastro de dados pessoais do responsável do Paciente
        </span>
      </div>
      <form>
        <div className="flex items-center mt-8 px-8">
          <span className="font-bold text-sm mr-10 w-full">
            <FormField label="Nome do Responsável" placeholder="Nome" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm mr-10">
            <FormField label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-[20%]" >
            <FormField label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} />
          </span>
        </div>
        <div className="flex items-center mt-8 px-8">
          <span className="font-bold text-sm mr-5 w-full">
            <FormField label="CPF" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm mr-5 w-full">
            <FormField label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} />
          </span>
          <span className="font-bold text-sm mr-5 w-full">
            <FormField label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} />
          </span>
          <span className="font-bold text-sm mr-5 w-full">
            <FormField label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Telefone 2" placeholder="Telefone" />
          </span>
        </div>
        <div className="flex items-center mt-8 px-8">
          <span className="font-bold text-sm mr-5 w-[40%]">
            <FormField label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} />
          </span>
          <span className="font-bold text-sm mr-5 w-[40%]">
            <FormField label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Descrição da ocupação" placeholder="Descrição" />
          </span>
        </div>
      </form>
    </>
  );
}
