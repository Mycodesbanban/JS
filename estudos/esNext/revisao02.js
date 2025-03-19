//Aroow function
const soma = (a ,b) => a +b
console.log(soma(3, 3)) // funções arrow são funcões anonimas 

//Arrow Function (this)
const lexico1 = () => console.log(this==exports) // true
const lexico2= lexico1.bind({}) // true
lexico1()
lexico2()

//parametros default

function log (texto="node"){
    console.log(texto)
}
log() // node , recebeu o valor padrão
log("Eu tenho a força sou invencivel vamos amigos ")

//Operador rest
function total (...numeros){
    let total=0
    numeros.forEach(n => total +=n)
    return total
}
console.log(total(2 , 3,4 ,5 , 6,6))

