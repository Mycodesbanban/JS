import {use, useState} from 'react'

const ListRender = () => {
    const [list] = useState(["matheus" , "pedro" , "jpão"])

    const [users] = useState([
        {id:1 , name:"matheus" , age:31},
        {id:29349 , name:"maycon" , age:15} , 
        {id:3234 , name:"josy" , age:45},
        {id:4234 , name:"jose" , age:54}        
    ])

  return (
    <div>
        <ul>
            {list.map((item , index)=>(
                <li key={index}>{item}</li>    
            ))}
            {/* estamo pegando o index dos array que criamos para evitar o erro no console */}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
                // o que estamos fazendo é pegando os id com a key que colocamos e e mostrando o nome e a idade que usamos , estamos usando um objeto então fica bem mais simples de usar e tambem de forma mais correta
            ))}
        </ul>
    </div>
  )
}


//key ajuda a indentificar quais itens foram adicionados , removidos ou alterados 
export default ListRender