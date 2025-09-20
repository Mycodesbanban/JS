
const notas = [ 7.7 , 6.5 , 6.8 , 5.2 , 8.9 , 7.1 , 9.0 , 1.0 , 10]
// exemplo sem callback
let notasbaixas=[]
for(let i in notas ){
    if ( notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)

// exemplo com callback
const notasbaixas2=notas.filter(function (nota){
    return nota < 7
 
})
console.log(notasbaixas2)

// usando o arrow
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)