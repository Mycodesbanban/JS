function pixdasorte (numero){
    let numeroaleatori =Math.floor(Math.random()*10)+1
    if(numeroaleatori===numero){
        return `Meus parabens o resultado foi ${numeroaleatori}`
    }else{
        return `Que azar o resultado foi ${numeroaleatori}`
    }
}
console.log(pixdasorte(2))