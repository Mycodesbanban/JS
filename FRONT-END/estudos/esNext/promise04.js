
function gerarNumeros(min , max){
    if(min > max){
        [max , min]= [min , max] // invertendo as variaveis 
    }

    return new Promise(resolve =>{
        const aleatorio =parseInt( Math.random() *(max -min +1)) + min //parseInt: A função analisa um argumento de string e retorna um inteiro do radix especificado (a base em sistemas numéricos matemáticos)
        // math.random: retorna um número de ponto flutuante, pseudo-aleatório que é maior ou igual a 0 e menor que 1, com distribuição aproximadamente uniforme sobre esse intervalo - que você pode então escalar para o intervalo desejado. A implementação seleciona a semente inicial para o algoritmo de geração de números aleatórios; ela não pode ser escolhida ou redefinida pelo usuário.
        resolve(aleatorio) // gerando numeros aleatorios 
    })
        
    }

    gerarNumeros(1 , 60)
    .then(num => num *10)
    .then(numX10 => `O número gerado foi ${numX10} mas foi multiplicado por 10`)
    .then(console.log) // ja encontra o que queremos mostrar no console