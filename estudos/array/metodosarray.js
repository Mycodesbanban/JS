// metodos importantes do array
const pilotos=["veterl" , "predto", "Michael", "ronaled"];
pilotos.pop(); //.pop() é utilizado para remover o último elemento de um array e retorná-lo. Esse método altera o comprimento do array.
console.log(pilotos);

pilotos.push("verscaus");
console.log(pilotos);

pilotos.shift(); // .shift() é utilizado para remover o primeiro elemento de um array e retornar esse elemento , assim como o .pop() ele altera o comprimento do array
console.log(pilotos);

pilotos.unshift("Cleiton"); // .unshift adicionar o novo elemento na primeira posição do array
console.log(pilotos);

// adicionar 
pilotos.splice( 2 , 0 , "JSoen"); // Adiciona no índice 2, empurrando os elementos existentes para frente
console.log(pilotos);

// remover 
pilotos.splice(2 , 1); // remove apenas 1 elemento apartir do index 2
console.log(pilotos);

// novo array
const algunspilotos1=pilotos.slice(1,3); // o metodo slice  é usado para retornar uma cópia superficial de uma parte de um array, sem modificar o array original
// 1 onde o array vai começar 
// 3 onde vai terminar , é importante lembra que quando colocamos onde ele vai termina o index que foi definido como no exemplo está o 3 , ele não vai aparecer 
console.log(algunspilotos1);

const algunspilotos2=pilotos.slice(2);// vamos não definir até onde ele vai termina 
console.log(algunspilotos2); // ele vai pega o index 2 e vai até o ultimo index já que não definimos 


