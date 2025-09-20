function array (elemento , vezes ){
    let repeticao = []
    for( let i = 0 ; i < vezes ; i++){
        repeticao.push(elemento)
    }
    return repeticao

}       
console.log(array("bu" , 3));