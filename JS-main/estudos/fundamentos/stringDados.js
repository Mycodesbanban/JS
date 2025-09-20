// strings são indexadas que começa de 0 e vai ate em diante

let umaString = "'texto'" ; 

console.log(umaString.charAt(6)) // mostra no console
console.log(umaString.indexOf("texto")) // 1
console.log(umaString.lastIndexOf("o")) // 5
console.log(umaString.replace("texto" , "Buceta de maysa e maycon caiu de boca ")) // subistituir os textos 

// charAt: retorna um index de uma posição especifica da string
// concat: junta as coisas
// indexOf: em qual index começa a palavra que queremos especificar
// lastIndexOf: começa do final para trás 
// search:procura o index que nós pedimos para ser encontrado
// replace:subistituir palavras das strings 
//.length retorna exatamente o tamanho 
// slice: para ver onde queremos corta e ate onde queremos ir , precisamos lembra que temos que adicionar um a mais (1[onde se inicia o corte] 3[onde termina , mas como precisamos adicionar mais 1 então vai terminar no 2])
