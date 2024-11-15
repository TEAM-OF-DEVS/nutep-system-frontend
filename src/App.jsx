import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/index.jsx';
import { Header } from './components/Header/index.jsx';
import { FormServicoSocial } from './pages/FormServicoSocial/index.jsx';
import { FormCadastroDadosPessoais } from './pages/FormCadastroDadosPessoais/index.jsx';
import { FormCadastroDadosPreNatais } from './pages/FormCadastroDadosPreNatais/index.jsx';

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
                <Route path="/" exact={true} element={<Header />} />
              </Routes>
              {/* <FormServicoSocial /> */}
              <FormCadastroDadosPreNatais />
              {/* <FormCadastroDadosPessoais/> */}
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
