// imperativo vs declarativo

// A programação imperativa é um estilo no qual você descreve como as coisas devem ser feitas. Em vez de apenas declarar o que quer, você detalha passo a passo as instruções que o computador deve seguir para realizar uma tarefa.

// A programação declarativa, por outro lado, é um estilo em que você descreve o que quer que o programa faça, sem detalhar como exatamente ele vai fazer isso. Ou seja, você foca mais no resultado desejado do que no processo exato para chegar lá.
const alunos = [
    {nome:"joão" , nota:6.9},
    {nome:"Maria" , nota:4.3}
    
]
// imperativa
let total = 0
for ( let i = 0 ;  i < alunos.length;i++){
    total+=alunos[i].nota
}
console.log(total / alunos.length); // passo a passo de como deve ser feito

// declarativa
const getNota=aluno=>aluno.nota
const soma=(total , atual)=> total + atual
const total1= alunos.map(getNota).reduce(soma)
console.log(total1/alunos.length); // o que tem que ser feito 


//select code , nome , email from clientes where ativo = 1 
// esse codigo sql é declarativa





