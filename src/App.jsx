import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/index.jsx';
import { Header } from './components/Header/index.jsx';
import { Form } from './pages/Form/index.jsx';
import { Atendimento } from './pages/Atendimento/index.jsx';
import { DadosServicoSocial } from './pages/DadosServicoSocial/index.jsx';
import { SituacaoFamiliar } from './pages/SituacaoFamiliar/index.jsx';
import { ABEPClasseSocial } from './pages/ABEPClasseSocial/index.jsx';


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
              <DadosServicoSocial />
              <SituacaoFamiliar />
              <ABEPClasseSocial />
              <Atendimento />
              <Form />
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
