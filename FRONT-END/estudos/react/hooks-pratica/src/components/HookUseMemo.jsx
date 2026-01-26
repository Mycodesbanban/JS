import {useState, useEffect,useMemo,} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    const premiumNumbers = useMemo(()=>{
        return ["0", "100", "200"] // salva os resultados, e evita que os calculos dentro dele seja refeito em cada renderizacao
    },[])

    useEffect(()=>{
        console.log("os premiumNumbers foram alterados")
    },[premiumNumbers])
  return (
    <div>
        <h2>UseMemo</h2>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>ACERTOU O NUMERO</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo