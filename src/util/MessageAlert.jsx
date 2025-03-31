import React, { useState, useEffect } from "react";

const MessageAlert = ({ type = "success", title, message, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  // Ocultar automaticamente após 'duration' milissegundos
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado
  }, [duration]);

  if (!visible) return null; // Se não estiver visível, não renderiza nada

  // Mapeamento de classes do TailwindCSS baseadas no tipo
  const alertStyles = {
    success: {
      container: "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md relative",
      icon: "fill-current h-6 w-6 text-teal-500 mr-4",
    },
    warn: {
      container: "bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md relative",
      icon: "fill-current h-6 w-6 text-yellow-500 mr-4",
    },
    error: {
      container: "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md relative",
      icon: "fill-current h-6 w-6 text-red-500 mr-4",
    },
    info: {
      container: "bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md relative",
      icon: "fill-current h-6 w-6 text-blue-500 mr-4",
    },
  };

  const { container, icon } = alertStyles[type];

  return (
    <div className={container} role="alert">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="py-1">
            <svg className={icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            {title && <p className="font-bold">{title}</p>}
            {message && <p className="text-sm">{message}</p>}
          </div>
        </div>
        {/* Botão para fechar manualmente */}
        <button className="text-gray-500 hover:text-gray-700 text-xl px-2" onClick={() => setVisible(false)}>
          ×
        </button>
      </div>
    </div>
  );
};

export default MessageAlert;
