//... = rest: quando ultilizando o operador rest vai juntar todos os parametros passados
//...=spread= quando ulitizando o operador spread vai espalhar

//usar spread com objeto
const funcionario = {nome:"maria" , salario:1282.23}
const clone = {ativo:true , ...funcionario} // estamos pegando todos os atributos de funcionarios e estou espalhando dento do objeto
console.log(clone)

//usar o spread com array
const grupoA=["João" , "pedro" , "gloria"]
const GrupoB=["Carlos" , "gloria2" , "cu" , ...grupoA] // espalhando todos oe elementos do grupo a para o grupo b
console.log(GrupoB)