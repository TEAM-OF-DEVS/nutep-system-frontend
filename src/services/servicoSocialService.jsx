import axios from "axios";

//const BASE_URL = "http://localhost:3001/servicos_sociais"; // Substitua pela URL correta da API.
const BASE_URL = "https://nutep-9fb84a05c313.herokuapp.com/servicos_sociais";
const ServicoSocialService = {
  // Recuperar todos os pacientes
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar:", error);
      throw error;
    }
  },

  getByPaciente: async (paciente) => {
    try {
      const response = await axios.get(`${BASE_URL}?paciente=${paciente}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar serviço social com prontuário ${paciente}:`, error);
      throw error;
    }
  },


  // Recuperar um paciente por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo paciente
  create: async (dadosServicoSocial) => {
    try {
      const response = await axios.post(BASE_URL, dadosServicoSocial);
      return <div>{response.status}</div>;
    } catch (error) {
      console.error("Erro ao criar", error);
      throw error;
    }
  },

  // Atualizar um paciente existente
  update: async (id, dadosServicoSocial) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, dadosServicoSocial);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar ${id}:`, error);
      throw error;
    }
  },

  // Excluir um paciente
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir ${id}:`, error);
      throw error;
    }
  },
};

export default ServicoSocialService;