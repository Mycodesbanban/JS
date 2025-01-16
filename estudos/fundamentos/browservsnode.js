// O contexto de execução no browser e no Node.js difere significativamente. No browser, o JavaScript é executado em um ambiente voltado para a interação do usuário e manipulação do DOM, enquanto o Node.js é um ambiente de execução do lado do servidor, focado em operações de rede e I/O. Abaixo estão as principais diferenças entre os dois contextos:

// Browser:
// O JavaScript é executado em um ambiente de navegador, que inclui APIs específicas do DOM, como document e window.
// O foco principal é a interação com o usuário e a manipulação de elementos da página.

// Node.JS
// O JavaScript é executado em um ambiente de servidor, sem acesso ao DOM.
// Oferece APIs para manipulação de arquivos, rede, e outras operações de backend, como fs (sistema de arquivos) e http.
let a = 3
console.log(this.a);
// o resultado vai ser undefined por que não vai encontra o a dentro de this/windows
console.log(global.a)
// o reusltado tambem vai ser undefined 

// só não daria undefined se tivemos feito assim
global.b=123
console.log(global.b)
// agora elee encontrou o resultado
this.c=456;
console.log(this.c)

// criando uma variavel maluca sem var e sem let
abc=133
console.log(global.abc)
// quando criamos uma varivel assim nos estamos colocando uma variavel no global do node.js então não devemos 


// As diferenças entre o contexto de execução no browser e no Node.js refletem suas finalidades distintas: o browser é otimizado para a interação do usuário e manipulação de conteúdo web, enquanto o Node.js é projetado para operações de backend e manipulação de dados em servidores. Essa compreensão é fundamental para desenvolvedores que trabalham em aplicações web modernas, onde ambos os ambientes podem ser utilizados em conjunto.
