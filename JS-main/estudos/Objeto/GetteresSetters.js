// getters: função que retorna o valor quando a propriedade é acessada

// setters: função chamada ao atribuir valor (opcional)

function Produto2 (nome ,preco , estoque){
    this.nome = nome // transformando o nome em uma variavel publica 
    this.preco = preco // transformando o preco em uma variavel publica
    this.estoque = estoque // transformando o estoque em uma variavel publica 

    Object.defineProperty(this ,"estoque" , { // pega o Objeto alvo,  nome da propriedade a ser definida/modificada (string)
        enumerable:true , // faz a propriedade ser visil em loops , mostra a chave
        configurable:true , //pode reconfigurar a chave
        get:function(){
            return estoque // vai pegar o valor e exibir ele 
        },
        set: function (valor){
           if (typeof valor !== "number") {
            console.log("esse valor não é um numero")
           }
        }
    } )
}   

const p1 = new Produto2 ("camiseta" , 38 , 22)
p1.estoque="valor homoxesual"
console.log(p1)

