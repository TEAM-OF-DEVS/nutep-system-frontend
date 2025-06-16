import { useState } from "react";
import { AutoComplete } from "../../components/AutoComplete/AutoComplete";
import { FormField } from "../../components/FormField/FormField";
import { FormGroup } from "../../components/FormGroup";

import Antibiotico from "../../models/enum/Antibiotico";
import DoencaCronica from "../../models/enum/DoencaCronica";
import DoencaGenetica from "../../models/enum/DoencaGenetica";
import Intercorrencia from "../../models/enum/Intercorrencia";
import LocalNascimento from "../../models/enum/LocalNascimento";
import Malformacao from "../../models/enum/MalFormacao";
import Terapeutica from "../../models/enum/Terapeutica";

import {
  validateField,
  validateForm,
} from "../../validator/validateFormPaciente";
import NeoNatalBuilder from "../../models/build/NeoNatalBuilder";
import NeoNatalService from "../../services/neonatalService";
import Apresentacao from "../../models/enum/NeoNatais/Apresentacao";
import ExamesRealizados from "../../models/enum/NeoNatais/ExamesRealizados";
import OpcaoSimOuNaoOuSi from "../../models/enum/NeoNatais/OpcaoSimOuNaoOuSi";
import ResultadoTeste from "../../models/enum/NeoNatais/ResultadoTeste";
import TiposDeGestacao from "../../models/enum/NeoNatais/TiposDeGestacao";
import TiposDeParto from "../../models/enum/NeoNatais/TiposDeParto";
import ModalSave from "../../components/ModalSave/ModalSave";

export function FormCadastroDadosNeonatais() {
  const locaisDeNascimento = Object.entries(LocalNascimento).map(
    ([key, value]) => ({ value: key, label: value }),
  );

  const doencasCronicas = Object.entries(DoencaCronica).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const doencasGeneticas = Object.entries(DoencaGenetica).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const antibioticos = Object.entries(Antibiotico).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const terapeuticaUtilizada = Object.entries(Terapeutica).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const malformacoes = Object.entries(Malformacao).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const intercorrencias = Object.entries(Intercorrencia).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const resultadoTeste = Object.entries(ResultadoTeste).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const examesRealizados = Object.entries(ExamesRealizados).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const opcaoSimOuNaoOuSi = Object.entries(OpcaoSimOuNaoOuSi).map(
    ([key, value]) => ({ value: key, label: value }),
  );
  const tiposDeParto = Object.entries(TiposDeParto).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const apresentacao = Object.entries(Apresentacao).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const tiposDeGestacao = Object.entries(TiposDeGestacao).map(
    ([key, value]) => ({ value: key, label: value }),
  );

  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [lista, setLista] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const validationRules = {
    dataAtendimento: { required: true },
  };

  const [dadosFormulario, setDadosFormulario] = useState({
    paciente: {},
    dataAtendimento: "",
    localNascimento: "",
    descricaoLocalNascimento: "",
    tipoParto: "",
    descricaoTipoParto: "",
    apresentacao: "",
    descricaoApresentacao: "",
    tipoGestacao: "",
    descricaoTipoGestacao: "",

    termo: "",
    preTermo: "",
    posTermo: "",

    peso: "",
    comprimento: "",
    perimetroCefalico: "",
    perimetroToracico: "",
    apgar1Min: "",
    apgar5Min: "",
    apgar10Min: "",

    intercorrencias: [],
    descricaoIntercorrencias: "",
    malformacoes: [],
    descricaoMalformacoes: "",

    terapeuticaUtilizada: [],
    descricaoTerapeuticaUtilizada: "",
    antibioticos: [],
    descricaoAntibioticos: "",

    cirurgiaRealizada: "",
    descricaoCirurgia: "",

    utiNeonatalDias: "",
    cuidadosIntermediariosNeonataisDias: "",
    cuidadosIntermediariosCanguruDias: "",
    alojamentoConjunto: "",

    examesRealizados: "",
    descricaoExamesRealizados: "",

    testePezinho: "",
    testeOuvidinho: "",
    testeOlhinho: "",
    testeCoracaozinho: "",
    testeLinguinha: "",
    testeOrtolani: "",

    doencasCronicas: "",
    maeDoencasCronicas: [],
    descricaoMaeDoencasCronicas: "",
    paiDoencasCronicas: [],
    descricaoPaiDoencasCronicas: "",
    irmaosDoencasCronicas: [],
    descricaoIrmaosDoencasCronicas: "",
    avosPaternosDoencasCronicas: [],
    descricaoAvosPaternosDoencasCronicas: "",
    avosMaternosDoencasCronicas: [],
    descricaoAvosMaternosDoencasCronicas: "",

    doencasGeneticas: "",
    maeDoencasGeneticas: [],
    descricaoMaeDoencasGeneticas: "",
    paiDoencasGeneticas: [],
    descricaoPaiDoencasGeneticas: "",
    irmaosDoencasGeneticas: [],
    descricaoIrmaosDoencasGeneticas: "",
    avosPaternosDoencasGeneticas: [],
    descricaoAvosPaternosDoencasGeneticas: "",
    avosMaternosDoencasGeneticas: [],
    descricaoAvosMaternosDoencasGeneticas: "",
    tiosPrimeiroGrauDoencasGeneticas: [],
    descricaoTiosPrimeiroGrauDoencasGeneticas: "",
  });

  const handleShowAlert = (dados) => {
    setMessage(dados);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    const keys = name.split(".");

    if (keys.length > 1) {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setDadosFormulario((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    const error = validateField(name, value, validationRules[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSelectionChange = (name, selected) => {
    setDadosFormulario((prevState) => ({
      ...prevState,
      [name]: selected,
    }));
  };

  const handleSubmit = async () => {
    console.log("Formulário:", dadosFormulario);
    const formErrors = validateForm(dadosFormulario, validationRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      enviarDadosNeoNatais(dadosFormulario);
    } else {
      console.log("Erros no formulário:", formErrors);
    }
  };

  async function enviarDadosNeoNatais(dadosFormulario) {
    const neoNatal = new NeoNatalBuilder()
      .withDados(dadosFormulario)
      .withPaciente(pacienteEncontrado)
      .build();
    console.log(neoNatal);
    try {
      const resposta = await NeoNatalService.create(neoNatal);
      handleShowAlert(resposta != null ? "201" : "400");
    } catch (erro) {
      if (erro instanceof Promise) {
        erro = await erro;
      }
      console.error("Erro ao salvar neo natal: ", erro.message || erro);
      throw new Error(`Erro ao salvar neo natal: ${erro.message}`);
    }
  }

  return (
    <>
      <form>
        {message === "201" ? (
          <ModalSave
            type="success"
            title="Neo Natal cadastrado!"
            message="O Neo natal do paciente foi cadastrado com sucesso."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : message === "400" ? (
          <ModalSave
            type="error"
            title="Erro no cadastro!"
            message="Houve um problema ao cadastrar o neo natal do paciente."
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null}
        <AutoComplete onSelectPaciente={setPacienteEncontrado} />

        {pacienteEncontrado && (
          <FormGroup
            title="Dados Paciente"
            description="Dados pessoais do Paciente"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
              <FormField
                label="Prontuário"
                placeholder="N° do Prontuário"
                value={pacienteEncontrado?.descricaoProntuario || ""}
              />
              <FormField
                label="Nome Completo"
                placeholder="Nome Completo"
                value={pacienteEncontrado?.dsNome || ""}
              />
              <FormField
                label="Data de Nascimento"
                placeholder="00/00/0000"
                type="Date"
                value={pacienteEncontrado?.dataNascimento || ""}
              />
              <FormField
                name="dataAtendimento"
                label="Data do Atendimento"
                placeholder="00/00/0000"
                type="Date"
                styleClass="campoObrigatorio"
                onChange={onChange}
                error={errors.dataAtendimento}
              />
            </div>
          </FormGroup>
        )}

        <FormGroup title="Dados Neonatais">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="localNascimento"
              label="Local de nascimento"
              isSelect
              options={locaisDeNascimento}
              onChange={onChange}
              error={errors.localNascimento}
            />
            <FormField
              name="descricaoLocalNascimento"
              label="Descrição do local de nascimento"
              onChange={onChange}
              error={errors.descricaoLocalNascimento}
            />
            <FormField
              name="tipoParto"
              label="Tipo de parto"
              isSelect
              options={tiposDeParto}
              onChange={onChange}
              error={errors.tipoParto}
            />
            <FormField
              name="descricaoTipoParto"
              label="Descrição do Tipo de parto"
              onChange={onChange}
              error={errors.descricaoTipoParto}
            />
            <FormField
              name="apresentacao"
              label="Apresentação"
              isSelect
              options={apresentacao}
              onChange={onChange}
              error={errors.apresentacao}
            />
            <FormField
              name="descricaoApresentacao"
              label="Descrição da Apresentação"
              onChange={onChange}
              error={errors.descricaoApresentacao}
            />
            <FormField
              name="tipoGestacao"
              label="Tipo de gestação"
              isSelect
              options={tiposDeGestacao}
              onChange={onChange}
              error={errors.tipoGestacao}
            />
            <FormField
              name="descricaoTipoGestacao"
              label="Descrição do Tipo de gestação"
              onChange={onChange}
              error={errors.descricaoTipoGestacao}
            />
          </div>
          <label className="pl-8 pt-2 font-bold text-sm text-gray-800 w-1/2">
            Idade gestacional (em semanas)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8 pt-4">
            <FormField
              name="termo"
              label="Termo"
              onChange={onChange}
              error={errors.idadeMaeEngravidar}
            />
            <FormField
              name="preTermo"
              label="Pré termo"
              onChange={onChange}
              error={errors.numeroConsultas}
            />
            <FormField
              name="posTermo"
              label="Pós termo"
              onChange={onChange}
              error={errors.idadePaiGestacao}
            />
          </div>
        </FormGroup>

        <FormGroup title="Dados Antropométricos">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="peso"
              label="Peso (g)"
              onChange={onChange}
              error={errors.peso}
            />
            <FormField
              name="comprimento"
              label="Comprimento (cm)"
              onChange={onChange}
              error={errors.comprimento}
            />
            <FormField
              name="perimetroCefalico"
              label="Perímetro Cefálico (cm)"
              onChange={onChange}
              error={errors.perimetroCefalico}
            />
            <FormField
              name="perimetroToracico"
              label="Perímetro Torácico (cm)"
              onChange={onChange}
              error={errors.perimetroToracico}
            />
            <FormField
              name="apgar1Min"
              label="Apgar 1º Minuto"
              onChange={onChange}
              error={errors.apgar1Min}
            />
            <FormField
              name="apgar5Min"
              label="Apgar 5º Minuto"
              onChange={onChange}
              error={errors.apgar5Min}
            />
            <FormField
              name="apgar10Min"
              label="Apgar 10º Minuto"
              onChange={onChange}
              error={errors.apgar10Min}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="intercorrencias"
              label="Intercorrências"
              data-testid="intercorrencias-field"
              isSelect
              isMulti
              options={intercorrencias}
              onChange={(selected) =>
                handleSelectionChange("intercorrencias", selected)
              }
              error={errors.intercorrencias}
            />
            <FormField
              name="descricaoIntercorrencias"
              label="Descrição das Intercorrências"
              onChange={onChange}
              error={errors.descricaoIntercorrencias}
            />
            <FormField
              name="malformacoes"
              label="Malformações"
              isSelect
              isMulti
              data-testid="malformacoes-dropdown-toggle"
              options={malformacoes}
              onChange={(selected) =>
                handleSelectionChange("malformacoes", selected)
              }
              error={errors.malformacoes}
            />
            <FormField
              name="descricaoMalformacoes"
              label="Descrição das Malformações"
              onChange={onChange}
              error={errors.descricaoMalformacoes}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="terapeuticaUtilizada"
              label="Terapêutica Utilizada"
              isSelect
              isMulti
              options={terapeuticaUtilizada}
              onChange={(selected) =>
                handleSelectionChange("terapeuticaUtilizada", selected)
              }
              error={errors.terapeuticaUtilizada}
            />
            <FormField
              name="descricaoTerapeuticaUtilizada"
              label="Descrição da Terapêutica utilizada"
              onChange={onChange}
              error={errors.descricaoTerapeuticaUtilizada}
            />
            <FormField
              name="antibioticos"
              label="Antibióticos"
              isSelect
              isMulti
              options={antibioticos}
              onChange={(selected) =>
                handleSelectionChange("antibioticos", selected)
              }
              error={errors.antibioticos}
            />
            <FormField
              name="descricaoAntibioticos"
              label="Descrição do antibióticos"
              onChange={onChange}
              error={errors.descricaoAntibioticos}
            />
          </div>
        </FormGroup>

        <FormGroup title="Cirurgia">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="cirurgiaRealizada"
              label="Cirurgia realizada"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.cirurgiaRealizada}
            />
            <FormField
              name="descricaoCirurgia"
              label="Descrição em caso de Cirurgias"
              onChange={onChange}
              error={errors.descricaoCirurgia}
            />
          </div>
        </FormGroup>

        <FormGroup title="Tempo de Hospitalização">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="utiNeonatalDias"
              isGrid
              label="UTI Neonatal (dias)"
              onChange={onChange}
              error={errors.utiNeonatalDias}
            />
            <FormField
              name="cuidadosIntermediariosNeonataisDias"
              isGrid
              label="Unidade de Cuidados Intermediários Neonatais (dias)"
              onChange={onChange}
              error={errors.cuidadosIntermediariosNeonataisDias}
            />
            <FormField
              name="cuidadosIntermediariosCanguruDias"
              isGrid
              label="Unidade de Cuidados Intermediários Canguru (dias)"
              onChange={onChange}
              error={errors.cuidadosIntermediariosCanguruDias}
            />
            <FormField
              name="alojamentoConjunto"
              isGrid
              label="Alojamento conjunto"
              onChange={onChange}
              error={errors.alojamentoConjunto}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="examesRealizados"
              label="Exames realizados"
              isSelect
              isMulti
              options={examesRealizados}
              onChange={(selected) =>
                handleSelectionChange("examesRealizados", selected)
              }
              error={errors.examesRealizados}
            />
            <FormField
              name="descricaoExamesRealizados"
              label="Descrição para exames realizados"
              onChange={onChange}
              error={errors.descricaoExamesRealizados}
            />
          </div>
        </FormGroup>

        <FormGroup title="Testes de Triagem Neonatal">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4">
            <FormField
              name="testePezinho"
              label="Teste do Pezinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testePezinho}
            />
            <FormField
              name="testeOuvidinho"
              label="Teste do Ouvidinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testeOuvidinho}
            />
            <FormField
              name="testeOlhinho"
              label="Teste do Olhinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testeOlhinho}
            />
            <FormField
              name="testeCoracaozinho"
              label="Teste do Coraçãozinho"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testeCoracaozinho}
            />
            <FormField
              name="testeLinguinha"
              label="Teste da Linguinha"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testeLinguinha}
            />
            <FormField
              name="testeOrtolani"
              label="Teste de Ortolani"
              isSelect
              options={resultadoTeste}
              onChange={onChange}
              error={errors.testeOrtolani}
            />
          </div>
        </FormGroup>

        <FormGroup title="Antecedentes Familiares">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="doencasCronicas"
              label="Doenças crônicas"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.doencasCronicas}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="maeDoencasCronicas"
              label="Mãe"
              isSelect
              isMulti
              options={doencasCronicas}
              onChange={(selected) =>
                handleSelectionChange("maeDoencasCronicas", selected)
              }
              error={errors.maeDoencasCronicas}
            />
            <FormField
              name="descricaoMaeDoencasCronicas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoMaeDoencasCronicas}
            />
            <FormField
              name="paiDoencasCronicas"
              label="Pai"
              isSelect
              isMulti
              options={doencasCronicas}
              onChange={(selected) =>
                handleSelectionChange("paiDoencasCronicas", selected)
              }
              error={errors.paiDoencasCronicas}
            />
            <FormField
              name="descricaoPaiDoencasCronicas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoPaiDoencasCronicas}
            />
            <FormField
              name="irmaosDoencasCronicas"
              label="Irmãos"
              isSelect
              options={doencasCronicas}
              isMulti
              onChange={(selected) =>
                handleSelectionChange("irmaosDoencasCronicas", selected)
              }
              error={errors.irmaosDoencasCronicas}
            />
            <FormField
              name="descricaoIrmaosDoencasCronicas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoIrmaosDoencasCronicas}
            />
            <FormField
              name="avosPaternosDoencasCronicas"
              label="Avós paternos"
              isSelect
              isMulti
              options={doencasCronicas}
              onChange={(selected) =>
                handleSelectionChange("avosPaternosDoencasCronicas", selected)
              }
              error={errors.avosPaternosDoencasCronicas}
            />
            <FormField
              name="descricaoAvosPaternosDoencasCronicas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoAvosPaternosDoencasCronicas}
            />
            <FormField
              name="avosMaternosDoencasCronicas"
              label="Avós maternos"
              isSelect
              isMulti
              options={doencasCronicas}
              onChange={(selected) =>
                handleSelectionChange("avosMaternosDoencasCronicas", selected)
              }
              error={errors.avosMaternosDoencasCronicas}
            />
            <FormField
              name="descricaoAvosMaternosDoencasCronicas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoAvosMaternosDoencasCronicas}
            />
          </div>
          <hr className="h-1 my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pt-4">
            <FormField
              name="doencasGeneticas"
              label="Doenças genéticas"
              isSelect
              options={opcaoSimOuNaoOuSi}
              onChange={onChange}
              error={errors.doencasGeneticas}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 pt-4">
            <FormField
              name="maeDoencasGeneticas"
              label="Mãe"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange("maeDoencasGeneticas", selected)
              }
              error={errors.maeDoencasGeneticas}
            />
            <FormField
              name="descricaoMaeDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoMaeDoencasGeneticas}
            />
            <FormField
              name="paiDoencasGeneticas"
              label="Pai"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange("paiDoencasGeneticas", selected)
              }
              error={errors.paiDoencasGeneticas}
            />
            <FormField
              name="descricaoPaiDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoAntibioticos}
            />
            <FormField
              name="irmaosDoencasGeneticas"
              label="Irmãos"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange("irmaosDoencasGeneticas", selected)
              }
              error={errors.irmaosDoencasGeneticas}
            />
            <FormField
              name="descricaoIrmaosDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoIrmaosDoencasGeneticas}
            />
            <FormField
              name="avosPaternosDoencasGeneticas"
              label="Avós paternos"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange("avosPaternosDoencasGeneticas", selected)
              }
              error={errors.avosPaternosDoencasGeneticas}
            />
            <FormField
              name="descricaoAvosPaternosDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoAvosPaternosDoencasGeneticas}
            />
            <FormField
              name="avosMaternosDoencasGeneticas"
              label="Avós maternos"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange("avosMaternosDoencasGeneticas", selected)
              }
              error={errors.avosMaternosDoencasGeneticas}
            />
            <FormField
              name="descricaoAvosMaternosDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoAvosMaternosDoencasGeneticas}
            />
            <FormField
              name="tiosPrimeiroGrauDoencasGeneticas"
              label="Tios de 1º grau"
              isSelect
              isMulti
              options={doencasGeneticas}
              onChange={(selected) =>
                handleSelectionChange(
                  "tiosPrimeiroGrauDoencasGeneticas",
                  selected,
                )
              }
              error={errors.tiosPrimeiroGrauDoencasGeneticas}
            />
            <FormField
              name="descricaoTiosPrimeiroGrauDoencasGeneticas"
              label="Descrição"
              onChange={onChange}
              error={errors.descricaoTiosPrimeiroGrauDoencasGeneticas}
            />
          </div>
        </FormGroup>
        <div className="flex items-end justify-end px-8 pt-4 mb-10">
          <button
            type="button"
            name="salvar"
            onClick={handleSubmit}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
