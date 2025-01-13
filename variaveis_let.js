// primeiro vamos definir uma var
var numero=1;
{
    let numero=2;
    console.log('dentro=',numero);
}
// criamos um bloco de codigo e vamos executar no console.log
console.log('fora=' , numero);
// vimos que no valor de let dentro do bloco de codigo vimos que ele executou somente o let , é o fora executou somente o var mesmo que subistituimos o valor de var por let o resultado será o mesmo