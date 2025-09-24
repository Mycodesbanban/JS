import { useState } from 'react'
import './App.css'


// 1- importando os pacotes do react router
import {BrowserRouter, Routes , Route } from "react-router-dom" 

// importando as paginas
import Home from './pages/Home' 
import About from './pages/About'

// 2-Importando o NavBar.jsx no app.jsx
import NavBar from './components/NavBar'
import Produto from './pages/Produto'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import SearchPage from './pages/SearchPage'



function App() {


  return (
    <>
      <div>
        <h1>hello word</h1>
        {/* defindindo a aréa onde nosso app vai trocar as paginas  */}
        <BrowserRouter>
        {/* Adicionando o navBar */}
        <NavBar/>
        {/* 9- buscas  */}
        <SearchForm/>

        {/* define as rotas */}
        <Routes>
          {/* defindindo a rota de sua navegação */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* parth:Define o caminho (URL) que será associado a essa rota */}
          {/* element:Define qual componente React será renderizado quando essa rota for acessada */}

          {/* 4-rota dinamica */}
          <Route path='/produtos/:id' element={<Produto/>}></Route>

          {/* 6- nested routes */}
            <Route path='/produtos/:id/info' element={<Info/>}></Route>

            {/* 9-search */}
            <Route path='/busca' element={<SearchPage/>}></Route>

            {/* 10- redirecionamento de URL */}
            {/* redireciona automaticamente o usuário da rota /company para a rota /about */}
            <Route path='/company' element={<Navigate to="/about"/>}/>

          {/* 7- no match route */}
          {/* quando o caminho não for encontradi (*) vai carrega essa pagina  */}
          <Route path='*' element={<NotFound/>} />

        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

// SPA/Single Page Applicationss:aplicações web que interagem com o usuário atualizando dinamicamente a página atual, ao invés de carregar novas páginas inteiras do servidor
