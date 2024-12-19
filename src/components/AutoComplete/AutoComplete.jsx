import React, { useState, useCallback } from 'react';
import pacienteService from "../../services/pacienteService.jsx";

// export const AutoComplete = ({ }) => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedPaciente, setSelectedPaciente] = useState(null);

//   const debounce = (func, delay) => {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => func(...args), delay);
//     };
//   };

//   const handleInputChange = useCallback(
//     debounce(async (value) => {
//       if (value.trim() === '') {
//         setSuggestions([]);
//         return;
//       }

//       try {
//         const results = await pacienteService.getById(value);
//         console.log(results);
//         setSuggestions(Array.isArray(results) ? results : []);
//       } catch (error) {
//         console.error('Erro ao buscar pacientes:', error);
//         setSuggestions([]);
//       }
//     }, 300),
//     [pacienteService]
//   );

//   const onInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     handleInputChange(value);
//   };

//   const handleSelect = (paciente) => {
//     setQuery(paciente.nome);
//     setSelectedPaciente(paciente);
//     setSuggestions([]);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto mt-8">
//       <label className="block font-bold text-sm mb-2">Buscar Paciente</label>
//       <input
//         type="text"
//         className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//         placeholder="Digite o nome ou protocolo"
//         value={query}
//         onChange={onInputChange}
//       />
//       {suggestions.length > 0 && (
//         <ul className="border border-slate-200 rounded-md mt-2 bg-white shadow-lg max-h-40 overflow-y-auto">
//           {suggestions.map((paciente) => (
//             <li
//               key={paciente.id}
//               className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
//               onClick={() => handleSelect(paciente)}
//             >
//               {paciente.nome} (Protocolo: {paciente.protocolo})
//             </li>
//           ))}
//         </ul>
//       )}

//       {selectedPaciente && (
//         <div className="mt-4 p-4 border border-blue-200 rounded-md bg-blue-50">
//           <p className="font-bold">Paciente Selecionado:</p>
//           <p>Nome: {selectedPaciente.nome}</p>
//           <p>Protocolo: {selectedPaciente.protocolo}</p>
//         </div>
//       )}
//     </div>
//   );
// };





export const AutoComplete = ({ }) => (
    <div>
        <div className="flex mt-4">
            <span className="pl-8 font-bold text-xl">
                Identificação do Paciente
            </span>
        </div>
        <div className="flex mt-8 px-8">
            <span className="font-bold text-sm mr-10">
                <label>Prontuário</label>
                <div className="w-full max-w-sm">
                    <input
                        className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Prontuário"
                    />
                </div>
            </span>
            <span className="font-bold text-sm mr-10">
                <label>Nome</label>
                <div className="w-full max-w-sm">
                    <input
                        className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Nome"
                    />
                </div>
            </span>
            <span className="font-bold text-sm mt-3">
                <div className="w-full max-w-sm">
                    <button
                        type="button"
                        className="focus:outline-none text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 font-bold rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
                    >
                        Pesquisar
                    </button>
                </div>
            </span>
        </div>
    </div>
);
