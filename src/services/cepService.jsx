import axios from "axios";

const BASE_URL = "https://viacep.com.br/cep/ws"; // Substitua pela URL correta da API.
const CepService = {

  // Recuperar um endereco por CEP
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}/json/`);
  
      // Se a API retornar erro no próprio response.data, trate aqui
      if (response.data.erro) {
        throw new Error(`CEP não encontrado`);
      }
  
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar estado com ID ${id}:`, error);
      throw error;
    }
  }
};

export default CepService;