// 1. JSON (JavaScript Object Notation):
// Definição: O JSON é um formato leve para troca de dados, fácil de ler e escrever para humanos, e fácil de processar e gerar para máquinas.
// Formato: É um formato baseado em texto que usa pares chave-valor, semelhante a um dicionário ou mapa em várias linguagens de programação.
// Uso: O JSON é amplamente utilizado para trocar dados entre servidores e clientes, especialmente em aplicações web.
// Estrutura: O JSON é uma representação em string de dados.
// Exemplo:
// {
//   "nome": "João",
//   "idade": 30,
//   "cidade": "São Paulo"
// }
// 2. Objeto:
// Definição: Um objeto é uma estrutura de dados usada na programação orientada a objetos (POO) que armazena dados (em propriedades) e comportamentos (em métodos).
// Formato: Em muitas linguagens de programação, os objetos são representações na memória de entidades do mundo real, frequentemente compostos por pares chave-valor ou propriedades.
// Uso: Os objetos são usados para organizar e gerenciar dados e comportamentos dentro de um programa.
// Estrutura: Um objeto é uma entidade em tempo de execução que existe na memória e pode ser manipulada pelo código.
// Exemplo em JavaScript:
// const pessoa = {
//   nome: "João",
//   idade: 30,
//   cidade: "São Paulo"
// };
// Diferenças principais:
// O JSON é um formato de texto utilizado para representação de dados, enquanto um objeto é uma entidade em memória usada para manipulação de dados dentro de um programa.
// O JSON pode ser convertido para um objeto em várias linguagens de programação para que os dados possam ser manipulados em tempo de execução.

// teste 
const obj = {a:1 , b:2 , c:3 , soma(){
    return a+ b + c
}};
console.log(JSON.stringify(obj)); // O JSON.stingify() converte um objeto JavaScript em uma string JSON. 
// Note que a função foi execluida do JSON , por que o JSON é um formato de dados 
//console.log(JSON.parse("{a:1 , b:3 , c:4}")); //O JSON.parse() é utilizado para converter uma string JSON de volta para um objeto JS
// vemos que ocorreu um erro por que esse formato JSON não é valido 
//console.log(JSON.parse("{'a':1 ,  'b':2, 'c':6}")); // vimos que ocorreu um novo erro isso acontece por que no JS todo JSON deve ser delimitado por aspas duplas 
console.log(JSON.parse('{"a": 1 , "b":2 , "c":5}'));  // agora quando abrimos com aspas simples e colocamos aspas duplas em cada elemento do Json o resultado foi possitivo
console.log(JSON.parse('{"a": 4 , "b": true , "C":"string" , "d": {} , "e":[] , "f":1.7}')) ; // quando colocamos valores numericos  , booleanos , arrays , obj e valores flutuantes não precisamos colocar aspas duplas , mas caso for uma string ai sim precisamos usar aspas duplas 


