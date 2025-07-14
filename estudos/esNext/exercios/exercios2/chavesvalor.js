function receber (objeto){
    const resultado = []
    for (let i in objeto){
        resultado.push([i ,objeto[i] ])
    }
    return resultado
}
console.log(receber({
    nome:"Maria",
    profissao:"cabelereira ",
}));
