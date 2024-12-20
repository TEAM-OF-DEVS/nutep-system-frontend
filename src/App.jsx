import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/index.jsx';
import { Header } from './components/Header/index.jsx';
import { FormServicoSocial } from './pages/FormServicoSocial/index.jsx';
import { FormCadastroDadosPessoais } from './pages/FormCadastroDadosPessoais/index.jsx';
import { FormCadastroDadosPreNatais } from './pages/FormCadastroDadosPreNatais/index.jsx';
import { Home } from './pages/Home/index.jsx';
import { FormCadastroDadosNeonatais } from './pages/FormCadastroDadosNeonatais/index.jsx';

const MyContext = createContext();

function App() {

  const values = {}

  const routes = [
    { path: '/', component: <Home /> },
    // { path: '/', component: <FormCadastroDadosPessoais /> },
    { path: '/dados-pessoais', component: <FormCadastroDadosPessoais /> },
    { path: '/dados-pre-natais', component: <FormCadastroDadosPreNatais /> },
    { path: '/servico-social', component: <FormServicoSocial /> },
    { path: '/dados-neonatais', component: <FormCadastroDadosNeonatais /> },
  ]

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className='main flex '>
            <div className='sidebarWrapper w-[15%]'>
              <Sidebar />
            </div>

            <div className='content_Right w-[85%]'>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={true} element={[<Header />, route.component]} />
                ))}
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
