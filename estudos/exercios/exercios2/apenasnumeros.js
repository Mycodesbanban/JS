function array (somentenumeros){
    let numero = []
    for ( let i of somentenumeros){ 
        if(typeof i === "number") {
            numero.push(i)
        }

    } return numero
         
}
console.log(array([283 , 1823 ,"bulsa"])); 
