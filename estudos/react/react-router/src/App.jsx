import { useState } from 'react'
import './App.css'


// 1- importando os pacotes do react router
import {BrowserRouter, Routes , Route } from "react-router-dom" 

// importando as paginas
import Home from './pages/Home' 
import About from './pages/About'

// 2-Importando o NavBar.jsx no app.jsx
import NavBar from './components/NavBar'



function App() {


  return (
    <>
      <div>
        <h1>hello word</h1>
        {/* defindindo a aréa onde nosso app vai trocar as paginas  */}
        <BrowserRouter>
        {/* Adicionando o navBar */}
        <NavBar/>
        {/* define as rotas */}
        <Routes>
          {/* defindindo a rota de sua navegação */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* parth:Define o caminho (URL) que será associado a essa rota */}
          {/* element:Define qual componente React será renderizado quando essa rota for acessada */}
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

// SPA/Single Page Applicationss:aplicações web que interagem com o usuário atualizando dinamicamente a página atual, ao invés de carregar novas páginas inteiras do servidor
