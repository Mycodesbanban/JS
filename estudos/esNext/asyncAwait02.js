
function esperapor2(tempo=2000){ 
    return new Promise(function(resolve){ 
        setTimeout(function(){
            console.log("Executando")
            resolve() 
        } , tempo)
    })
}

function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 6000)
    })
}
// await: é um operador usado para lidar com Promises em JavaScript dentro de uma função assíncrona (async) ,  Ele pausa a execução da função até que a Promise seja resolvida ou rejeitada.

 async function executar(){ // async: é uma palavra-chave usada para definir funções assíncronas no JS Ele transforma a função para que ela sempre retorne uma Promise, facilitando o uso de operações assíncronas com await.
   let valor= await retornaValor()
   await esperapor2(3000)
   console.log(`Async/await 1 ${valor}...`)
    await esperapor2(3000)
   console.log(`Async/await 2 ${valor+1}...`)
   await esperapor2(3000)
   console.log(`Async/Await 3 ${valor+2}...`)

   return valor +3 

}

 async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executar().then(console.log)
executarDeVerdade() // chamando outra função assicrona depois de outra função assicrona