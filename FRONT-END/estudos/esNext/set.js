//Não aceita repetição / não indexada

const Time = new Set ()
Time.add("Vasco") //add:insere um novo elemento com um valor especificado neste conjunto
Time.add("São Paulo")
Time.add("Flamengo").add("Corinthians")
Time.add("Vasco") // não vai ser adicionado , vai ser ignorado

console.log(Time)
console.log(Time.size) // ver o tamanho do size . 4
console.log(Time.has("vasco")) // vendo se tem vasco com letra minusculas, false
console.log(Time.has("Vasco")) // true
Time.delete("São Paulo") // removendo o São Paulo do set

const nomes = ["Raquel" , "Lucas" , "Jorge" , "Lucas"]

const setnomes = new Set (nomes) 

console.log(setnomes) // não aceita repetição