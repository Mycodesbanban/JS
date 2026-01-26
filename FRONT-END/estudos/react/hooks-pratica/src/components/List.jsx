import  { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([])

    useEffect(()=>{

        console.log("Buscando itens no DB")
        setMyItems(getItems)
    },[getItems])

  return (
    <div>
        <h2>Lista:</h2>
        {myItems && myItems.map((item)=>(
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}

export default List