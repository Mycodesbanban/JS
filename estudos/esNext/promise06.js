function funcionarOuNao(valor, chanceErro){ 
    //valor: chamar o resolve 
    //chanceErro: chance de erro
    return new Promise((resolve , reject)=>{
        if(Math.random()< chanceErro){
            // retorna um erro
            reject("Ocoreu um erro")
        } else{
            resolve(valor)
        }
    })


}

funcionarOuNao("testando...", 0.5) // erro , 0.9 = 90% de erro
.then(v =>console.log(`valor:${v}`))
.catch(erro=>console.log(`Erro:${erro}`))
.then(()=>console.log('Fim!'))

