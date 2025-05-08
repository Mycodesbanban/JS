const TempleteExpression = () =>{
    // Essa parte antes do return é JS 
    const name="matues"
    const data = {
        age:31,
        job:"programmer" , 

    }

    return(
        <div>
            {/* mostra a const name que criamos  */}
            <h1>Olá ,{name}, tudo bem? </h1> 
            {/* criamos um objeto data e estamos chamando de dentro dele o job que definimos  */}
            <p>Você atua como:{data.job}</p>
            {/* contas de soma */}
           <p>{8+8}</p>
           {/* mostrando no console do browser */}
           <p>{console.log("JSX React")}</p>
        </div>

        //{} são usadas para inserir expressões JavaScript dentro do HTML
    )
}

export default TempleteExpression