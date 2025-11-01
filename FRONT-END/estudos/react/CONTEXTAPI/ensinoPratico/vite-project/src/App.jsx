import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { CounterContextProvider } from './Context/CounterContext'

function App() {
  return (
    <div className='app'>
      <h1>Context</h1>
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App