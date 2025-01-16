//  vamos entender primeiro os templates strings para isso primeiro vamos cria uma variavel e concatenação e depois vamos coloca em templates 
const nome= 'Rebeca'
const concatencao='olá '+ nome +'!'
// vamos usar template string
const template=`
 Olá
 ${nome}`
console.log(concatencao, template)
// dentro do nosso template podemos usar expressoes numericas 
console.log(`1+1=${1+1}`)
// vamos criar uma função 
const up = s => s.toUpperCase()
//console.log(`Ei...$up(cuidado))!)