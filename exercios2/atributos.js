function removerpropriedade(Objeto , nomedapropriedade){
    const copia=Object.assign({},Objeto)
    delete copia [nomedapropriedade]
    return copia 
}
console.log(removerpropriedade({a:1 , b:2}, "a"));
