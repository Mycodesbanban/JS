
export function add (a:unknown, b:unknown){ // a e b nao foram definidos 
    if(typeof a === "number" && typeof b === "number") { // aqui eu passo os valores dele com o number e caso eles sejam number vai ser somando no retorno
        return a + b
    }
    return `${a} ${b}` 
}
console.log(add(1,3))
console.log(add("maycso", "m,ausn"))