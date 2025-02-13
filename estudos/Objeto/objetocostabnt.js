// Objetos constantes
// Em JS um objeto constante é um objeto que não pode ser reatribuído a uma nova referência, mas seus atributos (propriedades) podem ser alterados. Isso é feito usando a palavra-chave const para declarar o objeto. É importante notar que const não torna o objeto imutável; ele apenas impede que a variável que contém o objeto seja reatribuída a um novo objeto.

// Declaração de Objetos Constantes

// exemplo
const pessoa = {
    nome: "João",
    idade: 30
};

// Modificando uma propriedade do objeto
pessoa.idade = 31;
console.log(pessoa); // { nome: "João", idade: 31 }

// Tentando reatribuir o objeto (isso causará um erro)
// pessoa = { nome: "Maria", idade: 25 }; // Uncaught TypeError: Assignment to constant variable.

// Características dos Objetos Constantes

// Reatribuição:

// Você não pode reatribuir um objeto constante a uma nova referência. Por exemplo, pessoa = { nome: "Maria" }; resultará em um erro.

// Mutabilidade:

// As propriedades do objeto podem ser alteradas, adicionadas ou removidas. Por exemplo:
pessoa.cidade = "São Paulo"; // Adicionando uma nova propriedade
console.log(pessoa); // { nome: "João", idade: 31, cidade: "São Paulo" }

delete pessoa.idade; // Removendo uma propriedade
console.log(pessoa); // { nome: "João", cidade: "São Paulo" }

// Objetos Aninhados:

// Se um objeto constante contém outros objetos, você pode modificar as propriedades desses objetos aninhados.
const carro = {
    modelo: "Fusca",
    ano: 1970,
    proprietario: {
        nome: "Carlos",
        idade: 45
    }
};

// Modificando uma propriedade do objeto aninhado
carro.proprietario.idade = 46;
console.log(carro); // { modelo: "Fusca", ano: 1970, proprietario: { nome: "Carlos", idade: 46 } }

// testes
const pessoa2={nome:"Jão"} // pessoa2 -> 123 -> {...}
pessoa2.nome="pedro"
console.log(pessoa2)
// pessoa2 -> 456 ->{...}
// pessoa2= { nome:"ana"}
Object.freeze(pessoa2) // quando usamos a tag freeze e para deixa o que esta dentro do objeto congelado 
// exemplo
pessoa2.nome="maria"
pessoa.end="Rua ABC"
delete pessoa.nome
console.log(pessoa2.nome)
console.log(pessoa2)

const pessoacont= Object.freeze({
    nome:"xebiuzaõ"
})
pessoacont.nome="cuuuuuu"
console.log(pessoacont)