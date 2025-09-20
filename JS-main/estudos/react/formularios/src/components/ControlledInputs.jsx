import { useState } from "react"

const ControlledInputs = ({user}) => { //pegando o useer do arquivo principal
    // gerenciamento de dados
    const [name , setName] = useState(user ? user.name:"") // pegando o nome do user caso for verdadeiro
    const [email , setEmail] = useState(user ? user.email:"") // pegando o email do user caso for verdadeiro
    
    const handleName = (e)=>{
       setName(e.target.value)
    }
  return (
    <div>
         <form>
            <div>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" placeholder="digite seu nome" onChange={handleName} value={name}/>  
                {/* acessando o valor do estado da variavel name */}
                

            </div>
            <label >
              <span>email</span>
              <input type="email" name="email" placeholder="digite seu email" onChange={(e)=> setEmail(e.target.value)} value={email}/> 
              {/* acessando o valor do estado da variavel email */}
            </label>
            <input type="submit" value="enviar" /> 
      
        </form>
    </div> 
 
  )
  }
// ControlledInputs(input controlado): um input controlado é aquele cujo valor é gerenciado pelo estado do componente , isso significa que O valor do input é controlado pelo estado (useState)
// A atualização do valor do input é feita por meio de um evento onChange, que modifica o estado


export default ControlledInputs