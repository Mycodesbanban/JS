const nomedomes= function(mes){
  if(mes===1){
    return "Janeiro"
  }else if(mes===2){
    return "Fevereiro"
  }else if(mes === 3){
    return "março"
  } else if (mes=== 4){
    return "abril"
  } else if (mes === 5){
    return "maio"
  }else if(mes === 6) {
    return "junho"
  } else if(mes === 7){
    return "julho"
  }else if (mes === 8){
    return "agosto"
  } else if(mes === 9){
    return "setembro"
  }else if(mes ===10) {
    return "outubro"
  }else if (mes === 11){
    return "novembro"
  } else if (mes === 12){
    return "dezembro"
  }
  else{
    return "erro"

  }
}
console.log(nomedomes(1))
console.log(nomedomes(2))
console.log(nomedomes(3))
console.log(nomedomes(4))
console.log(nomedomes(5))
console.log(nomedomes(6))
console.log(nomedomes(7))
console.log(nomedomes(8))
console.log(nomedomes(9))
console.log(nomedomes(10))
console.log(nomedomes(11))
console.log(nomedomes(12))
console.log(nomedomes(13))
