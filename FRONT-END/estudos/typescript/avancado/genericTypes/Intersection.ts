function unirObjetos <O1,O2>(obj1:O1, obj2:O2): O1 & O2{
    // return { ...obj1, ...obj2}
    return Object.assign({}, obj1, obj2)
}
const obj1 = {chave1:"gay"}
const obj2 = {chave2:"gayzao"}


const uniao = unirObjetos(obj1,obj2)

console.log(uniao)