import PropTypes from "prop-types";
export const FormField = ({
  isAPI = false,
  isDisable = false,
  isGrid = false,
  isSelect = false,
  name = "",
  value,
  label = "",
  placeholder = label,
  type = "text",
  styleClass = "",
  styleInput = "",
  options = [],
  onChange = () => {},
  error,
  displayAttribute = "label",
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
        6
      )}.${formatted.slice(6, 9)}-${formatted.slice(9)}`;
    } else if (formatted.length > 6) {
      formatted = `${formatted.slice(0, 3)}.${formatted.slice(
        3,
        6
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
        7
      )} ${formatted.slice(7, 11)} ${formatted.slice(11)}`;
    } else if (formatted.length > 7) {
      formatted = `${formatted.slice(0, 3)} ${formatted.slice(
        3,
        7
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

  const formatHouseNumber = (value) => {
    return value.replace(/[^0-9a-zA-Z\/\-\.\s]/g, "").slice(0, 10);
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
    } else {
      value = value.toUpperCase();
    }

    onChange({ target: { name: event.target.name, value } });
  };

  const getDefaultPlaceholder = () => {
    const fieldName = name.toLowerCase();

    if (fieldName.includes("cep")) return "00000-000";
    if (fieldName.includes("cpf")) return "000.000.000-00";
    if (fieldName.includes("sus") || fieldName.includes("cartaosus"))
      return "000 0000 0000 0000";
    if (fieldName.includes("telefone") || fieldName.includes("celular"))
      return "(00) 00000-0000";
    return placeholder;
  };

  const getInputType = () => {
    const fieldName = name.toLowerCase();
    if (fieldName.includes("senha") || fieldName.includes("password")) {
      return "password";
    } else if (fieldName.includes("email")) {
      return "email";
    } else if (fieldName.includes("data") || fieldName.includes("date")) {
      return "date";
    }
    return type;
  };

  return (
    <div
      className={
        isGrid
          ? "disabled:bg-gray-500 flex items-center space-x-2 font-bold text-sm"
          : "disabled:bg-gray-500 flex flex-col space-y-1 font-bold text-sm"
      }
    >
      <label
        className={
          isGrid
            ? `${styleClass} font-bold text-sm text-gray-800 w-1/2`
            : `${styleClass} font-bold text-sm text-gray-800`
        }
      >
        {label}
      </label>
      <div className={isGrid ? "" : "w-full max-w-sm min-w-[100%]"}>
        {isSelect ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={isDisable}
            className={
              isGrid
                ? "w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                : "w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 "
            }
          >
            <option value="">Selecione</option>
            {options.map((option, idx) => (
              <option
                key={idx}
                value={isAPI ? JSON.stringify(option) : option.value}
              >
                {option[displayAttribute]}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            onChange={handleInputChange}
            value={value}
            type={getInputType()}
            placeholder={getDefaultPlaceholder()}
            disabled={isDisable}
            className={
              isGrid
                ? `${styleInput} w-full bg-transparent text-slate-700 text-sm border uppercase border-slate-200 rounded-md px-3 py-2 shadow-sm`
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
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  styleClass: PropTypes.string,
  styleInput: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  error: PropTypes.string,
  displayAttribute: PropTypes.string,
};
