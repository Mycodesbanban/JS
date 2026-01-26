import React from 'react'
import { useState } from 'react'
const HookUseState = () => {
    // usestate-1 
    let userName ="jonas "
    const [name , setName] = useState("matheus")

   const changeName = () =>{
    // userName="nuem"
    setName("piranha da jsk")
   }

  //  usestate com input -2

  const [age, setAge] = useState(18)

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(`voce tem ${age} anus `)
  }

  return (
    <div>
        {/* usestate-1 */}
        <h2>useState</h2>
        <p>Variavel {userName}</p>
        <p>UseState:{name}</p>
        <button onClick={changeName}></button>
    {/* useState com input -2 */}
    <form onSubmit={handleSubmit}>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
      <input type="submit" value="enviar" />
    </form>
    <p>voce tem {age} anos</p>
    <hr />
    
    </div>
  )
}

export default HookUseState