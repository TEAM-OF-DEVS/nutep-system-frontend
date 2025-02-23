import { useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete"
import { FormField } from "../../components/FormField/FormField"
import { FormGroup } from "../../components/FormGroup"
import Antibiotico from "../../models/enum/Antibiotico";
import DoencaCronica from "../../models/enum/DoencaCronica";
import DoencaGenetica from "../../models/enum/DoencaGenetica";
import Intercorrencia from "../../models/enum/Intercorrencia";
import LocalNascimento from "../../models/enum/LocalNascimento";
import Malformacao from "../../models/enum/MalFormacao";
import Terapeutica from "../../models/enum/Terapeutica";


export function FormCadastroDadosNeonatais() {

    const locaisDeNascimento = Object.values(LocalNascimento);

    const doencasCronicas = Object.values(DoencaCronica);
    const doencasGeneticas = Object.values(DoencaGenetica);
    const antibioticos = Object.values(Antibiotico);
    const terapeuticaUtilizada = Object.values(Terapeutica);
    const malformacoes = Object.values(Malformacao);
    const intercorrencias = Object.values(Intercorrencia);

    const resultadoTeste = ["Alterado", "Normal", "Não realizado", "SI"];
    const examesRealizados = ["Ecocardiograma", "RNM cerebral", "TC crânio", "US abdominal", "USTF", "Outros", "SI"];
    const opcaoSimOuNaoOuSi = ["Sim", "Não", "SI"];
    const tiposDeParto = ["Cesária", "Fórceps", "Natural", "SI"];
    const apresentacao = ["Cefálica", "Córmica", "Pélvica", "Outro", "SI"];
    const tiposDeGestacao = ["Feto único", "Gemelaridade", "Outro", "SI"];

    const [paciente, setPaciente] = useState(null);

    return (
        <>
            <form>
                <AutoComplete onSelectPaciente={setPaciente} />
                {paciente && (
                    <FormGroup title="Dados Serviço Social" description="Cadastro de Dados Sociais do Paciente">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
                            <FormField label="Prontuário" placeholder="N° do Prontuário" value={paciente?.descricaoProntuario || ""} />

                            <FormField label="Nome Completo" placeholder="Nome Completo" value={paciente?.dsNome || ""} />

                            <FormField label="Data de Nascimento" placeholder="00/00/0000" type="Date" value={paciente?.dataNascimento || ""} />

                            <FormField label="Data do Atendimento" placeholder="00/00/0000" type="Date" styleClass="campoObrigatorio" />
                        </div>
                    </FormGroup>
                )}

                <FormGroup title="Dados Neonatais">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Local de nascimento" isSelect options={locaisDeNascimento} />
                        <FormField label="Descrição do local de nascimento" />
                        <FormField label="Tipo de parto" isSelect options={tiposDeParto} />
                        <FormField label="Descrição do Tipo de parto" />
                        <FormField label="Apresentação" isSelect options={apresentacao} />
                        <FormField label="Descrição da Apresentação" />
                        <FormField label="Tipo de gestação" isSelect options={tiposDeGestacao} />
                        <FormField label="Descrição do Tipo de gestação" />
                    </div>
                </FormGroup>

                <FormGroup title="Dados Antropométricos">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
                        <FormField label="Peso (g)" />
                        <FormField label="Comprimento (cm)" />
                        <FormField label="Perímetro Cefálico (cm)" />
                        <FormField label="Perímetro Torácico (cm)" />
                        <FormField label="Apgar 1º Minuto" />
                        <FormField label="Apgar 5º Minuto" />
                        <FormField label="Apgar 10º Minuto" />
                    </div>
                    <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Intercorrências" isSelect options={intercorrencias} />
                        <FormField label="Descrição das Intercorrências" />
                        <FormField label="Malformações" isSelect options={malformacoes} />
                        <FormField label="Descrição das Malformações" />
                    </div>
                    <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Terapêutica Utilizada" isSelect options={terapeuticaUtilizada} />
                        <FormField label="Descrição da Terapêutica utilizada" />
                        <FormField label="Antibióticos" isSelect options={antibioticos} />
                        <FormField label="Descrição do antibióticos" />
                    </div>
                </FormGroup>

                <FormGroup title="Cirurgia">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Cirurgia realizada" isSelect options={opcaoSimOuNaoOuSi} />
                        <FormField label="Descrição em caso de Cirurgias" />
                    </div>
                </FormGroup>

                <FormGroup title="Tempo de Hospitalização">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField isGrid label="UTI Neonatal (dias)" />
                        <FormField isGrid label="Unidade de Cuidados Intermediários Neonatais (dias)" />
                        <FormField isGrid label="Unidade de Cuidados Intermediários Canguru (dias)" />
                        <FormField isGrid label="Alojamento conjunto" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Exames realizados" isSelect options={examesRealizados} />
                        <FormField label="Descrição para exames realizados" />
                    </div>
                </FormGroup>

                <FormGroup title="Testes de Triagem Neonatal">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
                        <FormField label="Teste do Pezinho" isSelect options={resultadoTeste} />
                        <FormField label="Teste do Ouvidinho" isSelect options={resultadoTeste} />
                        <FormField label="Teste do Olhinho" isSelect options={resultadoTeste} />
                        <FormField label="Teste do Coraçãozinho" isSelect options={resultadoTeste} />
                        <FormField label="Teste da Linguinha" isSelect options={resultadoTeste} />
                        <FormField label="Teste de Ortolani" isSelect options={resultadoTeste} />
                    </div>
                </FormGroup>

                <FormGroup title="Antecedentes Familiares">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Doenças crônicas" isSelect options={opcaoSimOuNaoOuSi} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
                        <FormField label="Mãe" isSelect options={doencasCronicas} />
                        <FormField label="Descrição" />
                        <FormField label="Pai" isSelect options={doencasCronicas} />
                        <FormField label="Descrição" />
                        <FormField label="Irmãos" isSelect options={doencasCronicas} />
                        <FormField label="Descrição" />
                        <FormField label="Avós paternos" isSelect options={doencasCronicas} />
                        <FormField label="Descrição" />
                        <FormField label="Avós maternos" isSelect options={doencasCronicas} />
                        <FormField label="Descrição" />
                    </div>
                    <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                        <FormField label="Doenças genéticas" isSelect options={opcaoSimOuNaoOuSi} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
                        <FormField label="Mãe" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                        <FormField label="Pai" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                        <FormField label="Irmãos" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                        <FormField label="Avós paternos" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                        <FormField label="Avós maternos" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                        <FormField label="Tios de 1º grau" isSelect options={doencasGeneticas} />
                        <FormField label="Descrição" />
                    </div>
                </FormGroup>
                <div className="flex items-end justify-end px-8 pt-4 mb-10">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Salvar
                    </button>
                </div>
            </form >
        </>
    )
};