import { useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'
import Title from './components/Title'


function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitle = false;



  return (
    <div className='App'>
      {/* css global */}
      <h1>hello css style</h1>

      {/* css de component  */}
      <Mycomponent/>
      <p>esse parágrafo e do App.jsx</p> 
      {/* vai pegar o estilo do mycomponent , isso acontece por que ele vaz , simplificando e por que estamos usando no estilo o p , mas deviriamos ter usado classe para focar apenas em um elemento */}
      {/* inline css */}

      <p style={{color:"blue" , padding:"25px" , borderTop:"solid 2px red"}}>esse elemento foi ultilizado de forma inline</p> 
      {/* No react o style não aceita string  , em  vez disso ele esperar um objeto em js , o primeiro {} e para indicar que vamos usar o js , e o segundo {} e para indicar que vamos usar objeto em js que contém estilos , no js não podemos usar o - para as propriedades de estilo , por que seria interpretado como um operador de subtração , então ultilizamos o formato camelCase:borderTop */}

      {/* inline css dinamico*/}
      <h2 style={n < 10 ? ({color:"purple"}):({color:"red"})}>Css dinamico</h2> 
      {/* criamos uma variavel  , e definimos se n for menor que 10 vai retorna a color roxa para o titulo e caso seja maior que 10 vai retornar a cor vermelha */}
      <h2 style={n > 10 ? ({color:"blue"}):({color:"ciano"})}>Css dinamico 2</h2>
      {/* criamos uma variavel , e definimo se for maior que 10 vai receber blue e se for menor que 10 vai receber ciano */}
      <h2 style={name === "Matheus" ? ({color:"gray"}): ({color:"green"})}>hahaha</h2>
      {/* criamos uma constante que recebe o nome matheus e definimos que se ele for exatamente igual ao nome matheus vai retorna a cor gray e caso não for vai retorna green */}

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" :"title"}>este titulo vai ter classe dinamica</h2>
      {/* estamos colocando uma classe que recebe uma variavel caso essa variavel for verdadeira vai retorna o red-title (nome da classe com estilo) e casso for falsa vai retornar o title(nome da classe com estilo)*/}

      {/* css modules */}
      <Title/>
   
    </div>
    
  )
}

export default App
