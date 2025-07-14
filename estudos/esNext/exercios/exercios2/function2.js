function numeroslibetas (numeros , quantia){
    let array=[]
    for(let numero of numeros){
        const quantidesejada =String(numero).length
        if(quantia=== quantidesejada)
            array.push(numero)
    } 
    return array
}
console.log(numeroslibetas([38, 2, 365, 10, 125, 11],2))
console.log(numeroslibetas([5, 9, 1, 125, 11],1)) 