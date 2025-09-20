const numeros = [1 ,2, 3, 4, 5, 6, 7, 8 , 9 ];
for (let numero of numeros){
    if(numero === 2){
        console.log("pulei o numero 2")
        continue; // quando chega no numero 2 vai pular para a proxima interação do laço
    } else if (numero === 6){
        break // se o numero for igual a 6 vai parar a interação do laço
    }
    console.log(numero)
}