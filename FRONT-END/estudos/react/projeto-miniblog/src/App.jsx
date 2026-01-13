import './App.css'
import {BrowserRouter , Routes , Route , Link, Navigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth' // mapeia se a autenticacao do usuario foi feita com sucesso
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication.jsx'
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Createpost from './pages/CreatePost/Createpost.jsx'

// contexto
import {AuthProvider , useAuthValue}from "./context/AuthContext.jsx"
function App() {
  const [user , setUser] = useState(undefined)
  const {auth}= useAuthentication()
  const loadingUser = user === undefined
  useEffect(()=>{
    onAuthStateChanged(auth,(user) =>{
      setUser(user)
    })
  }, [auth])


  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <> 
    <div className='App'>
      <AuthProvider value={{user}}>
    <BrowserRouter>
    <NavBar/>
    <div className="container">
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Login" element= {!user ? <Login/> : <Navigate to="/"/>}/>
      <Route path="/Register" element={!user ? <Register/> : <Navigate to="/"/>}/>
      <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
      <Route path="/posts/create" element={user ? <Createpost/> : <Navigate to="/login"/>}/>
    
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
      </AuthProvider>
    </div>
    </>
  )
}

export default App
