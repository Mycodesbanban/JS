// Evitando modificações 

//  Object.preventExtensions em JS é usado para impedir que novas propriedades sejam adicionadas a um objeto. Quando um objeto é "prevenido de extensões", ele se torna um objeto "não extensível", o que significa que você não pode adicionar novas propriedades a ele, mas ainda pode modificar ou excluir as propriedades existentes
const produto= Object.preventExtensions({
    nome:"Jon", preco:394,  tag:"promoçaõ"
})
console.log("Extensivel:", Object.isExtensible(produto)) // false
produto.nome="CU"
produto.descricao="Borracha escolar branca"
delete produto.tag
console.log(produto) // vimos que esta exatamente como foi explicado a cima que sim pode ser modificado só não pode adicionar novos atributos 

// Object.seal em JS é usado para selar um objeto, o que significa que você impede a adição de novas propriedades e a remoção de propriedades existentes. No entanto, as propriedades existentes ainda podem ser modificadas. Um objeto selado é útil quando você deseja proteger a estrutura de um objeto, mas ainda permitir que suas propriedades sejam alteradas

const pessoa = {
nome:"Juliana", idade:35}
Object.seal(pessoa)
console.log("Selado:" , Object.isSealed(pessoa)) // O Object.isSealead() é usado para ver se o objeto está selado
pessoa.sobrenome="Silva"
delete pessoa.nome
pessoa.idade=374
console.log(pessoa) // vimos que não conseguimos adiconar e nem remover atributos dentro do Objeto por que ele está selado , podemos apenas modifica como foi o caso da idade 

// Object.freeze Em JS é utilizado para congelar um objeto, tornando-o imutável. Isso significa que, uma vez que um objeto é congelado, você não pode adicionar, remover ou modificar suas propriedades

const carro = {
    nome:"ferrari" ,valor:2485, modelo:"AHI592"
}
Object.freeze(carro)
carro.nome="Saoo"
carro.descricao="foda"
delete carro.valor
console.log(carro) 