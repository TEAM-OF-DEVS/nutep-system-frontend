import axios from "axios";

const BASE = import.meta.env.VITE_BASE_URL;
const BASE_URL = BASE + "/entity";

const ServiceUtil = {
  // Recuperar as listas a serem utilizadas na tela dados-pessoais
  getAllOcupacoes: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/dados-pessoais/ocupacoes");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar ocupacoes:", error);
      throw error;
    }
  },

  findByIdOcupacao: async (id) => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + `/dados-pessoais/ocupacoes/${id}`,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar ocupacão:", error);
      throw error;
    }
  },

  getAllProcedencias: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/dados-pessoais/procedencias",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar procedencias:", error);
      throw error;
    }
  },

  findByIdProcedencia: async (id) => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + `/dados-pessoais/procedencias/${id}`,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar procedencia:", error);
      throw error;
    }
  },

  // Recuperar as listas a serem utilizadas na tela servico-social
  getAllAbrigos: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/servico-social/abrigos");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar abrigos:", error);
      throw error;
    }
  },

  getByIdAbrigo: async (id) => {
    try {
      const response = await axios.get(
        BASE_URL + "/servico-social/abrigos/" + id,
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar abrigo:", error);
      throw error;
    }
  },

  getAllDiasTurnosTerapia: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/servico-social/diasTurnosTerapia",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dias Turnos de Terapias:", error);
      throw error;
    }
  },

  getAllPeriodicidadesTerapias: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/servico-social/periodicidadesTerapias",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar periodicidades de terapias:", error);
      throw error;
    }
  },

  getAllTiposDeTerapias: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/servico-social/tiposDeTerapias",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar tipos de Terapias:", error);
      throw error;
    }
  },

  // Recuperar as listas a serem utilizadas na tela pre-natais

  getAllAlergias: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/alergias");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar alergias:", error);
      throw error;
    }
  },

  getAllDiagnosticos: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/diagnosticos");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar diagnosticos:", error);
      throw error;
    }
  },

  getAllDoencas: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/doencas");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar doencas:", error);
      throw error;
    }
  },

  getAllExames: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/exames");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar exames:", error);
      throw error;
    }
  },

  getAllInfeccoes: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/infeccoes");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar infeccoes:", error);
      throw error;
    }
  },

  getAllMedicamentos: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/medicamentos");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar medicamentos:", error);
      throw error;
    }
  },

  getAllMetodosContraceptivos: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/pre-natais/metodosContraceptivos",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar metodos contraceptivos:", error);
      throw error;
    }
  },

  getAllMotivosHospitalizacao: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/pre-natais/motivosHospitalizacao",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar motivos de hospitalizacao:", error);
      throw error;
    }
  },

  getAllUsoDrogas: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/pre-natais/usoDrogas");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar uso de drogas:", error);
      throw error;
    }
  },

  // Recuperar as listas a serem utilizadas na tela pre-natais

  getAllAntibioticos: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/neo-natais/antibioticos");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar antibioticos:", error);
      throw error;
    }
  },

  getAllDoencasCronicas: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/neo-natais/doencasCronicas",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar doencas cronicas:", error);
      throw error;
    }
  },

  getAllDoencasGeneticas: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(
        BASE_URL + "/neo-natais/doencasGeneticas",
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar doencas geneticas:", error);
      throw error;
    }
  },

  getAllMalFormacoes: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/neo-natais/malFormacoes");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar mal formacoes:", error);
      throw error;
    }
  },
  getAllTerapeuticas: async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.get(BASE_URL + "/neo-natais/terapeuticas");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar terapeuticas:", error);
      throw error;
    }
  },
};

export default ServiceUtil;
