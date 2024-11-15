import React from 'react';

export const FormField = ({ isGrid = false, label = "", placeholder = label, type = "text", styleClass = "", styleInput = "", isSelect = false, options = [] }) => (
  <div className={isGrid ? "flex items-center space-x-2 font-bold text-sm" : "flex flex-col space-y-1 font-bold text-sm"} >
    <label className={isGrid ? `${styleClass} font-bold text-sm text-gray-800 w-1/2` : `${styleClass} font-bold text-sm text-gray-800`}>{label}</label>
    <div className={ isGrid ? "" : "w-full max-w-sm min-w-[100%]"}>
      {isSelect ? (
        <select
          className={isGrid ? "w-full bg-transparent placeholder:text-slate-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" : "w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400"}
        >
          <option selected>Selecione</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type} placeholder={placeholder}
          className={isGrid ? `${styleInput} w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 shadow-sm` : `${styleInput} w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
        />
      )}
    </div>
  </div>
);

