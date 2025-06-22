const frutas = ["banana" , "maça" , "uva"]

for (let i in frutas){ // pecorrer os index , não acessando os valores diretamente 
    console.log(i)
    console.log(frutas[i]) // acessando o array
}

const pessoa = {
    nome:"luiz", 
    sobrenome:"Otavo", 
    idade:893,
}
for (let i in pessoa){ 
    console.log(i) // interando sobre as chaves nome , sobrenome , e idade

}
