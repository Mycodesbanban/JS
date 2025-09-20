function multiplicador(num1 , num2){
    if(num1 ===0 || num2 ===0){
        return 0
    }
    const maiornumero=Math.max(num1 , num2);
    const menornumero=Math.min(num1 , num2);
    function multiplicadorrecusos(num , multiplicador){
        return(
            multiplicador === 1?
            num: 
            num + multiplicadorrecusos(num ,multiplicador-1)
        )
    }
    return multiplicadorrecusos(maiornumero , menornumero)
}
console.log(multiplicador(2 , 8));