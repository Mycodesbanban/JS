let num1=1
let num2=2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)


function tratar(erro) {
    throw true
}
function imprimirnomegritando (obj){
    try{
        console.log(obj.name.toUppercase()+ '!!!')
    }
    catch(e) {
        tratar(e)
    }
}
const obj = { nome: 'Roberto'}
imprimirnomegritandoGritando(obj)