// Map 01#
//map é uma função onde dentro dele tem um laço que vai ser executado e o map ele serve para transformação no array , ele mapear o array para outro array do mesmo tamanho só que com os dados tranformados ,  é uma função de array em JS que cria um novo array com os resultados da aplicação de uma função a cada item de um array existente.
// Ele não modifica o array original, mas retorna um novo array.
//exemplo:
const nums=[1 , 2, 3, 4 , 5]; // vamos ultilizar map 

let resultado=nums.map(function(item , index , array){
    return item * 2 
}); 
// item: O valor atual do item no array.
// index: O índice do item no array.
// array: O array original.
console.log(nums);
console.log(resultado); // o resultado foi o dobro do primeiro array

// vamos criar 3 funções 
const soma10=item => item + 10
const triplo = item => item * 3
const paradinheiro= item =>`R$ ${parseFloat(item).toFixed(2).replace('.' , ',')}`  // parseFloat() é uma função que converte uma string em um número de ponto flutuante(numero decimal) , toFixed() vai dizer que o número so vai ter 2 casas decimais , o .replace vai susbitituir o ponto(.) por virgula(,)

resultado= nums.map(soma10).map(triplo).map(paradinheiro); // passamos os mesmo array usando o map ,agora vamos imprimir no console
console.log(resultado);




