function real (partes , ...valores){
    const resultado = []
    valores.forEach((valor , indice)=>{
        valor=isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice] , valor)
         // isNaN: determina se um valor é NaN (Not a Number)
        //?: substituir o if else 
        // toFixed:retorna uma string que representa este número usando notação de ponto fixo com o número especificado de casas decimais

    }) // forEach é um método de instâncias de Array executa uma função fornecida uma vez para cada elemento do array. 
    return resultado.join("") //join: instâncias de Array cria e retorna uma nova string concatenando todos os elementos deste array, separados por vírgulas ou uma string separadora especificada

}
const preco = 29.90
const precoparcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoparcela}.`)