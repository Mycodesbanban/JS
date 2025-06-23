//  Objeto e uma coleção denâmica de pares chave/valor
// exemplo:
const produto= new Object
produto.nome="cadeira" //usando a anotação ponto

produto["marca do produto"]="generica" // usando a anotação com acesso de array que é os []
produto.preco=2220

console.log(produto)
// podemos excluir atributos de um objeto atravez de do delete
//  exemplo:
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

// vamos Criar um objeto um pouco mais complexo
const carro ={
    modelo:"A4",
    valor:1223,
    proprietario:{
        nome:"Jose luiz",
        idade:123,
        endereco:{
            Rua:"São luiz",
            bairro:"Cuelho",
            lagadouro:"Sei la"

        }
    }, 
    condutores:[{
        Nome:"Json",
        idade:12233, 


    }, {
        Nome:"ANa",
        idade:1234
    }], // colocamos um array de objetos
    calcularvalorseguro: function (){
        //
    }
}

carro.proprietario.endereco.bairro=1000 //podemos acesar esse objeto assim
carro["proprietario"] ["endereco"] ["bairro"]="cugigante"
console.log(carro)
// caso deletamos um atributo tudo que estiver dentro dele tambem vai ser deletando
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularvalorseguro
console.log(carro)
console.log(carro.condutores) // undefined
// vamos ver que vai acontecer quando colocamos uma coisa que não esta definido no codigo
//console.log(carro.condutores.length) // erro


// Object.defineProperty(): Define uma nova propriedade ou modifica uma existente em um objeto, retornando o objeto modificado.
//Object.defineProperties():Define várias propriedades de uma vez em um objeto