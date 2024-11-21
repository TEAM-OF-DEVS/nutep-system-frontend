import React from "react";
import { Header } from "../../components/Header/index.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import Nacionalidade from "../../models/enum/Nacionalidade.js";
import Cidade from "../../models/enum/Cidade.js";
import RacaCor from "../../models/enum/RacaCor.js";
import TipoMoradia from "../../models/enum/TipoMoradia.js";
import EstadoCivil from "../../models/enum/EstadoCivil.js";
import Ocupacao from "../../models/enum/Ocupacao.js";
import Escolaridade from "../../models/enum/Escolaridade.js";
import Procedencia from "../../models/enum/Procedencia.js";
import Vinculo from "../../models/enum/Vinculo.js";
import LocalNascimento from "../../models/enum/LocalNascimento.js";

export function FormCadastroDadosPessoais() {

  const simOuNao = ["Sim", "Não"];
  const nacionalidade = Object.values(Nacionalidade);
  const naturalidade = Object.values(Cidade);
  const cidade = Object.values(Cidade);
  const racaCor = Object.values(RacaCor)
  const tipoMoradia = Object.values(TipoMoradia);
  const locaisDeNascimento = Object.values(LocalNascimento);
  const estadoCivil = Object.values(EstadoCivil);
  const ocupacao = Object.values(Ocupacao);
  const escolaridade = Object.values(Escolaridade);
  const vinculo = Object.values(Vinculo);
  const procedencias = Object.values(Procedencia);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    alert("Dados enviados com sucesso!");
    console.log("Enviando dados:");
  };

  return (
    <>
      <Header />

      {/* DADOS PACIENTE */}
      <form>
        <FormGroup title="Dados Paciente" description="Cadastro de dados pessoais do Paciente">
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm">
              <FormField name="dataAdmissao" label="Data da Adimissão" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mx-5 ">
              <FormField name="prontuario" label="Prontuário" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full mr-10">
              <FormField name="nomeCompleto" label="Nome Completo" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm">
              <FormField name="dataNascimento" label="Data de Nascimento" placeholder="00/00/0000" type="date" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold w-full text-sm mr-5">
              <FormField name="cpf" label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" onChange={onChange} />
            </span>
            <span className="font-bold w-full text-sm ml-5">
              <FormField name="nacionalidade" label="Nacionalidade" styleClass="campoObrigatorio" isSelect options={nacionalidade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="naturalidade" label="Naturalidade" styleClass="campoObrigatorio" isSelect options={naturalidade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="uf" label="UF" styleClass="campoObrigatorio" isSelect options={["CE"]} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="sexo" label="Sexo" styleClass="campoObrigatorio" isSelect options={["Masculino", "Feminino"]} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full ml-5">
              <FormField name="racaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} onChange={onChange} />
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm w-full mr-10">
              <FormField name="numeroCartaoSUS" label="Número do cartão SUS" styleClass="campoObrigatorio" placeholder="000 0000 0000 0000" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="localNascimento" label="Local de Nascimento" styleClass="campoObrigatorio" isSelect options={locaisDeNascimento} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="dsLocalDeNascimento" label="Descrição Local de Nascimento" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div >
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="cep" label="CEP" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="logradouro" label="Logradouro" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="numero" label="Número" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="complemento" label="Complemento" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div>
          <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="bairro" label="Bairro" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="cidade" label="Cidade" styleClass="campoObrigatorio" isSelect options={cidade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="estado" label="Estado" isSelect options={["CE - Ceará"]} styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="tipoMoradia" label="Tipo de moradia" isSelect options={tipoMoradia} onChange={onChange} />
            </span>
          </div>
        </FormGroup >
        {/* DADOS DOS PAIS */}

        <FormGroup title="Dados dos Pais" description="Cadastro de dados pessoais dos pais do Paciente">
          <div className="flex items-center mt-8 px-8 w-full">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="nomeMae" label="Nome da Mãe" placeholder="Nome" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField name="dataNascimento" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField name="responsavelPelaCrianca" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="cpf" label="CPF" styleClass="campoObrigatorio" placeholder="000.000.000-00" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="racaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="estadoCivil" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="escolaridade" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="ocupacao" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacao" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
            </span>
          </div>
          <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="nomeDoPai" label="Nome do Pai (Caso desconhecido, selecionar a opção ao lado)" placeholder="Nome"
                styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField name="nadaConsta" label="NC" type="checkbox" styleInput="w-6 h-6" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5" >
              <FormField name="dataNascimento" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]">
              <FormField name="responsavelPelaCrianca" label="Responsável pela criança" styleClass="campoObrigatorio" isSelect options={simOuNao} onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="cpf" label="CPF" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="racaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full" >
              <FormField name="estadoCivil" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[30%]">
              <FormField name="escolaridade" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5">
              <FormField name="ocupacao" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacao" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
            </span>
          </div>
        </FormGroup>

        {/* DADOS RESPONSAVEL*/}

        <FormGroup title="Responsável" description="Cadastro de dados pessoais do responsável do Paciente">
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-10 w-full">
              <FormField name="nomeResponsavel" label="Nome do Responsável" placeholder="Nome" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-10">
              <FormField name="dataNascimento" label="Data de Nascimento" type="date" placeholder="00/00/0000" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-[20%]" >
              <FormField name="vinculo" label="Vínculo" styleClass="campoObrigatorio" isSelect options={vinculo} onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8 w-full">
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoVinculo" label="Descrição do Vínculo" onChange={onChange} />
            </span>
          </div>

          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="cpf" label="CPF" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="racaCor" label="Raça/Cor" styleClass="campoObrigatorio" isSelect options={racaCor} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="estadoCivil" label="Estado Civil" styleClass="campoObrigatorio" isSelect options={estadoCivil} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-full">
              <FormField name="telefone1" label="Telefone 1" placeholder="Telefone" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="telefone2" label="Telefone 2" placeholder="Telefone" onChange={onChange} />
            </span>
          </div>
          <div className="flex items-center mt-8 px-8">
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField name="escolaridade" label="Escolaridade" styleClass="campoObrigatorio" isSelect options={escolaridade} onChange={onChange} />
            </span>
            <span className="font-bold text-sm mr-5 w-[40%]">
              <FormField name="ocupacao" label="Ocupação" styleClass="campoObrigatorio" isSelect options={ocupacao} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoOcupacao" label="Descrição da ocupação" placeholder="Descrição" onChange={onChange} />
            </span>
          </div>
        </FormGroup>

        {/* ENCAMINHAMENTO ORIGEM */}

        <FormGroup title="Encaminhamento de Origem">
          <div className="flex items-center mt-8 px-8 ">
            <span className="font-bold text-sm mr-10 w-[50%]">
              <FormField name="procedencia" label="Procedência" isSelect styleClass="campoObrigatorio" options={procedencias} onChange={onChange} />
            </span>
            <span className="font-bold text-sm w-full">
              <FormField name="descricaoProcedencia" label="Descrição da Procedência" placeholder="Descrição" styleClass="campoObrigatorio" onChange={onChange} />
            </span>
          </div>
        </FormGroup>

        <div className="flex items-end justify-end px-8 pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
