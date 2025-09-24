//promise é promessa é algo que podemos dizer que vai ser resolvido no futuro
let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){ // para gera uma promessar precisamos passar uma função nos parametros
    cumprirPromessa()

}) 

console.log(typeof p) //object 
console.log(typeof Promise)// function 
p.then(function(valor){
    console.log(valor) //3
})

let g = new Promise(function(cumprirPromessa){ 
    cumprirPromessa({
        x:5,
        y:2
    }) // gerando com objetos

}) 
g.then(function(valor){
    console.log(valor.x)
    console.log(valor.y)
})

let h = new Promise(function(cumprirPromessa){
    cumprirPromessa([
        "Ana", "Carlos" , "Junior" , "Gustavo"
    ]) // gerando listas 
})

h.then(function(valor){
    console.log(valor[1])
    console.log(valor)
})

let d = new Promise(function(cumprirPromessa){
    cumprirPromessa([
        "Ana", "Carlos" , "Junior" , "Gustavo"
    ])
})

d.then(valor => valor[0]) // Arrow function
.then(primeiro => primeiro[0])
.then(letra => console.log(letra)) // mostra a primeira letra do index 0

let n = new Promise(function(cumprirPromessa){
    cumprirPromessa([
        "Ana", "Carlos" , "Junior" , "Gustavo"
    ])
})

n.then(valor => valor[0])
.then(primeiro=> primeiro[0])
.then(letra =>letra.toLowerCase()) 
.then(letra => console.log(letra)) // vai fazer a letra fica minuscula
// toLowerCase é usado para as letras ficarem minusculas
