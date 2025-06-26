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

//! lembrando que o this se refere-se ao objeto ao qual a função está sendo anexada 
function Produto2 (nome ,preco , estoque){
    this.nome = nome // transformando o nome em uma variavel publica 
    this.preco = preco // transformando o preco em uma variavel publica
    this.estoque = estoque // transformando o estoque em uma variavel publica 

    Object.defineProperty(this ,"estoque" , { // pega o Objeto alvo,  nome da propriedade a ser definida/modificada (string)
        enumerable:true , // faz a propriedade ser visil em loops , mostra a chave
        value:estoque, //valor da propriedade
        writable: false ,// O valor não pode ser alterado
        configurable:true , //pode reconfigurar a chave
    } )
}   

const p1 = new Produto2 ("camiseta" , 38 , 22)
console.log(p1)



// todo: Metodos úteis para objetos

//? Object.assing(): copia as propriedades de um ou mais objetos para um outro objeto. Ele mescla objetos , ele tem dois parametros: O destino onde o objeto que vai receber as propriedades e o fontes: um ou mais objetos que têm as propriedades a copiar.

const caneca = {nome:"Produto" , preco:1.5}
const caneca2 =Object.assign({} , caneca) // copiar o caneca para dentro do objeto 
//*: recomendo que use o operador spread , pois funcionar da mesma forma e o codigo fica mais limpo
console.log(caneca2)


//? Object.getOwnPropertyDescriptor(): retorna as informações (descritor) de uma propriedade específica de um objeto , ele tem dois parametros , obj o objeto que tem a propriedade , e a propriedade o nome da propriedade que você quer examinar

const Macaco = {nome:"maycon" , preco:1.6}

console.log(Object.getOwnPropertyDescriptor(Macaco , "nome")) //mostrando o que essa propriedade é 

