
setTimeout(function(){
    console.log("oi")

    setTimeout(function(){
        console.log("oi")
    } , 2000)
    setTimeout(function(){
        console.log("oi")
    } , 2000)
}, 2000) // varias chamandas de setTimeout
// setTimeout: é uma função do JavaScript usada para executar uma ação após um determinado tempo (em milissegundos).

function esperapor(tempo=2000){ //definimos o tempo para 2 segundos 
    return new Promise(function(resolve){ // criamos uma promise com uma função
        setTimeout(function(){ //codigo a ser executado
            console.log("Executando")
            resolve("Cu") // chamando o resolve
        } , tempo)
    })
}

esperapor(3000).then(text=>console.log(text)) // criando uma arrow function para retorna o texto que escrevemos na função de cima 



function esperapor2(tempo=2000){ //definimos o tempo para 2 segundos 
    return new Promise(function(resolve){ // criamos uma promise com uma função
        setTimeout(function(){ //codigo a ser executado
            console.log("Executando")
            resolve() // chamando o resolve
        } , tempo)
    })
}

esperapor2()
.then(()=>esperapor2()) // retorna o codigo mais vezes , então vai funcionar assim , 2 segundos escutando promise + 2 segundo executando promise 
.then(esperapor2)

