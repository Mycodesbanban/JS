// vamos criar uma variavel
var numero=1;
{
    var numero=2
    console.log('dentro=',numero);
}
console.log('Fora=', numero);
// criamos variaveis fora é dentro de um bloco de codigo 
// vimos que o resultado foi o 2 , o de fora foi ignorando e pegou o do bloco.