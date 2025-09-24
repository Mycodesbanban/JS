const numero = [5 , 50 , 80 , 1 ,2 , 3 , 5 , 8 , 7 , 11 , 20 , 40]

const pares = numero.filter((valor) =>{
    if(valor % 2 ===0){
        return valor
    }
}).map((valor) =>{
    return valor * 2
}).reduce((acumulador , valor)=>{
    acumulador += valor
    return acumulador
} , 0)

console.log(pares)