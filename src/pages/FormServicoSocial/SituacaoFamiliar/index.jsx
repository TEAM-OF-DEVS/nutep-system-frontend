import React from 'react';
import { FormField } from '../../../components/FormField/FormField';

const configuracaoFamiliar = ["Avós maternos", "Avós paternos", "Casal heteroafetivo", "Casal homoafetivo", "Mãe solo", "Pai solo", "Outros", "SI"];
const situacaoConjugalPais = ["Casado (a)", "Divorciado (a)", "Solteiro (a)", "União estável", "Viúvo (a)", "Outros", "SI"];
const presencaDosPais = ["Mãe e Pai convivem com a criança", "Mãe convive com a criança e Pai ausente", "Pai convive com a criança e Mãe ausente", "Mãe e Pai ausentes", "Mãe convive com a criança e Pai falecido", "Mãe ausente e Pai falecido", "Pai convive com a criança e Mãe falecida", "Pai ausente e Mãe falecida", "Mãe e Pai falecidos", "SI"];
const tipoAcolhimento = ["Criança Institucionalizada", "Família Acolhedora", "Criança adotada"];
const abrigos = ["Abrigo Casa da Criança", "Abrigo Nossa Casa", "Abrigo Nova Vida", "Abrigo Recanto da Luz", "Abrigo Renascer", "Abrigo Santa Gianna Beretta Molla", "Abrigo São Lázaro", "Abrigo Tia Júlia", "Acolhimento Casa da Criança", "Acolhimento Casa de Jeremias", "ADOC (Abrigo Des. Olívio Câmara)", "Casa de Criança Escola-Creche", "Casa do Menor São Miguel Arcanjo - Fortaleza", "Casas Abrigo", "Instituto Cristo Rei", "Instituto de Assistência e Proteção Social", "Instituto Orfanato Cristo Rei", "Lar Amigos de Jesus", "Lar Santa Mônica", "Outro"];

export function SituacaoFamiliar() {
    return (
        <>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    Situação Familiar
                </span>
            </div>
            <div className="flex mt-2">
                <span className="pl-8 font-bold text-sm">
                    Dados sobre a situação familiar do Paciente
                </span>
            </div>
            <form className="space-y-4 px-8 py-6">
                <div className="flex-wrap justify-between gap-4">
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        <FormField label="Configuração Familiar" isSelect options={configuracaoFamiliar} />
                        <FormField label="Descrição da Configuração Familiar" />
                        <FormField label="Situação Conjugal dos Pais" isSelect options={situacaoConjugalPais} />

                        <FormField label="Presença dos Pais" isSelect options={presencaDosPais} />
                        <FormField label="Tipo de Acolhimento" isSelect options={tipoAcolhimento} />
                        <FormField label="Abrigo" isSelect options={abrigos} />

                    </div>
                    <FormField label="Descrição do Abrigo" />
                </div>
            </form>
        </>
    );
}