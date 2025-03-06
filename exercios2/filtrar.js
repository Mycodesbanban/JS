function palavras(inicio , palavras){
    const resultado=[]
    for (let palavra of palavras){
        if (palavra.includes(inicio))
            resultado.push(palavra)
    }
    return resultado
}
console.log(palavras("pro",["programação" , "mobile", "procatinar"]))
