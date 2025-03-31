import axios from "axios";

const BASE = import.meta.env.VITE_BASE_URL;
const BASE_URL = BASE + "/municipios";

const MunicipioService = {
  // Recuperar todos os municipios
  getAll: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar municipios:", error);
      throw error;
    }
  },

  // Recuperar um municipio por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar municipio com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo municipio
  create: async (dadosMunicipio) => {
    try {
      const response = await axios.post(BASE_URL, dadosMunicipio);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar municipio:", error);
      throw error;
    }
  },

  // Atualizar um municipio existente
  update: async (id, dadosMunicipio) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, dadosMunicipio);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar municipio com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir um municipio
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir municipio com ID ${id}:`, error);
      throw error;
    }
  },
};

export default MunicipioService;