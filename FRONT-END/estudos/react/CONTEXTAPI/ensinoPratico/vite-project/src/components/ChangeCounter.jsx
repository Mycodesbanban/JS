// Alterando contexto

import { useContext } from "react"; //usado para mudar o contexto

import CounterContext from "../Context/CounterContext"


const ChangeCounter = () => {
    const {counter,setCounter} = useContext(CounterContext)
  return (
    <div>
        <button onClick={()=> setCounter(counter+1)}>Add value to counter</button> 
        {/* cada vez que clicamos ele muda o estado adicionando +1 */}
    </div>
  )
}

export default ChangeCounter