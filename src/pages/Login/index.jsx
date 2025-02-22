import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import db from '../../../db.json';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = db.usuários.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login bem-sucedido!");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const handleResetPassword = () => {
    const user = db.usuários.find((u) => u.email === email);
    if (user) {
      user.password = newPassword;
      alert("Senha redefinida com sucesso!");
      setIsResetPassword(false);
    } else {
      alert("E-mail não encontrado");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 mt-8 mb-8">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-8 bg-emerald-950 flex flex-col items-center rounded-lg shadow-lg">
        <div className="w-full flex items-center justify-center mb-8">
          <img src={Logo} className="w-32 sm:w-40 md:w-48" alt="Logo" />
        </div>

        {isResetPassword ? (
          <div className="w-full flex flex-col mb-6">
            <label className="mb-2 font-bold text-sm text-white flex items-center">
              <EmailIcon className="mr-2" />
              E-mail
            </label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <>
            {isSignUp && (
              <div className="w-full flex flex-col mb-6">
                <label className="mb-2 font-bold text-sm text-white flex items-center">
                  <PersonIcon className="mr-2" />
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="w-full flex flex-col mb-6">
              <label className="mb-2 font-bold text-sm text-white flex items-center">
                <EmailIcon className="mr-2" />
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col mb-6">
              <label className="mb-2 font-bold text-sm text-white flex items-center">
                <LockIcon className="mr-2" />
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {isSignUp && (
              <div className="w-full flex flex-col mb-6">
                <label className="mb-2 font-bold text-sm text-white flex items-center">
                  <LockIcon className="mr-2" />
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </>
        )}

        <button
          type="button"
          onClick={isResetPassword ? handleResetPassword : handleLogin}
          className="w-full text-white bg-green-700 hover:bg-green-800 font-bold rounded-lg text-sm px-5 py-2.5 transition"
        >
          {isResetPassword ? "Redefinir Senha" : isSignUp ? "Cadastrar" : "Entrar"}
        </button>

        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => {
              if (isResetPassword) {
                setIsResetPassword(false);
              } else {
                setIsSignUp(!isSignUp);
              }
            }}
            className="text-white font-bold text-sm hover:underline"
          >
            {isResetPassword
              ? "Voltar para login"
              : isSignUp
              ? "Já tem uma conta? Entrar"
              : "Esqueceu sua senha?"}
          </button>
        </div>
      </div>
    </div>
  );
}
