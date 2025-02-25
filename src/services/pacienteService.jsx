import axios from "axios";

//const BASE_URL = "http://localhost:3001/pacientes"; // Substitua pela URL correta da API.
const BASE_URL = "https://api-json-chi.vercel.app/pacientes";
const PacienteService = {
  // Recuperar todos os pacientes
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
      throw error;
    }
  },

  getByNome: async (nome) => {
    try {
      const response = await axios.get(`${BASE_URL}?dsNome=${nome}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar paciente com nome ${nome}:`, error);
      throw error;
    }
  },

  getByProntuario: async (prontuario) => {
    try {
      const response = await axios.get(`${BASE_URL}?descricaoProntuario=${prontuario}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar paciente com prontuário ${prontuario}:`, error);
      throw error;
    }
  },

  getByProntuarioComNome: async (prontuario, nome) => {
    try {

      if (!prontuario && !nome) {

      }
      const response = await axios.get(`${BASE_URL}?descricaoProntuario=${prontuario}&dsNome=${nome}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar paciente com prontuário ${prontuario}:`, error);
      throw error;
    }
  },


  // Recuperar um paciente por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar paciente com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo paciente
  create: async (dadosPaciente) => {
    try {
      const response = await axios.post(BASE_URL, dadosPaciente);
      return <div>{response.status}</div>;
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      throw error;
    }
  },

  // Atualizar um paciente existente
  update: async (id, dadosPaciente) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, dadosPaciente);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar paciente com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir um paciente
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir paciente com ID ${id}:`, error);
      throw error;
    }
  },
};

export default PacienteService;