
import React from 'react'
import { useReducer, useState } from 'react'

// user reducer-1

const HookUseReducer = () => {
    // user reducer-1
    const [number, dispatch] = useReducer((state, action)=>{
        return Math.random(state)
    })

    // usereducer com action -2

    const inicialTaks = [
        {
            id:1, text:"fazer coco e bom mas so na hora de cagar "
        },
        {
            id:2 , text:"I dont like youu baby"
        }
    ] // taks 
    
    const taskReducer = (state, action) =>{
        switch(action.type ){ 
            case "ADD": //representa a acao de adicionar 
            const newTask = {
                 id:Math.random(),
                 text:taskText // quando adicionar vai colocar um novo id e um novo texto
            }
            setTasktext("") // vazio

            return[...state,newTask ] // retorna as taks de antes e as novas

            case "DELETE":
                return state.filter((taks) => taks.id !== action.id) // todos que nao tiverem o id que enviei vao ser retornado, ou seja vai acaba deletando
            default:
                return state
        }

    } // a funcao
    const [taskText, setTasktext] = useState("")
    const [taks, dispatchTasks] = useReducer(taskReducer, inicialTaks) // colocando a funcao que controla as mundacas, e o estado incicial

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatchTasks({type:"ADD"}) // adicionar 
    }
    const removeTask = (id) =>{
         dispatchTasks({type:"DELETE" , id:id}) // deleta
    }
  return (
    <div>
        <h1>Use reducer</h1>
        {/* UserReducer -1 */}
    <p>Numero:{number}</p>
    <button onClick={dispatch} >alterar numero</button>
    <h3>TAREFAS GAYS:</h3>
    <form onClick={handleSubmit}>
        <input type="text" onChange={(e) => setTasktext(e.target.value)} value={taskText} />
        <input type="submit" value="enviar" />
    </form>
    {taks.map((tak) => (
        <li key={tak.id} onDoubleClick={()=> removeTask(tak.id)}>{tak.text}</li>
    ))}
        <hr />
    </div>
  )
}

export default HookUseReducer