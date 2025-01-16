// vamos entender nulll e undefined
const a={nome:'teste'}
a
const b = a
// a const a somente vai amarzenar esse objeto já o b é o a mesma coisa que esta no a
b.nome='Opa' 
console.log(a)
// vimos que se mudamos um endereço da letra B a letra A tambem vai sentir a mudança isso tambem vale para A caso ele mude o B tambem vai sentir a mudança , por que eles apontam para mesmo local de memoria
let c = 3
let d = c
d++
console.log(d)
console.log(c)
// o valor D foi diferente C , foi diferente por que foi feito uma copiar por valora quando trabalhamos por tipos primitivos 
let valor
console.log(valor)
// o valor foi undefined pois não iniciamos a variavel
valor=null
// null significa que não tem nenhum valor agora a variavel foi inicializada 
console.log(valor)
// vimos que não tinha nada agora que definimos que não tem nada na mamoria ele considera nulo/null
console.log(valor.toString())
// vimos que vai dar um error pois não temos nada 
const produto={}
console.log(produto.preco)
// quando executamos o resultado vai ser undefined
produto.preco=3.50
console.log(produto)
// vimos que colocamos os valores no objeto que não tinha nada 
produto.preco=undefined
// agora vamos ver o que vai acontecer quando utilizamos a tag undefined como o valor do produto
console.log(!!produto.preco)
//  o valor vai dar falso por que não temos nada 
console.log(produto)
// vimos que temos um valor em objetos quando executamos vimos que o resultado vai ser undefined , A forma correta de deletar um valor é usando o delete produto.preco
produto.preco= null 
//  qui esta dizendo que não tem valor 
console.log(!!produto.preco)
console.log(produto)