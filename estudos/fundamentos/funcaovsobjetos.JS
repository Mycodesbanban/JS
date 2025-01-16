// vamos ver algumas coisa interresante entre objetos e função
console.log(typeof Object);
// vimos no exemplo passado que isso vai se tratar de uma função 
console.log(typeof new Object);
// quando ultilizamos a tag new nós vamos ter um objeto criado de uma função
const cliente=function(){

};
console.log(typeof cliente);
console.log(typeof new cliente);
// criamos uma função vazia , podemos mudar a função para object vai ser o mesmo resultado object quando ultilizamos o new
class produto{};
console.log(typeof produto);
console.log(typeof new produto);
// criamos uma class com o nome produto apois criamo colocamos o typeof do produto vimos que o resultado foi função , mas quando colocamos o typeof new o resultado foi objeto então podemos perceber que o resultado foi igual aos outros 

// então vimos que a forma de criar objetos em java scripts e apartir de funções

