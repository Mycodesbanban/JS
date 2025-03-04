 function inverso(tpe){
    const tipo = typeof tpe
    if (tipo == "boolean") 
         return !tpe
    else if(tipo == "number") 
        return -tpe
      else  return `Boleean ou numero esoerado , mas o parametro é do tipo ${tipo}` }


console.log(inverso(545))
console.log(inverso(-2000))
console.log(inverso(true))

// function inverso(valor) {
//     const tipo = typeof valor
//     if (tipo == "boolean") return !valor
//     else if (tipo == "number") return -valor
//     else
//     return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
// } 
// console.log();