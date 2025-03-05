function calcularmediadeburros(numeros){
    const quantidade = numeros.length
    let resultado = 0
    for(let num of numeros){
        resultado +=num
    }
    return resultado / quantidade
}
console.log(calcularmediadeburros([0 , 10]));
