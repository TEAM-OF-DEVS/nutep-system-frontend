import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SearchIcon from '@mui/icons-material/Search';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import TimelineIcon from '@mui/icons-material/Timeline';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
        <Link to="/">
          <div className="logoWrapper py-3 px-3">
            <img src={Logo} className="w-100" />
          </div>
        </Link>

        <div className="sidebarTabs pl-4 mt-4 bg-green-600">
                <Button  className="text-white w-100 justify-start gap-2"><span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md"><PeopleAltIcon /></span>
                   Pacientes
                </Button>
        </div>

        <div className="sidebarTabs pl-4 mt-4 bg-green-600">
                <Button  className=" text-white w-100 justify-start gap-2"><span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md"><NoteAddIcon /></span>
                    Cadastros
                </Button>
        </div>

        <div className="sidebarTabs pl-4 mt-4 bg-green-600">
                <Button className=" text-white w-100 justify-start gap-2"><span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md"><SearchIcon /></span>
                    Consultas
                </Button>
        </div>

        <div className="sidebarTabs pl-4  mt-4 bg-green-600 font-bold">
                <Button className=" text-white w-100 justify-start gap-2"><span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md"><ContentPasteIcon /></span>
                    Agenda
                </Button>
        </div>

        <div className="sidebarTabs pl-4  mt-4 bg-green-600">
                <Button className=" text-white w-100 justify-start gap-2"><span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-md"><TimelineIcon /></span>
                    Relatórios
                </Button>
        </div>


      </div>
    </>
  );
};

export default Sidebar;
