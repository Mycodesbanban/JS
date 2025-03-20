const tecnologia = new Map() // Map: é uma estrutura de dados que armazena pares chave-valor, semelhante a um objeto
tecnologia.set("react" , {framework:false}) //.set adiciona ou atualiza um valor em um Map
tecnologia.set("angular" , {framework:true})

console.log(tecnologia.react) // undefined 
console.log(tecnologia.get("react")) //get: Retorna o valor da chave , no caso vai retorna o react
console.log(tecnologia.get("react").framework) // false 

const chavesvariada = new Map ([
    [function() {} , "Função"], // criamos uma função como chaves , e o valor vai ser uma string
    [{} , "objeto"] , // colocamos um objeto como chaves , e o valor vai ser uma string 
    [123 , "Número"] // colocamos um numero como chaves , e o valor vai ser uma string 
])
chavesvariada.forEach((vl , ch)=>{ // vl = valor , ch= chave
    console.log(ch , vl)
})

console.log(chavesvariada.has(123)) // has: se um elemento está ou não está contido dentro desse Map   
chavesvariada.delete(123) // deletando 123
console.log(chavesvariada.has(123))
console.log(chavesvariada.size) //size:A propriedade de acesso de instâncias de Set retorna o número de elementos (exclusivos) neste conjunto. 


