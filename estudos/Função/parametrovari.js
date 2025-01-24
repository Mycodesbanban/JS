// parâmetro variaveis
// em js podemos trabalhar com parâmetros variáveis em funções de várias maneiras. Isso permite que você crie funções que podem aceitar um número indefinido de argumentos. Vamos explorar algumas das abordagens mais comuns para lidar com parâmetros variáveis.

// Usando o Arguments
// a maneira tradicional de lidar com um número variável de argumentos em uma função era usando o objeto arguments. Este objeto é uma lista semelhante a um array que contém todos os argumentos passados para a função.

// exemplo:
function somar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3)); // 6
console.log(somar(10, 20, 30, 40)); // 100




function soma (){
    let soma = 0
    for (i in arguments){
        soma+= arguments[i]
        
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1 , 2.2 , 3.3))
console.log(1.1 , 2.2 , "Teste")