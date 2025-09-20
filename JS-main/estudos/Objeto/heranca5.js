// herança 5
console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function 

String.prototype.reverse = function(){
    return this.split("").reverse().join()
} // reverse é uma função que inverte a ordem dos elementos em um array.
  //split é uma função que divide uma string em um array de substrings com base em um delimitador especificado
  // join é uma função que é usada para unir todos os elementos de um array em uma única string, usando um delimitador especificado

  console.log("Escola do Jegue".reverse()) // e,u,g,e,J, ,o,d, ,a,l,o,c,s,E
Array.prototype.frist= function(){
     return this[0]
} 
console.log([1 , 2, 3, 4, 5].frist())//1
console.log(["A " , "B","C"].frist())//A

String.prototype.toString=function(){
    return"Bluenzão"
}
console.log("Escola do bluezão".reverse()) // vai reverter somenete o return que definimos no codigo


