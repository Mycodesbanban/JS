export function add (a:unknown, b:unknown){
    if(typeof a === "number" && typeof b === "number") {
        return a + b
    }
    return `${a} ${b}`
}
console.log(add(1,3))
console.log(add("maycso", "m,ausn"))