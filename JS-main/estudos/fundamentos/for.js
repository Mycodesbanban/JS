for (let i = 0; i <= 99; i++){ // para o for tradicional funcionar precisamos criar uma variavel dentro dos parenteses  , uma codição , e incrimentar nossa variavel de controle
    //console.log("AMOR I LOVE YOU 🥺😚💕 ")
}

for (let i = 0; i <= 300 ; i += 10){ // * ele está indo de 10 em 10
    //console.log("FORA O PT ELE VEIO PARA TE COMER")
}

for (let i = 0; i <= 10 ; i++){
    const par = i % 2 ===0 ? "par" :"impar"
   // console.log(i , par) // * verificando ser é par ou impar
}

// * Podemos percorrer arrays no for 

const frutas = ["maya" , "gustavo" , "feijão"] // criando o array

for (let i = 0; i <= frutas.length; i++){
    console.log(`indece ${i}`, "Se fudeu" , frutas[i]);
}