import "./CreateForm.css"
import { useState } from "react"
const GereciamentoDados = () => {
    // gerenciamento de dados
    const [name , setName] = useState()
    const [email , setEmail] = useState()

    const handleName = (e)=>{
       setName(e.target.value) // captura o codigo digitado na caixa de entrada , e exibe na 
    }
    console.log(name) // mostra no console a variavel name
    console.log(email)

  return (
    <div>
         <form>
            <div>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" placeholder="digite seu nome" onChange={handleName}/>  

            </div>
            <label >
              <span>email</span>
              <input type="email" name="email" placeholder="digite seu email" onChange={(e)=> setEmail(e.target.value)} /> 
              {/* colocando o a função onChange diretamente no email */}
            </label>
            <input type="submit" value="enviar" /> 
      
        </form>
    </div>
  )
  //onChange(): é um evento que é acionado quando o valor de um campo de entrada muda

}

export default GereciamentoDados