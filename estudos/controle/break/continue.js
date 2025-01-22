//  Break/Continue
// As instruções break e continue em JavaScript são usadas para controlar o fluxo de loops, como for, while e do...while. Elas permitem que você altere o comportamento padrão de iteração, oferecendo mais flexibilidade na execução de loops.

// break
// A instrução break é usada para interromper a execução de um loop imediatamente. Quando o break é encontrado, o controle do programa é transferido para a próxima instrução após o loop.

// exemplo de break

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Interrompe o loop quando i é igual a 5
    }
    console.log(i);
}

// resultado

// 1
// 2
// 3
// 4
// Neste exemplo, o loop for é interrompido quando i é igual a 5, então apenas os números de 1 a 4 são exibidos.

// continue
// A instrução continue é usada para pular a iteração atual do loop e continuar com a próxima iteração. Quando o continue é encontrado, o restante do código dentro do loop para a iteração atual é ignorado, e o loop avança para a próxima iteração.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Pula a iteração quando i é igual a 5
    }
    console.log(i);
}
// resultado
1
2
3
4
6
7
8
9
10
// Neste exemplo, quando i é igual a 5, a instrução continue faz com que o loop pule a iteração atual, resultando na exibição de todos os números de 1 a 10, exceto 5.


// Uso em Loops Aninhados
// break e continue também podem ser usados em loops aninhados. Para interromper ou continuar um loop específico, você pode usar rótulos.

outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Interrompe o loop externo
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// resultado
// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1

// Neste exemplo, o loop externo é interrompido quando i é 2 e j é 2.

//vamos fazer testes

const nums=[1 , 2 , 3 ,4 , 5, 6, 7, 7, 8, 8, ]
for (x in nums){
    if(x == 5){
        break
    }
        console.log(`${x}=${nums[x]}`)
}
for(y in nums){
    if (y == 5){ continue

    } 
    console.log(`${y}=${nums[y]}`)
}



 externo: 
 for(a in nums){
     for( b in nums) {

        if( a==2 && b == 3) break externo
        console.log(`Par= ${a} , ${b}`)
     }
 } // não é bom usar essas estruturas 


console.log("Fim")
// não é bom usar essas estruturas 

// Conclusão
// break: Interrompe a execução do loop imediatamente e transfere o controle para a próxima instrução após o loop.
// continue: Pula a iteração atual do loop e continua com a próxima iteração.