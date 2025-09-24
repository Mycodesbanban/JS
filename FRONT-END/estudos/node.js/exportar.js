// Sistema de module exports
console.log(module.exports=== this) // true 
console.log(module.exports=== exports)//true

this.a=1 // o a será visivel fora do arquivo
exports.b=2 // o b tambem ficara visivel fora do arquivo
module.exports.c=3 // o c tambem vai ficar fora do arquivo
exports=null // mesmo atribuindo o null para exports , ainda sim o module.exports mostra ela , isso acontece porquê exports é uma outra variavel que aponta para um mesmo objeto
console.log(module.exports);

exports = {
    nome:"maycon"

} // esse objeto não sera retornado, mesmo que tenha mudado a referencia duas vezes 
console.log(module.exports)


module.exports={
    publico:true
} // para atribuir um novo objeto , vamos usar o module.exports

