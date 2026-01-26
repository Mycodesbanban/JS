import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import './App.css'
import {HookUseContext} from "./components/HookUseContext"
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>  
    <h1>React Hooks</h1>
      <HookUseContext>
        <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
          <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

export default App
