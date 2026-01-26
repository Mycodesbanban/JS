// import { count } from 'moongose/models/user_model'
import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {

// use ref -1

const numberRef = useRef(0)
const [counter, setCounter] = useState(0)
const [counterB, setCounterB] = useState(0)

useEffect(()=>{
  numberRef.current = numberRef.current +1
})


// useref com dom -2
  const inputRef = useRef()
  const [text, setText] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setText("")
    inputRef.current.focus()
  }
  return (
    <div>
        
        <h2>UseRef</h2>
        <p>O components renderizou:{numberRef.current} vezes </p>
        <p>Counter 1: {counter}</p>
        <button onClick={()=> setCounter(counter+1)}>Contador A</button>
        <p>Counter 2:{counterB}</p>
        <button onClick={()=> setCounterB(counterB+1)}>Contador A</button>
        {/* dom */}
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} value={text} onChange={(e)=> setText(e.target.value)}/> {/* liga o ref para o input, passando a ter acesso direto ao input  */}
          
          <input type="submit"  value="enviar"/>
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef