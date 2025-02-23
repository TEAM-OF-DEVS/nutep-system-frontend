import React, { useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete.jsx";
import { FormGroup } from "../../components/FormGroup/index.jsx";
import { FormField } from "../../components/FormField/FormField.jsx";
import Procedencia from "../../models/enum/Procedencia.js";

export function FormCadastroDadosPreNatais() {

  const procedencias = Object.values(Procedencia).map(([key, value]) => ({ value: key, label: value }));
  const convenio = ["Hapvida", "IPM", "ISSEC", "Sus", "Unimed", "Outros", "SI"]
  const planejamentoDeGestacao = ["Planejada", "Não planejada, mas aceita", "Não planejada, mas desejada", "Indesejada", "Rejeitada", "SI"];
  const contraceptiveMethods = ["Anticoncepcional Injetável - Mensal", "Anticoncepcional Injetável - Trimestral', 'Anticoncepcional oral", "Coito interrompido", "DIU", "Método tabela", "Preservativo", "Nenhum", "Outros", "SI"];
  const meioAbortivo = ["Aborto medicamentoso", "Chás", "Curetagem", "Cytotec", "Método de aspiração", "Outros", "SI"];
  const intercorrenciasGestacao = ["Acidente", "Anemia", "Cardiopatia", "Depressão", "Diabetes gestacional", "Doença autoimune", "Hiperêmese", "Hipotireoidismo", "Sídrome de HELLP", "Síndromes hipertensivas na gestação", "Transtorno psíquico", "Tratamento psiquiatrico", "Outros", "SI"];
  const alergias = ["Asma", "Aparelho Respiratorio", "Medicamentosas", "Oculares", "Pele", "Sistemica / alimentar", "Rinite", "Nenhuma", "Outros", "SI"];
  const infeccoes = ["Cancro mole (cancroide)", "Chikungunha", "Citomegalovirose", "Covid", "Dengue", "Doença Inflamatória Pélvica (DIP)", "Donovanose", "Gonorreia", "Hepatite B e C", "Herpes genital", "HIV/AIDS", "HPV", "infecçao do trato urinário", "Infecção pelo HTLV", "Infecção por Clamídia", "Linfogranuloma venéreo (LGV)", "Resfriado", "Rubéola", "Sífilis", "Toxoplasmose", "Tricomoníase", "Zika", "Nenhuma", "Outros", "SI"];
  const doencasPreExistentesMae = ["Alergia alimentar", "Alergia medicamentosa", "Alergia ocular", "Asma alérgica", "Dermatite alérgica", "Rinite alérgica", "Autoimune - Anemia hemolítica", "Autoimune - Artrite reumatóide", "Autoimune - Diabetes tipo 1", "Autoimune - Doença celíaca", "Autoimune - Esclerose múltipla", "Autoimune - Lupus eritematoso sistêmico", "Autoimune - Síndrome de Sjögren", "Autoimune - Tireóide de Hashimoto", "Autoimune - Vitiligo", "Cardiopatias - Angina", "Cardiopatias - Anomalia de Ebstein", "Cardiopatias - Arritmia", "Cardiopatias - Atresia pulmonar", "Cardiopatias - Comunicação interatrial", "Cardiopatias - Comunicação interventricular", "Cardiopatias - Defeito no septo atrioventricular", "Cardiopatias - Encocardite", "Cardiopatias - Infarto", "Cardiopatias - Insuficiência cardíaca", "Cardiopatias - Miocardite", "Cardiopatias - Pericardite", "Cardiopatias - Persistência do canal arterial", "Cardiopatias - tetralogia de Fallot", "Cardiopatias - transposição dos grandes vasos da base", "Cardiopatias - valvulopatia", "Distúrbio de coagulação - Coagulação intravascular disseminada", "Distúrbio de coagulação - Deficiência de alfa 2-antiplasmina", "Distúrbio de coagulação - Deficiência do fator II", "Distúrbio de coagulação - Deficiência do fator V", "Distúrbio de coagulação - Deficiência do fator VII", "Distúrbio de coagulação - Deficiência do fator X", "Distúrbio de coagulação - Deficiência do fator XI", "Distúrbio de coagulação - Hemofilia / Doença de von willebrand", "Distúrbio de coagulação - Trombocitopenia", "Doenças psiquiátricas - Esquizofrenia", "Doenças psiquiátricas - Psicose maníaco depressiva", "Doenças psiquiátricas - Psicose obsessiva compulsiva", "Doenças psiquiátricas - Transtorno bordeline", "Doenças psiquiátricas - Transtorno de ansiedade generalizada", "Doenças psiquiátricas - Transtorno dissociativo", "Doenças psiquiátricas - Transtorno do pânico", "Nenhuma", "Outros", "SI"];
  const usoDrogasMae = ["Álcool - 1 a 4 vezes por semana", "Álcool - 11 a 20 vezes por semana", "Álcool - 5 a 10 vezes por semana", "Álcool - Mais de 20 vezes", "Cocaína - 1 a 4 vezes por semana", "Cocaína - 11 a 20 vezes por semana", "Cocaína - 5 a 10 vezes por semana", "Cocaína - Mais de 20 vezes", "Crack - 1 a 4 vezes por semana", "Crack - 11 a 20 vezes por semana", "Crack - 5 a 10 vezes por semana", "Crack - Mais de 20 vezes", "Fumo - 1 a 10 unidades por semana", "Fumo - 11 unidades a 20 unidades por semana", "Fumo - Mais de 20 unidades por semana", "Maconha - 1 a 4 vezes por semana", "Maconha - 11 a 20 vezes por semana", "Maconha - 5 a 10 vezes por semana", "Maconha - Mais de 20 vezes", "Nenhuma", "Outros", "SI"];
  const examesRealizadosMae = ["Amniocentese - Alterado", "Amniocentese - Normal", "Biópsia cariótipo fetal - Alterado", "Biópsia cariótipo fetal - Normal", "Biópsia do vilo corial - Alterado", "Biópsia do vilo corial - Normal", "Cardiotocografia - Alterado", "Cardiotocografia - Normal", "Cordocentese - Alterado", "Cordocentese - Normal", "Ecocardiograma fetal - Normal", "Eletrocardiograma fetal - Alterado", "Glicose em jejum - Alterado", "Glicose em jejum - Normal", "Hemograma - Alterado", "Hemograma - Normal", "HIV - Alterado", "HIV - Normal", "MAPA - Alterado", "MAPA - Normal", "Perfil bioquímico fetal - Alterado", "Perfil bioquímico fetal - Normal", "Tipo sanguíneo e fator RH - Alterado", "Tipo sanguíneo e fator RH - Normal", "TORCH - Alterado", "TORCH - Normal", "VDRL - Alterado", "VDRL - Normal", "Nenhum", "Outros", "SI"];
  const medicamentosUtilizadosMae = ["Ácido fólico", "Ferro", "Vitaminas", "Antieméticos", "Antibióticos", "Analgésicos", "Antiabortivos", "Anti hipertensivo - Adalat", "Anti hipertensivo - Aldactone", "Anti hipertensivo - Atenelol", "Anti hipertensivo - Besilato de Anlodipino", "Anti hipertensivo - Captopril", "Anti hipertensivo - Carvedilol", "Anti hipertensivo - Diuress", "Anti hipertensivo - Enalapril", "Anti hipertensivo - Entresto", "Anti hipertensivo - Espironolactona", "Anti hipertensivo - Furosemida", "Anti hipertensivo - Hidroclorotiazida", "Anti hipertensivo - Hidroclorotizida", "Anti hipertensivo - Lasix", "Anti hipertensivo - Losartana", "Anti hipertensivo - Metildopa", "Anti hipertensivo - Nifedipina", "Anti hipertensivo - Seloken", "Anti hipertensivo - Valsartana", "Anti hipertensivo - Vasopril", "Psicotrópicos", "Nenhuma", "Outros", "SI"];
  const motivoHospitalizacao = ["Acidente de trabalho com exposição a material biológico", "Acidente por animal peçonhento", "Acidente por animal potencialmente transmissor da raiva", "Aloimunização", "Amniorrexe prematura", "Anemia", "Antraz", "Apendicite", "Artrite de Takayasu", "Artrite reumatoide", "Artrose Generalizada Severa", "Asma", "Atelectasia", "Botulismo", "Bronquite", "Câncer da tireoide", "Câncer da tuba uterina", "Câncer de colo de útero", "Câncer de mama", "Câncer de vagina", "Câncer de vulva", "Câncer do endométrio", "Câncer do ovário", "Cardiopatia", "Catapora", "Chikungunha", "Cistocele", "Convulsão", "Dengue", "Diabetes insipidus", "Diabetes mellitus gestacional (DMG)", "Distonia segmentada", "Distúrbios da tireoide", "Doença auto imune", "Doença de Chagas", "Doença de Charcot-Marie-Tooth", "Doença de Creutzfeldt-Jakob (DCJ)", "Doença de Huntington", "Doença Invasiva por Haemophilus Influenza", "Doença Meningocócica e outras meningites", "Eclâmpsia", "Edema pulmonar", "Embolia gasosa", "Embolia pulmonar", "Endometriose", "Epilepsia", "Esclerose múltipla", "Esquistossomose", "Febre do Nilo Ocidental e outras arboviroses", "Febre Maculosa e outras Riquetisioses", "Febre tifoide", "Fratura", "Gastrite", "Glioma", "Hanseníase", "Hantavirose", "Hemofilia", "Hemorragias da gestação", "Hemorroida", "Hemossiderose pulmonar", "Hepatite A", "Hepatite B", "Hepatite C", "Herpes", "Herpes genital", "Hiperêmese", "Hipertensão crônica", "Hipertensão gestacional", "Hipotireoidismo", "HIV/AIDS - Infecção pelo Vírus da Imunodeficiência Humana ou Síndrome da Imunodeficiência Adquirida", "Infarto agudo do miocárdio", "Infecção pelo HIV em gestante, parturiente ou puérpera e Criança exposta ao risco de transmissão vertical do HIV", "Infecção urinária", "Influenza humana produzida por novo subtipo viral", "Insuficiência istmo-cervical", "Insuficiência renal aguda", "Insuficiência renal crônica", "Intoxicação Exógena (por substâncias químicas, incluindo agrotóxicos, gases tóxicos e metais pesados)", "Leishmaniose tegumentar americana", "Leishmaniose Visceral", "Leptospirose", "Leucemia", "Lúpus eritematoso sistêmico", "Malária na região amazônica", "Malária na região extra-Amazônica", "Melanoma", "Meningite", "Nefropatia", "Neoplasia trofoblástica gestacional", "Pancreatite", "Parkinson", "Periodontite", "Placenta prévia", "Pneumonia", "Poliomielite", "Pré eclâmpsia", "Prolapso uterino", "Raiva", "Retocele", "Rubéola e síndrome da rubéola congênita", "Sarampo", "Septicemia", "Sífilis", "Síndrome da Paralisia Flácida Aguda", "Síndrome de Guillain Barré", "Síndrome de HELLP", "Síndrome Respiratória Aguda Grave associada a Coronavírus", "Tétano", "Tireoide de Hashimoto", "Toxoplasmose gestacional e congênita", "Tromboembolismo", "Trombofilia", "Tuberculose", "Tularemia", "Uterocele", "Vaginose bacteriana", "Varicela", "Varíola", "Vasculopatia", "Violência doméstica e/ou outras violências", "Violência sexual e tentativa de suicídio", "Zika", "Outro", "SI"];
  const diagnostico = ["Colelitíase", "Diabetes mellitus", "Doenças autoimunes", "Doenças hematológicas", "Hipertensão arterial crônica", "Hipertireoidismo", "Hipotireoidismo", "Nenhum", "Oligoidrâmnio", "Placenta acreta/acretismo placentário", "Placenta prévia", "Polidrâmnio", "Tromboembolismo", "Outro", "SI"];
  const listSimOuNao = ["Sim", "Não", "SI"];

  const [paciente, setPaciente] = useState(null);

  return (
    <>
      <form>
        {/*DADOS PRE NATAIS*/}
        <AutoComplete onSelectPaciente={setPaciente} />
        {paciente && (
          <FormGroup title="Dados Pré-Natais" description="Cadastro de Dados Pré Natais do Paciente">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
                <FormField label="Prontuário" placeholder="N° do Prontuário" value={paciente?.descricaoProntuario || ""} />
                <FormField label="Nome Completo" placeholder="Nome Completo" value={paciente?.dsNome || ""} />
                <FormField label="Data de Nascimento" placeholder="00/00/0000" type="Date" value={paciente?.dataNascimento || ""} />
                <FormField label="Data do Atendimento" placeholder="00/00/0000" type="Date" styleClass="campoObrigatorio" />
              </div>
            </form>
          </FormGroup>
        )}
        {/* EMCAMINHAMENTO ORIGEM */}
        <FormGroup title="Encaminhamento de Origem">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField label="Procedência" isSelect options={procedencias} />
            <FormField label="Descrição da Procedência" placeholder="Descrição" />
            <FormField label="Convênio" isSelect options={convenio} />
            <FormField label="Descrição do Convênio" placeholder="Descrição" />
          </div>
        </FormGroup>
        {/* DADOS GESTACIONAIS */}
        <FormGroup title="Dados Gestacionais" description="Cadastro de Dados Gestacionais">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Idade da mãe ao engravidar" />
            <FormField isGrid label="Número de consultas" />
            <FormField isGrid label="Idade do pai no início da gestação" />
            <FormField isGrid label="Número de gestações" />
            <FormField isGrid label="Peso inicial na gravidez (kg)" />
            <FormField isGrid label="Número de filhos vivos" />
            <FormField isGrid label="Peso final na gravidez (kg)" />
            <FormField isGrid label="Número de natimortos" />
            <FormField isGrid label="Estatura da mãe (m)" />
            <FormField isGrid label="Número de abortos" />
            <FormField isGrid label="Tempo de gestação na 1ª consulta (Semanas)" />
            <FormField isGrid label="Planejamento da gestação" isSelect options={planejamentoDeGestacao} />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Método contraceptivo anterior à gestação" isSelect options={contraceptiveMethods} />
            <FormField isGrid label="Descrição do método contraceptivo" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Uso de Aborto" isSelect options={listSimOuNao} />
            <FormField isGrid label="Tempo gestação (Semanas)" />
            <FormField isGrid label="Meio Aborto" isSelect options={meioAbortivo} />
            <FormField isGrid label="Descrição do meio abortivo" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Consanguinidade dos pais" isSelect options={listSimOuNao} />
            <FormField isGrid label="Descrição da Consanguinidade" />
          </div>

          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Intercorrências na gestação" isSelect options={intercorrenciasGestacao} />
            <FormField isGrid label="Descrição da Intercorrência" />
            <FormField isGrid label="Alergias" isSelect options={alergias} />
            <FormField isGrid label="Descrição de Alergias" />
            <FormField isGrid label="Sangramentos na gravidez?" isSelect options={listSimOuNao} />
            <FormField isGrid label="Período do Sangramento" />
            <FormField isGrid label="Infecções" isSelect options={infeccoes} />
            <FormField isGrid label="Descrição de Infecções" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Doenças Pré Existentes da Mãe" isSelect options={doencasPreExistentesMae} />
            <FormField isGrid label="Descrição de Doenças Pré existentes" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Uso de Drogas Pela Mãe" isSelect options={usoDrogasMae} />
            <FormField isGrid label="Descrição dos exames realizados pela mãe" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Exames Realizados Pela Mãe" isSelect options={examesRealizadosMae} />
            <FormField isGrid label="Descrição dos exames realizados pela mãe" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Medicamentos utilizados pela mãe" isSelect options={medicamentosUtilizadosMae} />
            <FormField isGrid label="Descrição dos medicamentos utilizados pela mãe" />
          </div>
          <hr className="h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField isGrid label="Hospitalizações no período gestacional" isSelect options={listSimOuNao} />
            <FormField isGrid label="Qual periodo (semanas)" />
            <FormField isGrid label="Motivo da hospitalização" isSelect options={motivoHospitalizacao} />
            <FormField isGrid label="Dias de hospitalização" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField label="Descrição do Motivo da hospitalização" />

            <FormField isGrid label="Diagnóstico" isSelect options={diagnostico} />
            <FormField label="Descrição do Diagnóstico" />

            <FormField label="Observações" />
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form >
    </>
  );
}
