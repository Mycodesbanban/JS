// pode ter mais de um tipo 

function  soma(a:number | string, b:number | string):number |string{
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }
    return `${a}${b}`
}

console.log(soma(12,12))
console.log(soma("12","12"))