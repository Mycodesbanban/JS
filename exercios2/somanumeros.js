function somadearray (array){
    let resultado = 0
    array.forEach(array => resultado +=array);
    return resultado
}
console.log(somadearray([9 ,3 ,4, 5, 6, 7, 7, 8, 89, 89]));