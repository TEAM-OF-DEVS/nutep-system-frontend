// import React, { useState, useCallback } from 'react';
// import pacienteService from "../../services/pacienteService.jsx";

// export const AutoComplete = ({ onSelectPaciente }) => {
//     const [prontuario, setProntuario] = useState("");
//     const [nome, setNome] = useState("");
//     const [paciente, setPaciente] = useState(null);

//     // Simula a busca no banco de dados (substitua por um fetch real)
//     const fetchPaciente = async () => {
//         try {
//             const response = await pacienteService.getByProntuario(prontuario, nome);
//             console.log(response);
//             if (response.length > 0) {
//                 setNome(response[0].dsNome);
//                 setPaciente(response[0]); // Atualiza o estado interno
//                 onSelectPaciente(response[0]); // 🔄 Atualiza o componente pai com o novo paciente
//                 console.log("Paciente atualizado:", response[0]);
//             } else {
//                 setPaciente(null);
//                 onSelectPaciente(null); // Limpa no componente pai também
//             }
//         } catch (error) {
//             console.error("Erro ao buscar paciente:", error);
//         }
//     };

//     return (
//         <div>
//             <div className="flex mt-4">
//                 <span className="pl-8 font-bold text-xl">
//                     Identificação do Paciente
//                 </span>
//             </div>
//             <div className="flex mt-8 px-8">
//                 {/* Prontuário */}
//                 <div className="font-bold text-sm mr-10">
//                     <label>Prontuário</label>
//                     <div className="w-full max-w-sm">
//                         <input
//                             className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                             placeholder="Prontuário"
//                             value={prontuario}
//                             onChange={(e) => setProntuario(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 {/* Nome */}
//                 <div className="font-bold text-sm mr-10">
//                     <label>Nome</label>
//                     <div className="w-full max-w-sm">
//                         <input
//                             className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                             placeholder="Nome"
//                             value={nome}
//                             onChange={(e) => setNome(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 {/* Botão de pesquisa */}
//                 <div className="font-bold text-sm mt-3">
//                     <button
//                         type="button"
//                         onClick={fetchPaciente}
//                         className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-bold rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
//                     >
//                         Pesquisar
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


import { useState, useEffect } from "react";
import pacienteService from "../../services/pacienteService.jsx";
import MessageAlert from "../../util/MessageAlert.jsx";
import { FormField } from "../FormField/FormField.jsx";

export const AutoComplete = ({ onSelectPaciente }) => {
    const [prontuario, setProntuario] = useState("");
    const [nome, setNome] = useState("");
    const [paciente, setPaciente] = useState(null);
    const [mensagem, setMensagem] = useState({ tipo: "", texto: "", title: "" });

    // Simula a busca no banco de dados (substitua por um fetch real)
    const fetchPaciente = async () => {
        if (!prontuario && !nome) {
            setMensagem({ tipo: "warn", texto: "Informe um prontuário ou nome para buscar!", title: "Pesquisa de paciente" });
            return; // Evita buscas vazias
        }

        try {
            console.log("🔎 Buscando paciente com:", { prontuario, nome });

            const response = await pacienteService.getByProntuario(prontuario, nome);

            console.log("🔄 Resposta da API:", response);

            if (response.length > 0) {
                const pacienteEncontrado = response[0];
                setNome(pacienteEncontrado.dsNome);
                setPaciente(pacienteEncontrado);
                onSelectPaciente(pacienteEncontrado);
                setMensagem({ tipo: "success", texto: "Paciente encontrado!", title: "Pesquisa de paciente" });
            } else {
                console.log("Nenhum paciente encontrado.");
                setPaciente(null);
                onSelectPaciente(null);
                setMensagem({ tipo: "warn", texto: "Nenhum paciente encontrado!", title: "Pesquisa de paciente" });
            }
        } catch (error) {
            setMensagem({ tipo: "error", texto: "Erro ao buscar paciente. Tente novamente!", title: "Pesquisa de paciente" });
            console.error("❌ Erro ao buscar paciente:", error);
        }
    };

    const limparCampos = () => {
        setProntuario("");
        setNome("");
        setPaciente(null);
        onSelectPaciente(null);
        setMensagem({});
    };

    // 🔎 Monitora mudanças no estado do paciente
    useEffect(() => {
        console.log("📢 Estado do paciente atualizado:", paciente);
    }, [paciente]);

    return (
        <div>

            {mensagem.texto && (
                <MessageAlert
                    type={mensagem.tipo}
                    title={mensagem.title}
                    message={mensagem.texto}
                />
            )
            }

            <div className="flex mt-4">
                <span className="pl-8 font-bold text-xl">
                    Identificação do Paciente
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 pt-4">
                <FormField name="numeroProtuario" label="Prontuário" placeholder="Prontuário" value={prontuario} onChange={(e) => setProntuario(e.target.value)} />
                <FormField name="nomeCompleto" label="Nome Completo" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    
                <div className="mt-4">
                    <button
                        type="button"
                        name="pesquisar"
                        onClick={fetchPaciente}
                        className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-bold rounded-lg text-sm px-3 py-2.5 me-2 mb-2"
                    >
                        Pesquisar
                    </button>
                    <button
                        type="button"
                        name="limpar"
                        onClick={limparCampos}
                        className="focus:outline-none text-white  bg-red-700 hover:bg-red-800 focus:ring-4 font-bold rounded-lg text-sm px-3 py-2.5 me-2 mb-2">
                        Limpar
                    </button>
                </div>
            </div>
        </div>
    );
};