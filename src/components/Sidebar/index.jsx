import React, {useState}  from "react";
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

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToogleSubmenu, setIsToggleSubmenu] = useState(false);

  const isOpenSubMenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToogleSubmenu);
  }

  return (
    <>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
        <Link to="/">
          <div className="logoWrapper py-2 px-4">
            <img src={Logo} className="w-100" />
          </div>
        </Link>

        <div className="sidebarTabs">
          <ul className="flex gap-3 flex-col pl-0">
            <li>
              <Button className={`w-100 ${activeTab === 0 ? 'active' : '' } justify-start gap-2 flex items-center`} onClick={() => isOpenSubMenu(0)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md ">
                  <PeopleAltIcon />
                </span>
                Pacientes
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            
            </li>

         
          </ul>

          <ul className="pl-0">
            <li className={`${activeTab === 1 && isToogleSubmenu === true ? 'colapse' : 'colapsed'}`}>
              <Button className={`w-100 ${activeTab === 1 ? 'active' : '' }`} onClick={() => isOpenSubMenu(1)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <NoteAddIcon />
                </span>
                Cadastros
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>

              <div className="submenu">
              <Button className="w-100">
                 Dados Pessoais
              </Button>
              <Button className="w-100">
                 Dados Serviços Sociais
              </Button>
              <Button className="w-100">
                 Dados Pré-Natais
              </Button>
              <Button className="w-100">
                 Dados Neonatais
              </Button>
              
              </div>
            </li>
          </ul>

          <ul className="pl-0">
            <li>
              <Button className={`w-100 ${activeTab === 2 ? 'active' : '' } justify-start gap-2 flex items-center`} onClick={() => isOpenSubMenu(2)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <SearchIcon />
                </span>
                Consultas
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            </li>
          </ul>

          <ul className="pl-0">
            <li>
              <Button className={`w-100 ${activeTab === 3 ? 'active' : '' } justify-start gap-2 flex items-center`} onClick={() => isOpenSubMenu(3)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <ContentPasteIcon />
                </span>
                Agenda
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            </li>
          </ul>

          <ul className="pl-0">
            <li>
              <Button className={`w-100 ${activeTab === 4 ? 'active' : '' } justify-start gap-2 flex items-center`} onClick={() => isOpenSubMenu(4)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <TimelineIcon />
                </span>
                Relatórios
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            </li>
          </ul>

          <ul className="pl-0">
            <li>
              <Button className={`w-100 ${activeTab === 5 ? 'active' : '' } justify-start gap-2 flex items-center`} onClick={() => isOpenSubMenu(5)}>
                <span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md">
                  <SettingsIcon />
                </span>
                Ferramentas
                <span className="arrow ml-auto w-[20px] h-[20px] flex items-center justify-center">
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
