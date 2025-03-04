const inverso = function(tpe){
    const tipo = typeof tpe
    if (tipo === Boolean){
        return !tpe
    } else if(tipo === Number) {
        return -tpe
    } else{
        return `Boleean ou numero esoerado , mas o parametro é do tipo ${tipo}`
    }
}


console.log(inverso("8"))
console.log(inverso(-2000))
console.log(inverso(true))