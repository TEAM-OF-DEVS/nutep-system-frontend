import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SearchIcon from "@mui/icons-material/Search";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TimelineIcon from "@mui/icons-material/Timeline";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from "@mui/icons-material/Settings";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubMenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  const Menus = [
    { title: "Pacientes", icon: <PeopleAltIcon />, subMenu: ["Prontuário", "Histórico"] },
    { title: "Cadastros", icon: <NoteAddIcon />, subMenu: ["Dados Pessoais", "Dados Serviços Sociais", "Dados Pré-Natais", "Dados Neonatais"] },
    { title: "Consultas", icon: <SearchIcon />, subMenu: ["Consulta inicial Pediátrica", "Consulta inicial Neurologia", "Consulta de Retorno"] },
    { title: "Agenda", icon: <ContentPasteIcon />, subMenu: ["Criar Agenda", "Bloqueio de Agenda"] },
    { title: "Relatórios", icon: <TimelineIcon />, subMenu: ["Pacientes", "Atendimentos"] },
    { title: "Ferramentas", icon: <SettingsIcon />, subMenu: ["Mudar Senha", "Criar cadastro/Login", "Modo escuro/claro", "Sair"] },
  ];

  return (
    <div className={`sidebar ${open ? '' : 'collapsed'} top-0 left-0 z-50 bg-emerald-950 pt-8 relative transition-all duration-300 ease-in-out h-full`}>
      <button
        className="absolute cursor-pointer -right-4 top-9 w-8 h-8 p-1 bg-white border-2 border-white rounded-full text-black flex items-center justify-center transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        {open ? <TbLayoutSidebarLeftCollapse /> : <TbLayoutSidebarLeftExpand />}
      </button>

      {open && (
        <div className="logo-container">
        <Link to="/dashboard">
          <img src={Logo} alt="logo" className="w-full max-w-[180px] rounded-full" />
        </Link>
      </div>
      )}

      <ul className="menu-list pt-3 space-y-2">
        {Menus.map((menu, index) => (
          <li key={index}>
            <Button className="flex items-center gap-2 text-white bg-red-" onClick={() => toggleSubMenu(index)}>
              {menu.icon}
              {open && <span>{menu.title}</span>}
              {menu.subMenu && (
                <span className="ml-auto arrow flex">
                  {submenuOpen === index ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </Button>
            {open && menu.subMenu && submenuOpen === index && (
              <div className="flex flex-col">
                {menu.subMenu.map((subMenu, subIndex) => (
                  <Link
                    key={subIndex}
                    to={
                      subMenu === "Sair" ? "/" :
                      subMenu === "Dados Pessoais" ? "/dashboard/dados-pessoais" :
                      subMenu === "Dados Serviços Sociais" ? "/dashboard/servico-social" :
                      subMenu === "Dados Pré-Natais" ? "/dashboard/dados-pre-natais" :
                      subMenu === "Dados Neonatais" ? "/dashboard/dados-neonatais" :
                      "#"
                    }
                    className="text-white block p-2 no-underline font-bold"
                  >
                    {subMenu}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;