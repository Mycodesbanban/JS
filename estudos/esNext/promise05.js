
function gerarNumeros(min , max  , tempo){
    if(min > max){
        [max , min]= [min , max]  
    }

    return new Promise(resolve =>{
        setTimeout(function(){
            const aleatorio =parseInt( Math.random() *(max -min +1)) + min 
            resolve(aleatorio) 

        } , tempo)
    })
        
}

function geraVariosNumeros(){
    return  Promise.all([
        gerarNumeros(1 , 60 , 1000),
        gerarNumeros(1 , 60 , 500), 
        gerarNumeros(1 , 60 , 1000),
        gerarNumeros(1 , 60 , 3000),
        gerarNumeros(1 , 60 , 100)
    ])

}
console.time('tempo') // mostra o tempo inicial e o tempo final
geraVariosNumeros()
.then(numeros => console.log(numeros))
.then(() =>{
    console.timeLog('tempo') // inicial
    console.timeEnd("tempo")  // final
})
