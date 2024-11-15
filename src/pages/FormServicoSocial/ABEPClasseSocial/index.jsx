import React from 'react';
import { FormField } from '../../../components/FormField/FormField';

export function ABEPClasseSocial() {
    const opcoesPadrao = ["0", "1", "2", "3", "4", "+"];
    const opcaoSimOuNao = ["Sim", "Não"];
    const grauInstrucao = ["Analfabeto", "Ensino fundamental completo", "Ensino fundamental incompleto", "Ensino médio completo", "Ensino médio incompleto", "Ensino superior completo", "Ensino superior incompleto"];

    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    ABEP - Classe Social
                </span>
            </div>
            <form>
                <div className="mt-8 px-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField isGrid label="Banheiro" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="DVD" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Automóvel" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Micro-ondas" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Lava louças" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Motocicleta" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Freezer" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Secadora roupa" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Empregados domésticos" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Água encanada" isSelect options={opcaoSimOuNao} />
                        <FormField isGrid label="Microcomputador" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Rua pavimentada" isSelect options={opcaoSimOuNao} />
                        <FormField isGrid label="Geladeira" isSelect options={opcoesPadrao} />
                        <FormField isGrid label="Grau de Instrução do Chefe da Família" isSelect options={grauInstrucao} />
                        <FormField isGrid label="Lava roupa" isSelect options={opcoesPadrao} />
                    </div>
                </div>
            </form>
        </>
    );
}