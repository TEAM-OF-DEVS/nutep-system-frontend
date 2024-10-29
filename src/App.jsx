import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const MyContext = createContext();

function App() {

  const values={}

  return (
    <>
    <BrowserRouter>
      <MyContext.Provider value={values}>
      <section className='main flex'>
       <div className='sidebarWrapper w-[20%]'>
     
       </div>

       <div className='content_Right w-[80%]'>
        <Routes>
          <Route path="/" exact={true} element={"Hello Nutep"}/>
        </Routes>
       </div>
    </section>
      </MyContext.Provider>
    </BrowserRouter>
  
    </>
  )
}

export default App
