function estaentre (numero , maximo , minimo , inclusivo = false){
    if ( inclusivo) return numero >= minimo && numero <= maximo
   return numero > minimo && numero <  maximo 
 }
 console.log(estaentre(50 , 100 , 10));
