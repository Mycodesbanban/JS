import { useState } from 'react'
import './App.css'
import CreateForm from './components/CreateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* criandos formularios  */}
     <h2>Formularios</h2>
     <CreateForm/>
    </>
  )
}

export default App
