class avo {
    constructor(sobrenome){
        this.sobrenome=sobrenome

    }
}
class pai extends avo{ //extends é usada para criar uma classe filha que herda de uma classe pai. Dessa forma, a classe filha tem acesso aos métodos e propriedades da classe pai, mas pode também adicionar ou modificar seu comportamento.
    constructor(sobrenome , profissao="engenheiro"){
        super(sobrenome) //O super() chama o construtor da classe pai, permitindo que você herde as propriedades da classe pai.
        this.profissao=profissao
    }

}
class filho extends pai {
    constructor(){
        super("Silva")
        this.profissao="ainda não trabalha"
    }

}
const Filho = new filho
const Avo = new avo
console.log(Filho)

