const maycon = "nome"
const sobrenome = "santos"

const falar = () => {
  console.log(maycon , sobrenome)

}

// console.log(module)

module.exports.nome = maycon // estou exportando a variavel maycon para a chave nome
module.exports.sobrenome = sobrenome // estou exportando a variavel maycon para a chave nome
module.exports.falar = falar // estou colocou a função falar para a chave falar 

//* Podemos fazer assim também
exports.nome = maycon
exports.sobrenome = sobrenome
exports.falar= falar
// Vai acontecer a mesma coisa

//! A palavra "this" aponta para os dois contextos, quanto para module.exports e para exports
//* sintaxe:
this.Qualquercoisa = "O que eu quiser exportar"




console.log(module.exports) 

//? o que é um module?
//* é um arquivo que contem um codigo reutilizavel

//? O que significa module.exports?
//* forma de exportar algo de um arquivo (módulo) em node.js usando o sistema padrão do node.js


//! aviso; Um exports é um objeto normal em js então podemos colocar quantas coisas quisermos 
