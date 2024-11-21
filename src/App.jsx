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
                <Route path="/" exact={true} element={[<Header />, <Home />]} />
                <Route path="/dados-pre-natais" exact={true} element={[<Header />, <FormCadastroDadosPreNatais />]} />
                <Route path="/dados-pessoais" exact={true} element={[<Header />, <FormCadastroDadosPessoais />]} />
                <Route path="/servico-social" exact={true} element={[<Header />, <FormServicoSocial />]} />
                <Route path="/dados-neonatais" exact={true} element={[<Header />, <FormCadastroDadosNeonatais />]} />
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
