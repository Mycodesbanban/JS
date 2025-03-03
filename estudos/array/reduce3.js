// reduce 03 
// implementação de reduce
Array.prototype.reduce2= function(callback , valorInicial){
    let indiceinicial=valorInicial?0:1
    let acumulador = valorInicial||this[0]
    for(let i = indiceinicial ; i < this.length; i++){
        acumulador = callback(acumulador , this[i] , i , this);
    }
    return acumulador
}

// codigo Chat gpt abaixo explicando melhor 

// function meuReduce(array, callback, valorInicial) {
//   let acumulador = valorInicial;
// Se não passar um valorInicial, o primeiro valor do array é o acumulador
//   if (acumulador === undefined) {
//     acumulador = array[0];
//     // Começa o loop no segundo item do array
//     for (let i = 1; i < array.length; i++) {
//       acumulador = callback(acumulador, array[i], i, array);
//     }
//   } else {
//     // Se passar valorInicial, começa o loop no primeiro item do array
//     for (let i = 0; i < array.length; i++) {
//       acumulador = callback(acumulador, array[i], i, array);
//     }
//   }
//   return acumulador;
// }



const alunos = [
    {Nome:"Pedro" , idade:37 , curso:"geografia" , nota:1.2 , bolsita:true},
    {Nome:"Maycon" , idade:15 , curso:"Web mordeno" , nota:9.2 , bolsita:true},
    {Nome:"Maysa" , idade:15 , curso:undefined , nota:null , bolsita:false}

]
const todosbolsistas=(resultado , bolsita) => resultado && bolsita 
console.log(alunos.map(a=>a.bolsita).reduce2(todosbolsistas))  

const algumbolsista=(resultado , bolsita) => resultado || bolsita
console.log(alunos.map(a=>a.bolsita).reduce2(algumbolsista)) 