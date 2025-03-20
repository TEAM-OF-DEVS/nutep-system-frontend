import React from 'react';

export const FormField = ({ isAPI = false, isDisable = false, isGrid = false, isSelect = false,
  name = "", value, label = "", placeholder = label, type = "text", styleClass = "", styleInput = "",
  options = [], onChange = () => { }, onBlur = () => {}, error, displayAttribute = "label", className = ""
}) => (
  <div className={`${className} 
  ${isGrid ? "disabled:bg-gray-500 flex items-center space-x-2 font-bold text-sm" :
   "disabled:bg-gray-200 flex flex-col space-y-1 font-bold text-sm"}`} >
    <label className={isGrid ? `${styleClass} font-bold text-sm text-gray-800 w-1/2` : `${styleClass} font-bold text-sm text-gray-800`}>{label}</label>
    <div className={isGrid ? "" : "w-full max-w-sm min-w-[100%]"}>
      {isSelect ? (
        <select id={name} name={name} value={value} onChange={onChange} onBlur={onBlur} disabled={isDisable}
          className={isGrid ? "w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            : "w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 "}
        >
          <option value="">Selecione</option>
          {Array.isArray(options) ? (
            options.map((option, idx) => (
              <option key={idx} value={isAPI ? JSON.stringify(option) : option.value}>
                {option[displayAttribute]}
              </option>
            ))
          ) : (
            <option disabled>Opções inválidas</option>
          )}
        </select>
      ) : (
        <input id={name} name={name} onChange={onChange} value={value} onBlur={onBlur}
          type={type} placeholder={placeholder} disabled={isDisable}
          className={ type === "checkbox" ? `${styleInput}`  : (isGrid ? `${styleInput} w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 shadow-sm` : `${styleInput} w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`)}
        />
      )}
    </div>
    {error && <span className="errorMessage text-xs">{error}</span>}
  </div>
);

