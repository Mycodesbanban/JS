const contadora=require("./instanciaunica")
const contadorb=require("./instanciaunica")
const contadorC=require("./instanciaNova")() //  () Chama a função retornada pelo módulo, criando um novo objeto.
const contadorD=require("./instanciaNova")()

contadora.inc() // vai incrementar mais 1 no valor 
contadora.inc() // vai incrementar mais 1 no valor 
console.log(contadorb.valor); // o valor original era 1 mas como adicionamos 2 incrementamos ficou 3

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor); // O valor não foi alterado por que ultilizamos o contador D

console.log(contadorC.valor); //retornou o valor que incrementamos no contador C


// então significa que a instancia unica faz que todos os elementos que tenha ela seja incrementado , já a nova instancia cria um novo objeto para cada variavel ou constante que tenha ela

