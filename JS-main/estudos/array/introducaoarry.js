// introdução dos arrays 
// Um array em JS é um objeto especial que tem caracteristicas próprias mas ives de ele organaniza os seus atributos atraves de chaves , ele organiza seus dados a partir de uma estrutura indexada començando do zero
console.log(typeof Array); // o resultado é function 
console.log( typeof new Array);// o resultado é object
console.log( typeof []); // o resultado é object
// O array suporta dados heterogênea , sigfinica que podemos coloca uma função , objeto , outro array entre outros , mas na boa pratica devemos trabalhar com dados homogêneos dentro de um array , que significa que devemos usar elementos que são semelhantes ou idêntificadas entre si

// criando um array com new Array
let aprovados = new Array ("Bia " , "pedro", "bular");
console.log(aprovados);

// agora vamos mudar os valores usando a anotação literal

aprovados=["Bia", "carlos" , "Jose" , "bluezaão"]
console.log(aprovados)
// A anotação literal é o melhor jeito para abrir um array

// vamos usar os indexs dos elementos 
console.log(aprovados[0]);
console.log(aprovados [1]);
console.log(aprovados[2]);
// vai mostra cada elementos que especificamos no index , é importante lembra que o index do JS começa sempre do 0 e vai ate quantos elementos tiver 
console.log(aprovados[4]); // quando não temos o index que definimos no array , o resultado vai ser undefined 

// podemos adicionar ou subistituir elementos epecificando o index 
aprovados[4]="Bluexão";
console.log(aprovados[4]);

// para adicionar um novo elemento na ultima posição do array podemos usar o push
aprovados.push("brasil perde");
console.log(aprovados[5])

// para ver o tamanho do array vamos usar o length
console.log(aprovados.length); // vimos que o resultado foi um número é foi 6 , por que ele começa 1 ate tal elemento que esteja no array 

// o que acontece se definimos um array nos index onde seus anteriores não foram definidos?
aprovados[9]= "Bluexaão e a boneca";
console.log(aprovados.length); // o que vai acontece é o seguinte os index que não foram definidos vão existir dentro desse array , só não vão está definidos 
// mostrando
console.log(aprovados[8]=== undefined); // true , como já falei o elemento existe só não vai esta definido dentro do array 
console.log(aprovados)
aprovados.sort()
console.log(aprovados); //Essa funcão vai fazer uma alteração dentro do array

// podemos exluir um item especifico do array usando o index
delete aprovados[1];
console.log(aprovados); // vimos que o index 1 foi deletado do array 
console.log(aprovados[1]); // quando tentamos acessar o index 1 do array vai aparecer undefined por que ele não está mais definido dentro do array

aprovados=["Jorge", "mateus" , "arthur"];
aprovados.splice(1 , 1) // essa função splice serve para varias coisas como adicionar index como tambem para remover index  , como funcionar ? o primeiro vai ser  o que vai informar a posição do elementos e o segundo vai ser o que vamos informa quantos elementos apagar apatir daquele primeiro
aprovados.splice(0 , 2 , "bloi") // como vimos apagou todos os elementos , para adicionar elementos basta coloca depois de definir os dois primeiros
console.log(aprovados)






