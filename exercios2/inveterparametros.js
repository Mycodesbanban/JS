function invertido(objeto){
    const paresdechaves=Object.entries(objeto)
        .map(pardechaves=> pardechaves.reverse())

    return Object.fromEntries(paresdechaves)
}
console.log(invertido({"a":1 , "b":2 , "c": 3}))