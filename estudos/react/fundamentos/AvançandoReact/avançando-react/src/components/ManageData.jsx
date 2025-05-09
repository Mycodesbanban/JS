import { useState } from "react"; //importando o hook useState do react

const ManageData = () => {
    
    let someData = 10;
    console.log(someData)

    const [number , setNumber] = useState(15);
    // Declarando um state chamado number e uma função para atualizá-lo chamada setNumber
    // O valor inicial do state é 15

  return (
    <div>
        <div>
            <p>valor:{someData}</p>
                {/* Botão que altera o valor da variável someData para 15 */}
                {/* Observe que isso NÃO atualiza o componente, pois someData não é um state */}
            <button onClick={()=> (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>valor:{number}</p>
               {/* Botão que altera o valor do state number para 25 */}
                {/* Como number é um state, a interface será atualizada quando o valor mudar */}
            <button onClick={()=> setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData