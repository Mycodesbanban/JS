// vamos entender operadores Destructuring  é uma técnica que permite extrair dados de objetos e arrays em variáveis individuais. Isso pode ser útil em muitas situações, especialmente quando você precisa trabalhar com dados complexos, como objetos aninhados ou matrizes multidimensionais
const pessoa= {
    nome:'Ana ',
    idade:5,
    endereco:{
        lagradouro:'Rua Aminagos', 
        numero: 123,
        bairro:'mayszona',
    }
};
// agora nós vamos ultilizar o destructuring
const { nome, idade}=pessoa;
// usamos chaves para definir qual queremos tirar do objeto pessoa 
console.log(nome, idade);
const {nome: n , idade :i}=pessoa
// podemos criar variaveis com as const ultilizando chaves para definir no objeto pessoa 
console.log(n , i);
// O que acontece se tiramos um atributo de dentro do objeto que não existe ?
//const {sobrenome , bemhumorada}=pessoa
// vimos que o resultado vai ser undefined 
const{sobrenome , bemhumorada=true}=pessoa;
console.log(sobrenome , bemhumorada);
// vimos que o sobrenome vai receber undefined já o bemhumorada vai receber true pois colocamos isso caso não aparecesse nada ele iria receber o valor de verdadeiro


// como faço para acessar os valores de endereço?
const{endereco:{lagradouro , bairro , numero}}= pessoa 
console.log(lagradouro , numero , bairro)