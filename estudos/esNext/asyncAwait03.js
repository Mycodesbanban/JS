// includes:O método de instâncias de Array determina se um array inclui um determinado valor entre suas entradas, retornando verdadeiro ou falso conforme apropriado.
function gerarNumeros(min, max, numerosproibidos) {
    if (min > max) [max, min] = [min, max]; // Inverte os valores se necessário

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;

        if (numerosproibidos.includes(aleatorio)) {
            reject("Número repetido!");
        } else {
            resolve(aleatorio);
        }
    });
}

// Chamada correta (passando um array como terceiro argumento)
async function gerarMegasena(QtsdeNumeros , tentativas=1){
    try{
        
        const numeros =[]
        for(let _ of Array (QtsdeNumeros).fill()){ // fill:Método de instâncias de Array altera todos os elementos dentro de um intervalo de índices em um array para um valor estático. Ele retorna o array modificado.
           numeros.push(await gerarNumeros(1 , 60, numeros))
    
        }
        return numeros
    }catch(e){
        if(tentativas >10){
            throw 'Não ganhou'
        }else{

            return gerarMegasena(QtsdeNumeros , tentativas +1)
        }
        // throw: é usado para lançar erros manualmente uando um erro é lançado com throw, a execução do código é interrompida a menos que o erro seja tratado com try...catch
    }

}

// gerarNumeros(1, 5, [1, 3, 4])
//     .then(console.log)
//     .catch(console.error);

gerarMegasena(8)
.then(console.log)
.catch(console.log)


