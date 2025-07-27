import axios from "axios";

const BASE = import.meta.env.VITE_BASE_URL;
const BASE_URL = BASE + "/paisResponsavel"; // Substitua pela URL correta da API.
const ResponsavelService = {
  // Recuperar um responsavel pelo CPF
  getByCPF: async (cpf) => {
    function formatarCpf(cpf) {
      return cpf.replace(/\D/g, ""); // remove tudo que não for dígito
    }
    try {
      const response = await axios.get(`${BASE_URL}/find/${formatarCpf(cpf)}`);

      // Se a API retornar erro no próprio response.data, trate aqui
      if (response.data.erro) {
        throw new Error(`Responsável não encontrado`);
      }

      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar responsável com CPF ${cpf}:`, error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);

      // Se a API retornar erro no próprio response.data, trate aqui
      if (response.data.erro) {
        throw new Error(`Responsável não encontrado`);
      }

      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar responsável com ID ${id}:`, error);
      throw error;
    }
  },
};

export default ResponsavelService;
