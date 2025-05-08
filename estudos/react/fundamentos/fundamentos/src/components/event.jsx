const EventJsx = () =>{

   const handleMyEvent = () =>{
    console.log("ativou o evento")
   } // definindo uma função que quando clicar no botão retorna no console

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click</button> 
                {/* definindo o botão */}
            </div>
            <div>
                <button onClick={()=>{
                    console.log("hahahahahahahahahahahahahaha")
                }}>Clique aqui</button> 
                {/* definimos uma função arrow dentro do evento onclick */}
            </div>
        </div>
    )
   

}

export default EventJsx