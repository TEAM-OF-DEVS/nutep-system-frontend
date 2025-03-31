import Naturalidade from "./enum/Nacionalidade";


const Paciente = {
  naturalidade: Naturalidade, 
  municipioLogradouro: null,
  endereco: null,
  procedencia: '', // Enum como string
  dsOutroTipoDeProcedenciaPaciente: '',
  localDeNascimento: '', // Enum como string
  dsOutroTipoDeLocalDeNascimentoPaciente: '',
  maeResponsavel: {},
  paiResponsavel: {},
  responsavel: {}, // Lista de objetos ou strings
  telefone: [], // Lista de strings
  dataAdmissao: '', // String no formato ISO 'YYYY-MM-DD'
  descricaoProntuario: '',
  sexo: '', // Enum como string
  tipoRacaCor: '', // Enum como string
  descricaoCartaoSUS: '',
  isConstaPai: false,
  isConstaMae: false,
  isMaeResponsavel: false,
  isPaiResponsavel: false,
};

export default Paciente;
