import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SearchIcon from "@mui/icons-material/Search";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isOpenSubMenu = (index) => {
    if (submenuOpen === index) {
      setSubmenuOpen(null);
    } else {
      setSubmenuOpen(index);
    }
    setActiveTab(index);
  };

  return (
    <>
      <Button
        className="md:hidden p-2 text-white fixed top-2 left-2 z-[101]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
     
      <div
        className={`sidebar fixed top-0 left-0 z-[100] w-[15%] h-screen bg-emerald-950 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-[15%]`}
      >
        <Link to="/dashboard">
          <div className="logoWrapper py-2 px-4">
            <img src={Logo} className="w-100" alt="Logo" />
          </div>
        </Link>

        <div className="sidebarTabs">
          <ul className="flex gap-3 flex-col pl-0">
            <li className={`${submenuOpen === 0 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 0 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(0)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md ">
                  <PeopleAltIcon />
                </span>
                Pacientes
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 0 ? 'open' : ''}`}>
                <Button className="w-100">
                  Prontuário
                </Button>
                <Button className="w-100">
                  Histórico
                </Button>
              </div>
            </li>

            <li className={`${submenuOpen === 1 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 1 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(1)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <NoteAddIcon />
                </span>
                Cadastros
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 1 ? 'open' : ''}`}>
                <Link to="/dashboard/dados-pessoais">
                  <Button className="w-100">
                    Dados Pessoais
                  </Button>
                </Link>
                <Link to="/servico-social">
                  <Button className="w-100">
                    Dados Serviços Sociais
                  </Button>
                </Link>
                <Link to="/dados-pre-natais">
                  <Button className="w-100">
                    Dados Pré-Natais
                  </Button>
                </Link>
                <Link to="/dados-neonatais">
                  <Button className="w-100">
                    Dados Neonatais
                  </Button>
                </Link>
              </div>
            </li>

            <li className={`${submenuOpen === 2 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 2 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(2)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <SearchIcon />
                </span>
                Consultas
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 2 ? 'open' : ''}`}>
                <Button className="w-100">
                  Consulta inicial Pediátrica
                </Button>
                <Button className="w-100">
                  Consulta inicial Neurologia
                </Button>
                <Button className="w-100">
                  Consulta de Retorno
                </Button>
              </div>
            </li>

            <li className={`${submenuOpen === 3 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 3 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(3)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <ContentPasteIcon />
                </span>
                Agenda
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 3 ? 'open' : ''}`}>
                <Button className="w-100">
                  Criar Agenda
                </Button>
                <Button className="w-100">
                  Bloqueio de Agenda
                </Button>
              </div>
            </li>

            <li className={`${submenuOpen === 4 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 4 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(4)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <TimelineIcon />
                </span>
                Relatórios
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 4 ? 'open' : ''}`}>
                <Button className="w-100">
                  Pacientes
                </Button>
                <Button className="w-100">
                  Atendimentos
                </Button>
              </div>
            </li>

            <li className={`${submenuOpen === 5 ? 'colapse' : 'colapsed'}`}>
              <Button
                className={`w-100 ${activeTab === 5 ? 'active' : ''} gap-2`}
                onClick={() => isOpenSubMenu(5)}
              >
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <SettingsIcon />
                </span>
                Ferramentas
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className={`submenu ${submenuOpen === 5 ? 'open' : ''}`}>
                <Button className="w-100">
                  Mudar Senha
                </Button>
                <Button className="w-100">
                  Criar cadastro/Login
                </Button>
                <Button className="w-100">
                  Modo escuro/claro
                </Button>

                <Link to="/">
                  <Button className="w-100">
                    Sair
                    <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                      <LogoutSharpIcon />
                    </span>
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </Button>
    </>
  );
};

export default Sidebar;