// Reduce 02
// Cria uma função reduce aonde vai dizer se todos os alunos são bolsistas
// algum aluno é bolsista
const alunos = [
    {Nome:"Pedro" , idade:37 , curso:"geografia" , nota:1.2 , bolsita:true},
    {Nome:"Maycon" , idade:15 , curso:"Web mordeno" , nota:9.2 , bolsita:true},
    {Nome:"Maysa" , idade:15 , curso:undefined , nota:null , bolsita:false}

]
const todosbolsistas=(resultado , bolsita) => resultado && bolsita 
console.log(alunos.map(a=>a.bolsita).reduce(todosbolsistas)) ///false 

const algumbolsista=(resultado , bolsita) => resultado || bolsita
console.log(alunos.map(a=>a.bolsita).reduce(algumbolsista)) // true

