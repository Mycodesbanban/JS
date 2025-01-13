// vamos criar uma função sem retorno, é uma função que realiza uma ação e não precisa de um resultado posterior. exemplo imprimir algo na tela é uma ação que não precisa de um resultado posterior

function soma(a,b) {
    console.log(a+b);
}
soma(2,3);
// vemos que o resultado foi 5 uma função sem retorno tambem é um bloco de codigo
soma(2);
// vimos que ser colocamos apenas um valor o resultado será not a number 
soma(2 , 10, 4 , 5);
// vimos que ele vai pegar os dois primeiros e vai ignora o restante 
soma()
// vimos que se não colocamos nada o resultado vai ser NaN

// função com retorno 
function imprimri( a, b=1){
    return a + b 
}
console.log(imprimri(3,7))
console.log(imprimri(2))

// funçao com retorno somente pode aparecer no console.log , a função return especificar o valor que a função deve fornecer de volta quando chamada