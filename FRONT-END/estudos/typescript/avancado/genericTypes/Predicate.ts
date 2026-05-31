// predicado de tipos
export function isNumber(value:unknown):value is number{
    return typeof value === "number"
}

console.log(isNumber("gay"))


export function soma <T> (...args:T[]): number | null {
    const retorno = args.reduce((sum, v)=> {
        if(isNumber(sum) && isNumber(v)) {
            return sum +v
        }
        return sum
    }, 0)

    if(isNumber(retorno)) return retorno
    return retorno
}
console.log(soma(1,2,3))