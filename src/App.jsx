import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../src/pages/Home'
 import Login from '../src/pages/Login'
 // import Cadastrar from '../src/pages/Cadastrar'
// import Produtos from '../src/pages/Produtos'
// import Agendar  from '../src/pages/Agendar'
// import PaginaDeAdm from '../src/pages/PaginaDeAdm'
// import ProdutosAgendadosADM from '../src/pages/ProdutosAgendadosADM'
// import ProdutosAgendadosUSER from '../src/pages/ProdutosAgendadosUSER'


function App() {
  
  return (
    <>

      <BrowserRouter>
      <Routes>
    
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
         <Route index element={<Home/>} />
      {/* <Route path="/Cadastrar" element={<Cadastrar/>} />
      
      <Route path="/Produtos" element={<Produtos/>} />
      <Route path="/Agendar" element={<Agendar/>} />
      <Route path="/PaginaDeAdm" element={<PaginaDeAdm/>} />
      <Route path="/ProdutosAgendadosADM" element={<ProdutosAgendadosADM/>} />
      <Route path="/ProdutosAgendadosUSER" element={<ProdutosAgendadosUSER />} /> */}
      </Routes>
      </BrowserRouter>

   </>
  )
}

export default App


