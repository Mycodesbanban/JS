// vamos entender o hoisting é um comportamento padrão que move as declarações de variáveis, funções, classes ou imports para o topo do seu escopo antes da execução do código
console.log('a=',a);
var a =2
console.log('a=' , a);
// vimos que o resultado de cima e undefined e o de baixo é o valor que definimos na variavel , o valor que estava em cima não tinha nenhuma variavel definida então o que ele fez? ele pegou o var a definiu em cima e ja o a=2 ele colocou em baixo por isso teve esse resultado
function teste(){
    console.log('a=' , a);
    var a = 2
    console.log('a=', a);
}
teste()
console.log('a=' , a);
// mesmo na função o resultado e o mesmo 
console.log('b=',b);
let b = 2;
console.log('b=' , b);
//  o resultado usando let vai ser erro pois não definimos o valor em cima 