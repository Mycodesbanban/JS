//concat
// concat ele é utilizado para combinar (ou concatenar) dois ou mais arrays ou strings , também é possível usar o concat() para juntar dois ou mais arrays
const filhas =["Ulascksd" , "cibalena"];
const filhos=["Uosxxtji","swabngo"];
let todos = filhos.concat(filhas)
console.log(todos  , filhas , filhos); //  junta os array de filhas com os de filhos 
// podemos colocar mais nome tambem 
 todos =filhos.concat(filhas , "ana julia ");
 console.log(todos);

console.log([].concat([1 , 2] , [3 , 4] , 5 ,"bluexais" , [[9 , 8]])); // podemos usar o concat em um array vazio por conta que é considerado objeto , quando colocamos um array dentro de outro array , ele vai tirar os primeiros elementos do primeiro array os restantes ficaram dentro da array 

//* Usando o spread : ele é usado para espalhar um array
//* vamos usar ele para inserir em um array dois arrays existentes 

const spread = [...filhas , ...filhos , "Bosses of des"]
console.log(spread)