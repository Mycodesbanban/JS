import { useState } from "react"
import "./CreateForm.css"
import { set } from "lodash"
const EnviodeFormulario = () => {
    const handleSubmit= (evento) =>{ // criando uma função arrow que recebe como parametro o evento
        evento.preventDefault() // o evento vai parar o comportamento padrão dos navegadores
        console.log("enviando o formulario") // mostra no console
        setName("")
        setEmail("")
        
    }
  const [bio , setBio] = useState("")
  const [ role ,setRole] = useState("")
  console.log(role)
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            {/* chamando a função apois enviar o formulario */}
            <div>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" placeholder="digite seu nome" />  

            </div>
            <label >
              <span>email</span>
              <input type="email" name="email" placeholder="digite seu email"/> 
            </label>
            <label>
              <span>bio:</span>
              {/* textarea */}
              <textarea name="bio" placeholder="Descrição do usuario" onChange={e => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* select input */}
           <label>
            <span>Função do sistema:</span>
              <select name="roles" onChange={(e) => setRole(e.target.value)}>
                <option value="usuario">usuario</option>
                <option value="editor">editor</option>
                <option value="admin">admin</option>
              </select>
           </label>
            <input type="submit" value="enviar" /> 
      
        </form>
    </div>
  )
//.onSubmit(): é acionado quando o formulario e enviado

//.preventDefault(): é usado para impedir o comportamento padrão do formulario
}

export default EnviodeFormulario
