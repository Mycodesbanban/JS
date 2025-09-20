// IIFE(Immediately Invoked Function Expression)
// É um padrão em JS que permite que uma função seja definida e executada imediatamente após sua criação. Esse padrão é frequentemente usado para criar um escopo isolado, evitando a poluição do escopo global e permitindo o encapsulamento de variáveis.

// Estrutura de uma IIFE
// Uma IIFE é definida usando parênteses para envolver a função e, em seguida, é invocada imediatamente com outro parêntese.

// Sintaxe básica:
(function() {
    // Código aqui
})();

// Exemplo: 
(function() {
    var mensagem = "Olá, mundo!";
    console.log(mensagem); // "Olá, mundo!"
})();

// Explicação do Exemplo
// Definição da Função: A função é definida entre parênteses, o que a torna uma expressão de função.

// Execução Imediata: Os parênteses adicionais () após a definição da função fazem com que ela seja invocada imediatamente.

// Escopo Isolado: A variável mensagem é isolada dentro da IIFE e não está acessível fora dela, evitando conflitos com outras variáveis no escopo global.

// Vantagens das IIFEs
// Encapsulamento: IIFEs ajudam a encapsular variáveis e funções, evitando que elas poluam o escopo global.

// Criação de Módulos: Elas podem ser usadas para criar módulos, onde você pode expor apenas as partes necessárias de um código, mantendo o restante privado.

// Execução Imediata: Permitem que você execute código imediatamente sem a necessidade de chamá-lo posteriormente.

// Exemplo de IIFE com Parâmetros
(function(nome) {
    console.log("Olá, " + nome + "!");
})("Maria"); // "Olá, Maria!"

// Uso de IIFE em Módulos
// As IIFEs são frequentemente usadas em padrões de módulo, onde você pode criar um módulo que encapsula variáveis e funções:
var meuModulo = (function() {
    var privado = "Eu sou privado";

    return {
        metodoPublico: function() {
            console.log(privado);
        }
    };
})();

meuModulo.metodoPublico(); // "Eu sou privado"
// console.log(meuModulo.privado); // Isso causaria um erro, pois 'privado' não está acessível

// testes 
(function(){
    console.log("Será executado na hora!!!!!!!!!")
    console.log("foge do escopo mais abragente")
})()
// qualque variavel ou função somente ficará dentro dessa função anonima