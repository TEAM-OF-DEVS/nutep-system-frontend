import React from "react";

export function Form() {
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
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </span>
        <span className="font-bold text-sm">
          Descrição da Configuração Familiar
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type here..."
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
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
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
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </span>
        <span className="font-bold text-sm">
          Tipo de Acolhimento
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
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
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
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
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
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

        <div className="flex flex-col">
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto pb-2">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
      </div>

      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">Atendimentos</span>
      </div>

      <div className="flex mt-2">
        <span className="pl-8 font-bold text-sm">
          Dados sobre o atendimento do Paciente
        </span>
      </div>

      <form className="flex flex-row justify-between pt-8 mt-4">
        <span className="font-bold text-sm px-8">
          Periodicidade da Terapia
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </span>

        <span className="font-bold text-sm w-[80%] pl-5 px-8">
          Descrição da periodicidade da terapia
          <div className="w-full">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Descrição"
            />
          </div>
        </span>
      </form>

      <form className="flex flex-row items-center justify-between px-8 mt-4">
        <span className="font-bold text-sm">
          Dias/turno da terapia
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="Monday">Segunda</option>
              <option value="Tuesday">Terça</option>
              <option value="Wednesday">Quarta</option>
              <option value="Thursday">Quinta</option>
              <option value="Friday">Sexta</option>
              <option value="Saturday">Sábado</option>
              <option value="Sunday">Domingo</option>
            </select>
          </form>
        </span>
        <span className="font-bold text-sm">
          Tipo de Terapia
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">Remoto</option>
              <option value="CA">Presencial</option>
            </select>
          </form>
        </span>

        <span className="font-bold text-sm">
          Situação atual na instituição
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              <option selected>Selecione</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </span>
      </form>

      <form className="flex items-center mt-12 px-8">
        <span className="font-bold text-sm w-full">
          Observações
          <div className="w-full ">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Descrição"
            />
          </div>
        </span>
      </form>


    <div className="flex items-end justify-end px-8 pt-4">

    
      <button
        type="button"
        className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Salvar
      </button>
      </div>
    </>
  );
}
