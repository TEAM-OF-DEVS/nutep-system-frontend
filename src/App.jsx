import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/index.jsx";
import { FormServicoSocial } from "./pages/FormServicoSocial/index.jsx";
import { FormCadastroDadosPessoais } from "./pages/FormCadastroDadosPessoais/index.jsx";
import { FormCadastroDadosPreNatais } from "./pages/FormCadastroDadosPreNatais/index.jsx";
import { FormCadastroDadosNeonatais } from "./pages/FormCadastroDadosNeonatais/index.jsx";
import Login from "./pages/Login/index.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const MyContext = createContext();

function App() {
  const [open, setOpen] = useState(true);

  const values = {};

  const routes = [
    {path: "dashboard", component: <Dashboard/>},
    { path: "dados-pessoais", component: <FormCadastroDadosPessoais /> },
    { path: "dados-pre-natais", component: <FormCadastroDadosPreNatais /> },
    { path: "servico-social", component: <FormServicoSocial /> },
    { path: "dados-neonatais", component: <FormCadastroDadosNeonatais /> },
  ];

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/dashboard/*"
              element={
                <div className="flex">
                  <Sidebar setOpen={setOpen} open={open} />

                  <div
                    className={`flex-1 transition-all duration-300 ${
                      open ? "ml-64" : "ml-20"
                    }`}
                  >
                    
                    <Routes>
                      <Route index element={<Dashboard/>}/>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          exact={true}
                          element={route.component}
                        />
                      ))}
                    </Routes>
                  </div>
                </div>
              }
            />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}


export default App;