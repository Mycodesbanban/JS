function depesastotais(itens){
    let total=0
    for(let item of itens ){
        total+=item.preco
    } return total
}
console.log(depesastotais([
    {
        nome:"Jordel" , categoria:"Cu" , preco:89364
    },
    {
        nome:"Anerwe" , categoria:"Anapaulo" , preco:37456
    }
]));
