import { AutoComplete } from "../../components/AutoComplete/AutoComplete"
import { FormField } from "../../components/FormField/FormField"
import { FormGroup } from "../../components/FormGroup"
import { Header } from "../../components/Header"


export function FormCadastroDadosNeonatais() {

    const locaisDeNascimento = ["Casa de Saúde Nossa Senhora das Graças", "Domicilio", "Hospital ana lima", "Hospital Distrital Gonzaga Mota - Gonzaguinha da Barra do Ceará", "Hospital Distrital Gonzaga Mota - Gonzaguinha da Messejana", "Hospital Distrital Gonzaga Mota - Gonzaguinha do José Walter", "Hospital Distrital Nossa Senhora da Conceição", "Hospital e Maternidade Zilda Arns", "Hospital Geral de Fortaleza (HGF)", "Hospital Geral Dr. César Cals", "Hospital Geral Manuel Assunção Pires", "Hospital São Camilo Cura D´ars", "Hospital Unimed", "MEAC - Maternidade Escola Assis Chateaubriand", "Via Pública", "Outro", "SI"];
    const tiposDeParto = ["Cesária", "Fórceps", "Natural", "SI"];
    const apresentacao = ["Cefálica", "Córmica", "Pélvica", "Outro", "SI"];
    const tiposDeGestacao = ["Feto único", "Gemelaridade", "Outro", "SI"];

    return (
        <>
            <Header />
            <form>
                <FormGroup title="Dados Neonatais">
                    <AutoComplete />
                    <div className="flex flex-row items-center justify-between px-8 mt-4">
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
                    </div>
                </FormGroup>

                <FormGroup title="Dados Neonatais">
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Local de nascimento" isSelect options={locaisDeNascimento} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição do local de nascimento" />
                            </div>
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Tipo de parto" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição do Tipo de parto" />
                            </div>
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Apresentação" isSelect options={apresentacao} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição da Apresentação" />
                            </div>
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Tipo de gestação" isSelect options={tiposDeGestacao} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição do Tipo de gestação" />
                            </div>
                        </div>
                    </div>
                </FormGroup>

                <FormGroup title="Dados Antropométricos">
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Peso (g)" isSelect options={locaisDeNascimento} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Comprimento (cm)" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Perímetro Cefálico (cm)" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Perímetro Torácico (cm)" />
                            </div>
                            <div className="w-full sm:w-[32%]">
                                <FormField label="Apgar 1º Minuto" isSelect options={apresentacao} />
                            </div>
                            <div className="w-full sm:w-[32%]">
                                <FormField label="Apgar 5º Minuto" />
                            </div>
                            <div className="w-full sm:w-[32%]">
                                <FormField label="Apgar 10º Minuto" />
                            </div>
                        </div>
                        <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[49%]">
                                <FormField label="Intercorrências" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[49%]">
                                <FormField label="Descrição das Intercorrências" />
                            </div>
                            <div className="w-full sm:w-[49%]">
                                <FormField label="Malformações" isSelect options={apresentacao} />
                            </div>
                            <div className="w-full sm:w-[49%]">
                                <FormField label="Descrição das Malformações" />
                            </div>
                        </div>

                        <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Terapêutica Utilizada" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição da Terapêutica utilizada" />
                            </div>
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Antibióticos" isSelect options={apresentacao} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição do antibióticos" />
                            </div>
                        </div>
                    </div>
                </FormGroup>

                <FormGroup title="Cirurgia">
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Cirurgia realizada" isSelect options={locaisDeNascimento} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição em caso de Cirurgias" />
                            </div>
                        </div>
                    </div>
                </FormGroup>

                <FormGroup title="Tempo de Hospitalização">

                    <div className="mt-8 px-8 space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            <FormField isGrid label="UTI Neonatal (dias)" />
                            <FormField isGrid label="Unidade de Cuidados Intermediários Neonatais (dias)" />
                            <FormField isGrid label="Unidade de Cuidados Intermediários Canguru (dias)" />
                            <FormField isGrid label="Alojamento conjunto" />
                        </div>
                    </div>

                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[35%]">
                                <FormField label="Exames realizados" isSelect options={locaisDeNascimento} />
                            </div>
                            <div className="w-full sm:w-[63%]">
                                <FormField label="Descrição para exames realizados" />
                            </div>
                        </div>
                    </div>
                </FormGroup>

                <FormGroup title="Testes de Triagem Neonatal">
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste do Pezinho" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste do Ouvidinho" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste do Olhinho" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste do Coraçãozinho" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste da Linguinha" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Teste de Ortolani" isSelect options={tiposDeParto} />
                            </div>
                        </div>
                    </div>
                </FormGroup>

                <FormGroup title="Antecedentes Familiares">
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Doenças crônicas" isSelect options={tiposDeParto} />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Mãe" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Descrição" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Pai" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Irmãos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Descrição" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Avós paternos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Avós maternos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[65%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                    </div>
                    <hr className="h-1 mx-auto my-4  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                    <div className="space-y-4 px-8 py-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Doenças genéticas" isSelect options={tiposDeParto} />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Mãe" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Descrição" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Pai" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Irmãos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Descrição" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Avós paternos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Avós maternos" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Descrição" />
                            </div>
                            <div className="w-full sm:w-[20%]">
                                <FormField label="Tios de 1º grau" isSelect options={tiposDeParto} />
                            </div>
                            <div className="w-full sm:w-[30%]">
                                <FormField label="Descrição" />
                            </div>
                        </div>
                    </div>
                </FormGroup>
                <div className="flex items-end justify-end px-8 pt-4 mb-10">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </>
    )
};