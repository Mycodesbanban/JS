function segundomaior(array){
    if(array.length < 2){
        return "O array precisa ter mais elementos"
    }
    let maior=-Infinity;
    let segundomaior=-Infinity;

    for(let i = 0 ; i < array.length; i++){
        if(array[i] > maior){
            segundomaior=maior
            maior=array[i]
        } else if (array[i] > segundomaior && array[i] !== maior){
            segundomaior=array[i]
        } 
    }
    return segundomaior
}
console.log(segundomaior([10 , 29 , 27 , 28 , 26]));
