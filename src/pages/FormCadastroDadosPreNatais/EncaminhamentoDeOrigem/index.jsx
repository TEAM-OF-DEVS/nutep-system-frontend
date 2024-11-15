import React from "react";
import { FormField } from "../../../components/FormField/FormField";

export function EncaminhamentoDeOrigem() {
  const procedencias = ["Nutep", "Meac - Maternidade Escola Assis Chateaubriand", "NAMI - Núcleo de Atenção Médica Integrada", "UAPS ABNER CAVALCANTE", "UAPS AINDA SANTOS E SILVA", "UAPS ALARICO LEITE", "UAPS BENEDITO ARTUR DE CARVALHO", "UAPS CARLOS RIBEIRO", "UAPS CASEMIRO LIMA FILHO", "UAPS CELIO BRASIL GIRÃO", "UAPS CLODOALDO PINTO", "UAPS CMES MONTEIRO DE MORAES – INSTITUTO VIDA VIDEIRA", "UAPS CMES PROF. MATOS DOURADO", "UAPS CSU CÉSAR CALS", "UAPS DO SIQUEIRA", "UAPS DOM ALMEIDA LUSTOSA", "UAPS DR PONTES NETO", "UAPS DR. PAULO DE MELO MACHADO", "UAPS DR. ROBERTO DA SILVA BRUNO", "UAPS EDILMAR NORÕES", "UAPS EDMAR FUJITA", "UAPS EDMILSON PINHEIRO", "UAPS FCº DOMINGOS DA SILVA", "UAPS FERNANDO FAÇANHA", "UAPS FLÁVIO MARCÍLIO", "UAPS FLORESTA", "UAPS FRANCISCO MONTEIRO", "UAPS FRANCISCO PEREIRA DE ALMEIDA", "UAPS GALBA DE ARAÚJO", "UAPS GEORGE BENEVIDES", "UAPS GOTHARDO PEIXOTO", "UAPS GRACILIANO MUNIZ", "UAPS GRASIELA ANEXO", "UAPS GUIOMAR ARRUDA", "UAPS HÉLIO GÓES FERREIRA 3273-1378", "UAPS HERMÍNIA LEITÃO", "UAPS HUMBERTO BEZERRA", "UAPS IRMÃ HERCÍLIA", "UAPS IVANA DE SOUSA PAES", "UAPS JANIVAL VIEIRA DE ALMEIDA", "UAPS JOÃO ELISIO HOLANDA", "UAPS JOÃO MEDEIROS DE LIMA", "UAPS JOSÉ PARACAMPOS", "UAPS JOSÉ VALDEVINO DE CARVALHO", "UAPS JOSÉ WALTER", "UAPS JURANDIR PICANÇO", "UAPS LICÍNIO NUNES DE MIRANDA", "UAPS LINEU JUCÁ", "UAPS LUCIANO TORRES DE MELO", "UAPS LUIS FRANKLIN", "UAPS LUIS RECAMONDE CAMPELO", "UAPS LUIZA TÁVORA", "UAPS MACIEL DE BRITO", "UAPS MARCUS AURÉLIO RABELO", "UAPS MARIA APARECIDA", "UAPS MARIA GRAZIELA", "UAPS MARIUSA SILVA DE SOUSA", "UAPS MELO JABORANDI", "UAPS METON DE ALENCAR", "UAPS MIRIAM PORTO MOTA", "UAPS ODORICO DE MORAIS", "UAPS OSMAR VIANA", "UAPS OTONI CARDOSO DO VALE", "UAPS PARQUE SÃO JOSÉ", "UAPS PAULA PESSOA", "UAPS PEDRO CELESTINO", "UAPS PIO XII", "UAPS POMPEU VASCONCELOS", "UAPS PROF. REBOUÇAS MACAMBIRA", "UAPS REGINA MARIA DA SILVA SEVERINO", "UAPS RIGOBERTO ROMERO", "UAPS SANDRA NOGUEIRA", "UAPS SÍTIO SÃO JOÃO", "UAPS TURBAY BARREIRA", "UAPS VICENTINA CAMPOS", "UAPS VIRGÍLIO TÁVORA", "UAPS VIVIANE BENEVIDES", "UAPS WALDEMAR DE ALCÂNTARA", "UAPS WALDO PESSOA", "UAPS ZÉLIA CORREIA", "Outros", "SI"];
  const convenio = ["Hapvida", "IPM", "ISSEC", "Sus", "Unimed", "Outros", "SI"];

  return (
    <>
      <div className="bg-green-200 mt-4">
        <span className=" text-green-800 pl-8 font-bold">
          Encaminhamento de Origem
        </span>
      </div>
      <form>
        <div className="flex mt-8 px-8">
          <span className="font-bold text-sm w-[40%] mr-10">
            <FormField label="Procedência" isSelect styleClass="campoObrigatorio" options={procedencias} />
          </span>
          <span className="font-bold text-sm w-full mr-10">
            <FormField label="Descrição da Procedência" placeholder="Descrição" styleClass="campoObrigatorio" />
          </span>
          <span className="font-bold text-sm w-[40%] mr-10">
            <FormField label="Convênio" isSelect styleClass="campoObrigatorio" options={convenio} />
          </span>
          <span className="font-bold text-sm w-full">
            <FormField label="Descrição do Convêni" placeholder="Descrição" styleClass="campoObrigatorio" />
          </span>
        </div>
      </form>
    </>
  );
}
