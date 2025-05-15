import { useState } from "react"

const IFELSE = () => {
    const [name] = useState("João") // estamos definindo uma const com o paramentro de João
  return (
    <div>
        <h1>if else </h1>
        {name ==="João" ? (<div><h1>Seu nome é joão</h1></div>) :  (<div><h1>Seu nome não e João</h1></div>) } 
        {/* caso o nome não for extreitamente igual a joão vai retorna "seu nome não é joao" e caso for verdadeiro/ true vai retorna "seu nome é joão" */}
        {/*  o uso de parênteses é opcional, mas eles são úteis para organizar o código, especialmente quando você está retornando um componente JSX mais complexo, Os parênteses ajudam a agrupar o JSX que será retornado.Sem os parênteses, o código ainda funcionaria, mas ficaria menos legível.*/}
        {/* as divs estão usandas para ser o elemento pai , isso iremos usar para conseguir retorna a tag  */}

    </div>
  )
}

export default IFELSE