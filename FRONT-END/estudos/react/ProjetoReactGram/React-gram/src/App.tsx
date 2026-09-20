import { useState } from 'react'
import {Routes, Route, Navigate  } from 'react-router-dom'

import { useAuth } from './hooks/useAuth.tsx'

import Home from "./Pages/Home/Home.tsx"
import Login from "./Pages/Auth/Login.tsx"
import Register from "./Pages/Auth/Register.tsx"
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'


import './App.css'
import EditProfile from './Pages/EditProfile/EditProfile.tsx'

function App() {
  // const [count, setCount] = useState(0)

  const {auth, loading} = useAuth()
  console.log(loading)
  
  if(loading){
    return <p>Carregando...</p>
  }


  return (
    <>
     <div>
      <NavBar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={auth ? <Home/> : <Navigate to="/login"/> }/>
        <Route path='/login' element={!auth ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/register' element={!auth ? <Register/> : <Navigate to='/'/>}/>
        <Route path='/profile' element={auth ? <EditProfile/> : <Navigate to='/login'/>}/>
      </Routes>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
