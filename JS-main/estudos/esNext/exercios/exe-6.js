// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
// e o resto da divisão destes dois valores.
function valor ( num1 , num2){
    console.log("Resultado" + Math.floor(num1/num2))
    console.log(`resto:${num1%num2}`)
    
}
valor(5 , 25)