import axios from "axios";

//const BASE_URL = "http://localhost:3001/estados"; // Substitua pela URL correta da API.
const BASE_URL = "/api/estados"; 

const EstadoService = {
  // Recuperar todos os estados
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
      throw error;
    }
  },

  // Recuperar um estado por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar estado com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo estado
  create: async (dadosPaciente) => {
    try {
      const response = await axios.post(BASE_URL, dadosPaciente);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar estado:", error);
      throw error;
    }
  },

  // Atualizar um estado existente
  update: async (id, dadosPaciente) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, dadosPaciente);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar estado com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir um estado
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir estado com ID ${id}:`, error);
      throw error;
    }
  },
};

export default EstadoService;