import { useState } from 'react'
import './App.css'
import CreateForm from './components/CreateForm'
import GereciamentoDados from './components/GereciamentoDados'
import EnviodeFormulario from './components/EnviodeFormulario'
import ControlledInputs from './components/ControlledInputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* criandos formularios  */}
     <h2>Formularios</h2>
     <CreateForm/>
     {/* gerenciamento de dados */}
     <GereciamentoDados/>
     {/* envio de formularios */}
     <EnviodeFormulario/>
     {/* controlled Inputs */}
     <ControlledInputs user={{name:"Josias" , email:"Josias.com@gmail.comBosta"}}/>
    </>
  )
}

export default App
