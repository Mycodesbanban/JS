function menor (numeros){
    let menornumero = numeros[0]

    for(let i  in numeros){
        if(numeros[i] < menornumero){
            menornumero= numeros[i]
        }
    }
    return menornumero
}
console.log(menor([-5 , 6, 7, 8, 8, 9, 90]))