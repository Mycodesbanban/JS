import { useState } from 'react'  // Importa o hook useState da biblioteca React.
import reactLogo from './assets/react.svg' // vem de dentro da pasta do projeto
import viteLogo from '/vite.svg' // vem da raiz do projeto (por isso começa com /).
import './App.css' // importa o Css 
import FristComponent from './components/FirstComponent'

function App() { // criar uma função  app
  const [count, setCount] = useState(0) // Dentro dele, é declarado um estado count com valor inicial 0

  return (
    <> 
     {/* Retorna um fragmento <>...</>, que agrupa elementos sem criar uma div */}
     <h1>fundamentos React</h1> 
     <FristComponent/>
     {/* titulo */}
    </>
  )
}

export default App

// useState:que possibilita aos desenvolvedores adicionar estado a componentes funcionais

// hook:Os Hooks são funções especiais que permite que você use o estado e outros recursos do React em componentes funcionais.
