// gera um objeto no espoco global, como se fosse um modulo, fora do name space qualquer coisa que tenha la nao existe 
namespace MeuNameSpace{
    console.log(11111)
    class PessoaDoNameSpace{
        constructor(public nome:string){}
    }
    const pessoa = new PessoaDoNameSpace("carlos")
    console.log(pessoa)
}