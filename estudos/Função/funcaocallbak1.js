// funções callbacks
const frac= ["Mercedes" , "Audi" , " BMW"]
function imprimir( nome , indice){
    console.log(`${indice + 1} . ${nome}`)

}
frac.forEach(imprimir)
// resultado
// 1. Mercedes
// 2 . Audi 
// 3 . BMW
frac.forEach(function(a){
    console.log(a)
})