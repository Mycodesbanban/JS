// vamos cria aqui uma constante 
const valores= [7.7 , 8.9 , 6.3 , 9.2];
// agora vamos pedir para mostra o primeiro e o ultimos numeros do array
console.log(valores[0] , valores[3]);
// colocamos o index 4 que não esta definido em nosso array, vamos executar
console.log(valores[4]);
// vimos que o valor deu undefined/ não definido
valores[4]=10
console.log(valores)
// adicionamos os valor 4 em nosso array 
console.log(valores.length)
// essa tag vai nos mostra quantos elementos tem no nosso array
valores.push({id:3}, false , null , 'teste')
console.log(valores)
// podemos misturar as coisas no array
console.log(valores.pop())
// a tag pop ele vai pegar o ultimos valor do array tirar do array 
delete valores[0]
// vai tirar o elementos que nós pedimos para remover 
console.log(valores)
// vamos colocar o typeof do array
console.log(typeof valores)
// vimos que colocamos o typeof de um array é o seu resultado foi object
