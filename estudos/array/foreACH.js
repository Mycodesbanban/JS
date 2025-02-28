// foreach #01
const aprovados= ["Junior" , "solidao" , "amor", "insegurança"];
aprovados.forEach(function(nome ,indice , array){ 
    console.log(`${indice + 1}) ${nome}`);
    console.log(array) 
}) //.forEach() permite executar uma função fornecida uma vez para cada elemento de um array, na ordem , a ordem é a seguinte array.forEach(function(elemento, indice, array) {}) elemento: O elemento atual no array sendo processado indice (opcional): O índice do elemento atual sendo processado .array (opcional): O array sobre o qual o forEach() foi chamado.

aprovados.forEach(nome => console.log(nome)); // vai imprimir cada um dos nomes dos aprovados 

const exibiraprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibiraprovados) // ele vai imprimir da mesma forma 



  
