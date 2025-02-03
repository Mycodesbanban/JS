// closures
//  em JS são uma característica poderosa que permite que uma função acesse variáveis de seu escopo externo mesmo após esse escopo ter sido encerrado. Em outras palavras, uma closure é criada quando uma função é definida dentro de outra função e a função interna tem acesso às variáveis da função externa.

// ele e o escopo criado quando uma função é declarada

//Como funcionam as closures
// quando a função é criada em js , ela mantém uma referência ao seu escopoléxico, que inclui todas as variáveis que estavam disponíveis no momento em que a função foi definida. Isso significa que mesmo que a função externa tenha terminado sua execução, a função interna ainda pode acessar as variáveis da função externa.

// exemplo:
function criarContador() {
    let contador = 0; // Variável privada

    return function() {
        contador++; // Acessa a variável 'contador' da função externa
        return contador;
    };
}

const contador1 = criarContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

const contador2 = criarContador();
console.log(contador2()); // 1 (novo contador, começa do zero)


// Usos comuns de closures
// Encapsulamento: Closures permitem que você crie variáveis privadas que não podem ser acessadas diretamente de fora da função, ajudando a encapsular a lógica.

// Funções de Retorno: Elas são frequentemente usadas em funções que retornam outras funções, como em bibliotecas de manipulação de eventos ou em funções de configuração.

// Currying: Closures são usadas em técnicas como currying, onde uma função é transformada em uma sequência de funções que aceitam um único argumento.

// Memoization: Elas podem ser usadas para armazenar resultados de funções para otimizar chamadas subsequentes.

// Exemplo de Encapsulamento
function criarPessoa(nome) {
    return {
        getNome: function() {
            return nome; // Acessa a variável 'nome' da função externa
        },
        setNome: function(novoNome) {
            nome = novoNome; // Modifica a variável 'nome'
        }
    };
}

const pessoa = criarPessoa("João");
console.log(pessoa.getNome()); // "João"
pessoa.setNome("Maria");
console.log(pessoa.getNome()); // "Maria"


// testes
const x= "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}
const minhafuncao=fora()
console.log(minhafuncao())
// O resultado foi local