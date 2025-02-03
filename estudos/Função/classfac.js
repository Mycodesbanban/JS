// Comparação: Função Factory vs Classe

// Vantagens e Desvantagens
// Função Factory
// Vantagens:

// Simplicidade: Fácil de entender e usar.
// Flexibilidade: Pode criar objetos de forma dinâmica.
// Encapsulamento: Pode usar closures para manter o estado.
// Desvantagens:

// Menos estruturada: Pode se tornar confusa em projetos grandes.
// Herança manual: Implementar herança pode ser mais complicado.
// Classe
// Vantagens:

// Estrutura clara: Facilita a organização do código.
// Suporte a herança: Facilita a criação de hierarquias de objetos.
// Familiaridade: Semelhança com outras linguagens orientadas a objetos.
// Desvantagens:

// Verbosidade: Pode ser mais verbosa do que funções factory.
// Necessidade de new: A instância deve ser criada com new, o que pode levar a erros se esquecido.

// Teste
class pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1= new pessoa ("João")
p1.falar()

// outro teste
const Pessoa = nome => {
    return{
        falar:()=>console.log(`Meu nome é ${nome}`)
    }
}
const p2=Pessoa("João")
p2.falar()