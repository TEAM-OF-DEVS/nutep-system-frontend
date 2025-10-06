/**
 * Função para capitalizar a primeira letra de uma string
 */
const firstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Valida um campo com base nas regras fornecidas.
 * @param {string} name - Nome do campo.
 * @param {string|number} value - Valor do campo.
 * @param {Object} rules - Regras de validação para o campo.
 * @returns {string|null} Mensagem de erro ou null se válido.
 */
export const validateField = (name, value, rules = {}) => {
  const errors = [];

  // Validação de campo obrigatório
  if (rules.required) {
    const isStringEmpty = typeof value === "string" && value.trim() === "";
    const isValueEmpty =
      value === undefined || value === null || isStringEmpty;

    if (isValueEmpty) {
      errors.push(`${firstLetter(name)} é obrigatório.`);
    }
  }

  // if (rules.required && (!value || (typeof value === "string" && value.trim() === ""))) {
  //   errors.push(`${firstLetter(name)} é obrigatório.`);
  // }
  // Validação de comprimento mínimo (aplicada apenas se o valor não estiver vazio)
  // if (rules.minLength && value && typeof value === "string" && value.trim().length < rules.minLength) {
  //   errors.push(`${firstLetter(name)} deve ter pelo menos ${rules.minLength} caracteres.`);
  // }

  return errors.length > 0 ? errors.join(" ") : null;
};

/**
 * Valida todos os campos de um formulário com base nas regras fornecidas.
 * @param {Object} formData - Dados do formulário.
 * @param {Object} validationRules - Regras de validação para os campos.
 * @returns {Object} Objeto com mensagens de erro por campo.
 */
export const validateForm = (formData, validationRules) => {
  const errors = {};

  Object.keys(validationRules).forEach((field) => {
    const error = validateField(field, formData[field], validationRules[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
