import React from 'react'
import { useEffect, useState } from 'react'
const HookUseEffect = () => {
// UseEffect sem dependenccia

    const [number, setNumber] = useState(1)
    const changeSomething =() =>{
        setNumber(number +1 )
    } 

    useEffect(() =>{
        console.log("Maycon")
    }) // sempre que o componente rederizar ele vai ter sua execucao novamente

    // useEffct com array de dependencias vazio

     useEffect(() =>{
        console.log("maysa delicia")
    },[]) // ele e executado somente quando o site carrega uma vez 

    // useEffect com array de dependencias
    const [anoterNumberSand, setNumbersad]= useState(0)
    useEffect(()=>{
        console.log("Julia fede a peixe podre e a bacalhau mal lavado por motivos de mal higieni")
    },[anoterNumberSand]) // ele e executado de acordo com a mudanca de um valor especifico

    // limpeza do useEffect

    // useEffect(()=>{
    //     const time = setTimeout(()=>{
    //         console.log("QUERO CAGAR NO SULLL, MORAR EM NOVA IGUASUL, CHUPA MANGA COM O SAL, PEGA PEGA NO BILAU")
    //         setNumbersad(anoterNumberSand + 1)
    //     },2000)
    //      return () => clearTimeout(time) // a funcao acaba quando muda de pagina 
    // },[anoterNumberSand])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number:{number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <p>AnoterNumber {anoterNumberSand}</p>
       <button onClick={() => setNumbersad(anoterNumberSand + 1.5)}>gat</button>

        <hr/>
    </div>
  )
}

export default HookUseEffect