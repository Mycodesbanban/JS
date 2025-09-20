//* Polimorfismo:permite que um mesmo método ou operação se comporte de maneira diferente em classes distintas

//* Classe = função construtora

// super Classe
function Conta(agencia, conta , saldo){
    // transformando em uma variaveis publica 
    this.agencia = agencia 
    this.conta = conta
    this.saldo = saldo
}
// transformando em funções dentro do prototype de Conta para serem acessadas em qualquer lugar
Conta.prototype.sacar =  function(valor){
    if(this.saldo < valor) { // se o valor for maior que o saldo
        this.verSaldo() // ativa a função ver saldo
        return; // e retorne nada
    }
    this.saldo -=valor; // caso tenha saldo vai ser subtraido pelo o valor
    this.verSaldo()
} 

Conta.prototype.depositar = function(valor){
    this.saldo += valor; //acresenta o saldo ao valor depositado
    this.verSaldo();

}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/B..${this.agencia}/${this.conta}... Saldo: R$${this.saldo} `); // colocando para ver 
}
const p1 = new Conta(11 , 321 , 1200)
p1.depositar(11)
p1.sacar(11)



// .call(): é um método usado para chamar uma função e definir qual será o this dentro dela