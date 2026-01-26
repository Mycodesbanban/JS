import React from 'react'
import { useCallback, useState } from 'react'
import List from './List'
const HookUseCallback = () => {

    const [counter, setCounter] =useState(0)
    const getItemsFromDatabase=useCallback(()=>{
        return ["a", "b" , "c"]
    },[]) // agora a funcao nao e mais ativada
    
  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDatabase}/>
        <button onClick={()=> setCounter(counter+1)}>Alterar um valor </button>
        <p>{counter}</p>
        <hr />
    </div>

  )
}

export default HookUseCallback