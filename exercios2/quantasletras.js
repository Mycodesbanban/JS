function contarCaracteres(caractres , frase){
    let contador=0

    for(let i = 0; i < frase.length ; i++){
        if(frase.charAt(i)=== caractres)
            contador++
    }
    return contador
}

console.log(contarCaracteres("r" , "perereca fedida suja mal lavada e mal comida r r r r r r r"))