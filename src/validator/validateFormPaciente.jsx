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
  const { required, label } = rules;

  const fieldLabel =
    label && label.trim() !== "" && label !== "undefined" && label !== "null"
      ? label
      : name;

  // Validação de campo obrigatório
  if (required) {
    const isEmpty =
      value === null ||
      value === undefined ||
      value === "" ||
      (typeof value === "object" && Object.keys(value).length === 0);

    if (isEmpty) {
      errors.push(`${fieldLabel} é obrigatório.`);
    }
  }

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
