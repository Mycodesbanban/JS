import { useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* css global */}
      <h1>hello css style</h1>
      {/* css de component  */}
      <Mycomponent/>
      <p>esse parágrafo e do App.jsx</p> 
      {/* vai pegar o estilo do mycomponent , isso acontece por que ele vaz , simplificando e por que estamos usando no estilo o p , mas deviriamos ter usado classe para focar apenas em um elemento */}
    </div>
    
  )
}

export default App
