import {use, useState} from 'react'

const ListRender = () => {
    const [list] = useState(["matheus" , "pedro" , "jpão"])

    const [users , setUsers] = useState([
        {id:1 , name:"matheus" , age:31},
        {id:2 , name:"maycon" , age:15} , 
        {id:3 , name:"josy" , age:45},
        {id:4 , name:"jose" , age:54}        
    ])
    // função de deletar usuarios aleatorio
    const deleteRandom = ()=>{
        //gera um numero aleatoriop entre 0 e 4
        const randomNumber = Math.floor(Math.random()* 5) ; 
        
        setUsers((prevUsers)=>{ //setUsers é a função que atualiza o estado users
            console.log(prevUsers) //mostra no console
            return prevUsers.filter((user)=>randomNumber !== user.id) // vai filtrar os usuarios que for falso
            //se a expressão for true , o usuario sera mantido no novo array 
            // se for false o usuario será excluido
        })
    }

  return (
    <div>
        <ul>
            {list.map((item , index)=>(
                <li key={index}>{item}</li>    
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user </button>
    </div>
  )
}
// math.floor: arredonda para baixo e retorna o maior inteiro menor ou igual a um dado número.

//prevState:  é fundamental ao atualizar estados que dependem do valor anterior

// math.random: gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).

export default ListRender