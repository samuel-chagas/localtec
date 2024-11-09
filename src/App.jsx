import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home      from '../src/pages/Home'
import Login     from '../src/pages/Login'
import Cadastrar from '../src/pages/Cadastrar'
import Produtos from '../src/pages/Produtos'


function App() {
  
  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Cadastrar" element={<Cadastrar/>} />
      <Route path="/Produtos" element={<Produtos/>} />
    
      </Routes>
      </BrowserRouter>

   </>
  )
}

export default App


