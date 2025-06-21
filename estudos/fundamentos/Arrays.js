const arrays= ["Luiz" ,"maria" , "gustavo"] // podemos dizer que o array e uma lista de coisas 

console.log(arrays) // mostrando no console
console.log(arrays[1]) // acessando o segundo index do array (1) o array vai de 0 a diante 

arrays[1] = "dudu" // alterando o segundo index do array para dudu

console.log(arrays[1])

console.log(arrays.length) // ver o tamanho do array 

arrays.push("hindro") //estamos adicionando essa string para o array , no ultimo index
console.log(arrays)

arrays.unshift("Luana") // estamos adicionando essa string para o array , no primeiro index

arrays.pop() // remove o ultimo index 

arrays.shift() // remove o primeiro index 

delete arrays[1] // removendo o index especifico

console.log(arrays)

console.log(arrays[50]) // podemos acessar indexs que nem existem

console.log(arrays.slice(0 , 3)) // pega do elemento 0 ate o elemento 3 , o elemento 3 não será incluido



