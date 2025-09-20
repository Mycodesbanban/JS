// vamos criar uma variavel é ela vai receber o valor false
let mokey=false;
console.log(mokey)
// vimos que no terminal o resultado foi false
mokey=true
// agora mudamos de false para true que significa verdadeiro
console.log(mokey)
//  agora vamos colocar o valor 1 em vez de true
mokey=1
console.log(!!mokey)
// quando colocamos !! para verdadeiro ou falso no console.log , vimos que se colocamos true !! vai ser verdadeiro é se colocamos ! false vai ser verdadeiro mas se  invertemos a ordem e colocamos !! vai ser false é ! tambem vai ser false pois estamos lidado com a ordem então !! para ver se é verdadeiro ! para ver se é falso 
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(mokey=true))
// todos em cima são verdadeiros
console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(mokey=false))
// todos a cima são falso
console.log('para finalizar...')
console.log(!!(''|| 0 || ' '))
// vimos que colocamos varios valores falso acima e somente 1 verdadeiro quando executamos no terminal vai ser verdadeiro
let nome='Lucas';
console.log(nome || 'Desconhecido')
