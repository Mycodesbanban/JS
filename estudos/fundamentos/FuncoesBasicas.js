function HelloWord () { // criando a função
    console.log("hello world`")
    
}

HelloWord() // chamando uma função

function SeuNome (nome) {
    console.log(`hello ${nome}`) //
}

SeuNome("maycon") // colocando nome 

function Return (){
    return console.log(12345) // isso que a função vai retorna 
}

Return()


function soma (x , y){ // calculos 
    const resultado = x + y
    return resultado // retornando o resultado dessa função 
}

console.log(soma(3 , 8)) // inserindo os numeros 

const raiz = function (n) {
    n = n **0.5
    return n 
}

console.log(raiz(4))