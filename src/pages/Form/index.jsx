import React from "react";

export const Form = () => {
  return (
    <>
      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Dados Serviço Social
        </span>
      </div>

      <div className="flex mt-3">
        <span className="pl-8 text-sm">
          Cadastro de Dados Sociais do Paciente
        </span>
      </div>

      <div className="flex mt-16">
        <span className="pl-8 font-bold text-xl">
          Identificação do Paciente
        </span>
      </div>

      <form className="flex flex-row items-center justify-between px-8 mt-4">
        <span className="font-bold text-sm">Nome Completo</span>
        <span className="font-bold text-sm">Prontuário</span>
        <span className="font-bold text-sm">Data de Nascimento</span>
        <span className="font-bold text-sm">Data do atendimento</span>
      </form>

      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Situação Familiar
        </span>
      </div>

      <form className="flex flex-row items-center justify-between px-8 mt-4">
        <span className="font-bold text-sm">Configuração Familiar</span>
        <span className="font-bold text-sm">
          Descrição da Configuração Familiar
        </span>
        <span className="font-bold text-sm">Situação Conjugal dos Pais</span>
      </form>

      <form className="flex flex-row items-center justify-between px-8 mt-4">
        <span className="font-bold text-sm">Presença dos Pais</span>
        <span className="font-bold text-sm pr-20">Tipo de Acolhimento</span>
        <span className="font-bold text-sm">Abrigo</span>
      </form>

      <form className="flex items-center mt-12 px-8">
        <span className="font-bold text-sm">Descrição do Abrigo</span>
      </form>

      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          ABEP - Classe Social
        </span>
      </div>

      <div className="flex flex-row gap-28 px-4 mt-4 mr-12">
        <div className="flex flex-col">
          <span>Banheiro</span>
          <span>Empregados domésticos</span>
          <span>Automóvel</span>
          <span>Microcomputador</span>
          <span>Lava louças</span>
          <span>Geladeira</span>
          <span>Freezer</span>
          <span>Lava roupa</span>
        </div>

        <div className="flex flex-col">
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
            <span>Cx de</span>
        </div>

        <div className="flex flex-col">
          <span>DVD</span>
          <span>Micro-ondas</span>
          <span>Motocicleta</span>
          <span>Secadora roupa</span>
          <span>Grau de Instrução do Chefe da Família</span>
          <span>Água encanada</span>
          <span>Rua pavimentada</span>
        </div>
      </div>


      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Atendimentos
        </span>
      </div>

      <div className="flex">
        <span className="pl-8 text-sm ">
          Cadastro de Dados Sociais do Paciente
        </span>
      </div>

     
    
      
      <form className="flex flex-row items-center justify-between px-8 mt-4">
        <span className="font-bold text-sm">Dias/turno da terapia</span>
        <span className="font-bold text-sm">Tipo de Terapia</span>
        <span className="font-bold text-sm">Situação atual na instituição</span>
      </form>

      <form className="flex items-center mt-12 px-8">
        <span className="font-bold text-sm">Observações</span>
      </form>
    </>
  );
};
