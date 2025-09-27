import PropTypes from "prop-types";
import Select from "react-select";
import MultiSelectCheckbox from "../MultiSelect";

export const FormField = ({
  isTextArea = true,
  isAPI = false,
  isDisable = false,
  isGrid = false,
  isSelect = false,
  isMulti = false,
  name = "",
  value,
  label = "",
  placeholder = label,
  type = "text",
  styleClass = "",
  styleInput = "",
  options = [],
  onChange = () => {},
  onBlur = () => {},
  error,
  displayAttribute = isAPI ? "descricao" : "label",
  className = "",
}) => {
  const formatCEP = (value) => {
    let formatted = value.replace(/\D/g, "").slice(0, 8);
    if (formatted.length > 5) {
      formatted = `${formatted.slice(0, 5)}-${formatted.slice(5)}`;
    }
    return formatted;
  };

  const formatCPF = (value) => {
    let formatted = value.replace(/\D/g, "").slice(0, 11);
    if (formatted.length > 9) {
      formatted = `${formatted.slice(0, 3)}.${formatted.slice(
        3,
        6,
      )}.${formatted.slice(6, 9)}-${formatted.slice(9)}`;
    } else if (formatted.length > 6) {
      formatted = `${formatted.slice(0, 3)}.${formatted.slice(
        3,
        6,
      )}.${formatted.slice(6)}`;
    } else if (formatted.length > 3) {
      formatted = `${formatted.slice(0, 3)}.${formatted.slice(3)}`;
    }
    return formatted;
  };

  const formatSUS = (value) => {
    let formatted = value.replace(/\D/g, "").slice(0, 15);
    if (formatted.length > 11) {
      formatted = `${formatted.slice(0, 3)} ${formatted.slice(
        3,
        7,
      )} ${formatted.slice(7, 11)} ${formatted.slice(11)}`;
    } else if (formatted.length > 7) {
      formatted = `${formatted.slice(0, 3)} ${formatted.slice(
        3,
        7,
      )} ${formatted.slice(7)}`;
    } else if (formatted.length > 3) {
      formatted = `${formatted.slice(0, 3)} ${formatted.slice(3)}`;
    }
    return formatted;
  };

  const formatPhone = (value) => {
    let formatted = value.replace(/\D/g, "").slice(0, 11);
    const isCellphone = formatted.length > 10;
    if (formatted.length > 2) {
      formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
    }
    if (isCellphone && formatted.length > 10) {
      formatted = `${formatted.slice(0, 10)}-${formatted.slice(10)}`;
    } else if (formatted.length > 7) {
      formatted = `${formatted.slice(0, 7)}-${formatted.slice(7)}`;
    }
    return formatted;
  };

  const formatDateBR = (value) => {
    let digits = value.replace(/\D/g, "").slice(0, 8);

    let formatted = "";
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(
        4,
        8,
      )}`;
    } else if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      formatted = digits;
    }

    return formatted;
  };

  const formatHouseNumber = (value) =>
    value.replace(/[^0-9a-zA-Z\/\-\.\s]/g, "").slice(0, 10);

  const formatDecimal = (value) => {
    let formatted = value.replace(/[^0-9.]/g, "");

    const parts = formatted.split(".");
    if (parts.length < 2) {
      formatted = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts.length === 2) {
      formatted = parts[0].slice(0, 3) + "." + parts[1].slice(0, 2);
    } else {
      formatted = formatted.slice(0, 3);
    }

    return formatted;
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    const fieldName = event.target.name.toLowerCase();

    if (fieldName.includes("cep")) {
      value = formatCEP(value);
    } else if (fieldName.includes("cpf")) {
      value = formatCPF(value);
    } else if (fieldName.includes("sus") || fieldName.includes("cartaosus")) {
      value = formatSUS(value);
    } else if (
      fieldName.includes("telefone") ||
      fieldName.includes("celular") ||
      fieldName.includes("phone")
    ) {
      value = formatPhone(value);
    } else if (
      fieldName.includes("numero") ||
      fieldName.includes("número") ||
      fieldName.includes("house")
    ) {
      value = formatHouseNumber(value);
    } else if (fieldName.includes("data")) {
      value = formatDateBR(value);
    } else if (
      fieldName.includes("estatura") ||
      fieldName.includes("altura") ||
      fieldName.includes("nrEstaturaMae")
    ) {
      value = formatDecimal(value);
    } else {
      value = value.toUpperCase();
    }

    onChange({ target: { name: event.target.name, value } });
  };

  function parseSimNaoSi(value) {
    if (typeof value === "boolean") {
      return value; // já é boolean, retorna direto
    }

    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (normalized === "sim") {
        return true;
      }
      if (normalized === "não" || normalized === "nao" || normalized === "si") {
        return false;
      }
    }
    return value;
  }

  return (
    <div
      className={`${className} ${
        isGrid
          ? "disabled:bg-gray-500 flex items-center space-x-2 font-bold text-sm"
          : "disabled:bg-gray-200 flex flex-col space-y-1 font-bold text-sm"
      }`}
    >
      <label
        className={`${styleClass} font-bold text-sm text-gray-800 ${
          isGrid ? "w-1/2" : ""
        }`}
      >
        {label}
      </label>
      <div className={isGrid ? "" : "w-full max-w-sm min-w-[100%]"}>
        {isMulti ? (
          <MultiSelectCheckbox
            options={options}
            onChange={onChange}
            displayAttribute={displayAttribute}
            isAPI={isAPI}
          />
        ) : isSelect ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={isDisable}
            data-testid={name}
            className={
              isGrid
                ? "w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                : "w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400"
            }
          >
            <option value="">Selecione</option>
            {Array.isArray(options) ? (
              options.map((option, idx) => (
                <option
                  key={isAPI ? option.id : idx}
                  value={
                    isAPI ? JSON.stringify(option) : parseSimNaoSi(option.value)
                  }
                >
                  {option[displayAttribute]}
                </option>
              ))
            ) : (
              <option disabled>Opções inválidas</option>
            )}
          </select>
        ) : type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            onChange={handleInputChange}
            value={value}
            placeholder={placeholder}
            disabled={isDisable}
            rows={4}
            className={`${styleInput} w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
          />
        ) : (
          <input
            id={name}
            name={name}
            onChange={handleInputChange}
            onBlur={onBlur}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={isDisable}
            className={
              type === "checkbox"
                ? `${styleInput}`
                : isGrid
                ? `${styleInput} w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 shadow-sm`
                : `${styleInput} w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`
            }
          />
        )}
      </div>
      {error && <span className="errorMessage text-xs">{error}</span>}
    </div>
  );
};

FormField.propTypes = {
  isAPI: PropTypes.bool,
  isDisable: PropTypes.bool,
  isGrid: PropTypes.bool,
  isSelect: PropTypes.bool,
  isMulti: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  styleClass: PropTypes.string,
  styleInput: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  displayAttribute: PropTypes.string,
};
