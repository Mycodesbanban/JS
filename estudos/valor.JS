// a ideia do par nome / valor está presente quando declaramos uma constante ou uma variavel
const sanudacao='Opa'
// isso nos definimos em uma variavel ou constante dentro de um contexto léxico , o contexto léxico é o contexto/ local no qual a sua variavel foi definida fisicamente no codigo
 
function exec(){
    const sanudacao='Falaaa';
    return sanudacao
};
// nessa função temos outro contexto léxico , por que quando olhamos para a escrita definimos dessa constante dentro da função, isso significica que o local que ela foi definido ele definir o contexto espeifico dessa função 

//Objetos são grupos aninhados de pares nome/valor
const cliente={
    nome:'preto',
    idade: 45,
    peso: 90,
    enderenço:{
        lamachante:'Rua da tistreza',
        numero: 123,
        bairo:'FORa do meu bilau '
    }

}
console.log(sanudacao)
console.log(exec())
console.log(cliente)
// quando executamos uma variavel que foi definida como funcção temos que colocar ela assim exe() dentro do console.log
