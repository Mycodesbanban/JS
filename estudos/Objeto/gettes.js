// Getters e Setters
// Em JS, além de usar getters e setters em classes, você também pode defini-los diretamente em objetos usando a sintaxe de Object.defineProperty() ou a notação de objeto literal. Isso permite que você controle o acesso a propriedades específicas de um objeto, encapsulando a lógica de acesso e modificação.

// usando object.defineProperty()
// A função Object.defineProperty() permite que você adicione propriedades a um objeto com getters e setters

// exemplo:

const pessoa = {
    _nome: 'João',
    _idade: 30
};

// Definindo um getter para a propriedade 'nome'
Object.defineProperty(pessoa, 'nome', {
    get: function() {
        return this._nome;
    },
    set: function(novoNome) {
        this._nome = novoNome;
    },
    enumerable: true, // A propriedade será enumerável
    configurable: true // A propriedade pode ser reconfigurada
});

// Definindo um getter e setter para a propriedade 'idade'
Object.defineProperty(pessoa, 'idade', {
    get: function() {
        return this._idade;
    },
    set: function(novaIdade) {
        if (novaIdade < 0) {
            console.log("Idade não pode ser negativa.");
        } else {
            this._idade = novaIdade;
        }
    },
    enumerable: true,
    configurable: true
});

// Usando os getters e setters
console.log(pessoa.nome); // João
pessoa.nome = 'Maria';
console.log(pessoa.nome); // Maria

console.log(pessoa.idade); // 30
pessoa.idade = 35;
console.log(pessoa.idade); // 35

pessoa.idade = -5; // Idade não pode ser negativa.
console.log(pessoa.idade); // 35 (não foi alterada)

// Vantagens de Usar Getters e Setters em Objetos
// Encapsulamento: Permitem que você controle o acesso e a modificação de propriedades, protegendo a integridade dos dados.

// Validação: Você pode adicionar lógica de validação nos setters para garantir que os valores atribuídos sejam válidos.

// Interoperabilidade:  permitem que você trate propriedades como se fossem atributos normais, mas com a flexibilidade de métodos.

// testes 
const sequencia ={
    _valor:1, //convenção
    get valor (){
        return this._valor++
    }, set valor (valor){
       if( valor > this._valor){
        this._valor=valor
       }
    }
}
console.log(sequencia.valor ,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor)

