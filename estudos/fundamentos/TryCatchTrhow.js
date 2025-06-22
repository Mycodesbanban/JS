try{ // tentanto executar 
    console.log(Erro)
}catch(err){ // caso ocorra um erro vai cair nesse bloco
    console.log("ocoreeu um erro")
    // console.log(err) // exibe o erro no console
}

// ! Não devemos mostrar o erro interno para o usuario final

//* Na pratica:
 function somar (x , y){
    if(typeof x !=="number" || typeof y !=="number"){
        throw("Ocorreu um erro na sua digitação use apenas numeros.") // vai ocorrer um erro explicado para o usuario final
    }
    return x + y
 }

console.log(somar("oi" , "obrigado"))