// O loop for...in em JavaScript é uma estrutura de controle que permite iterar sobre as propriedades enumeráveis de um objeto. É especialmente útil quando você deseja acessar as chaves de um objeto ou os índices de um array.

// sintaxe do for/ in 

// for (let chave in objeto) {
    // Código a ser executado para cada chave
// }

// funcionamento

// Iteração: O loop for...in percorre todas as propriedades enumeráveis do objeto, incluindo aquelas que são herdadas da cadeia de protótipos.

// Chave: A variável que você define (neste caso, chave) receberá o nome da propriedade atual em cada iteração.

// Exemplo com Objetos

let pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// resultado 

// nome: Alice
// idade: 30
// cidade: São Paulo

// Exemplo com Arrays

// Embora o loop for...in possa ser usado com arrays, não é a prática recomendada, pois ele itera sobre as chaves (índices) e também sobre as propriedades herdadas. Para iterar sobre arrays, é melhor usar um loop for tradicional ou o método forEach.
let frutas = ["maçã", "banana", "laranja"];

for (let indice in frutas) {
    console.log(indice + ": " + frutas[indice]);
}
// Resultado
// 0: maçã
// 1: banana
// 2: laranja

// O método forEach em JavaScript é uma função de array que permite iterar sobre os elementos de um array de maneira mais concisa e legível do que os loops tradicionais, como for ou for...in


// Considerações Importantes
// Propriedades Herdadas: O loop for...in também itera sobre as propriedades herdadas do objeto. 
// hasOwnProperty para verificar se a propriedade pertence ao objeto diretamente

// Exemplo com hasOwnProperty

let pessoa3 = {
    nome: "Alice",
    idade: 30
};

pessoa3.nacionalidade = "Brasileira"; // Propriedade direta

for (let chave in pessoa3) {
    if (pessoa3.hasOwnProperty(chave)) {
        console.log(chave + ": " + pessoa3[chave]);
    }
}
// Vamos fazer teste
 const nota = [ 9.9 , 9.8 , 7.8 , 5.8 , 6.0 ]
    for (let i in nota ) {
         console.log(i , nota [i])
    }
const pessoa5 = {
     nome: 'Ana' , 
     sobrenome: 'Macaco', 
     idade: 12,
     peso: 902,
}
for (let  atributo in  pessoa5){
    console.log(`${atributo} = ${pessoa5[atributo]}`)
}

// Conclusão

// O loop for...in é uma maneira útil de iterar sobre as propriedades de um objeto em JavaScript. No entanto, deve-se ter cuidado ao usá-lo com arrays, pois ele pode incluir propriedades herdadas. Para iterar sobre arrays, é preferível usar um loop for tradicional ou métodos como forEac