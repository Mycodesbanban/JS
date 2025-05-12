import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(true)
  return (
    <div>
        <h1>Isso será exibido?</h1>
         {/* Renderização condicional usando o operador && */}
            {/* Se 'x' for true, o parágrafo será renderizado. Caso contrário, nada será renderizado. */}
        {x && <p>se X for true ,Sim</p>}
        x = true:

    true && <p>se X for true, Sim</p> → O parágrafo será renderizado.

    x = false:

    false && <p>se X for true, Sim</p> → O parágrafo não será renderizado.
    </div>
  )
}

export default CondicionalRender