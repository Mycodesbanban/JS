// classe 01
// class é uma forma de definir um "molde" para criar objetos com propriedades e métodos
class lancamento{
    constructor(nome='Génerico', valor=0){
        this.nome= nome
        this.valor= valor
    }  // é um método especial usado para inicializar objetos de uma classe , ele é chamando automanticamente quando um objeto é criado a partir dessa class

}
class cliclofinaceiro{
    constructor(mes , ano){
        this.mes= mes
        this.ano=ano
        this.lancamentos=[]
    }
    addlancamento(...lancamentos){
        lancamentos.forEach(l=>this.lancamentos.push(l)) 
    }
    sumario(){
        let valorconsolidado=0
        this.lancamentos.forEach(l=>{
            valorconsolidado += l.valor
        })
        return valorconsolidado
    }
}
const salario= new lancamento("salario" , 48634);
const contadeluz= new lancamento("luz" , - 892);
const conta = new cliclofinaceiro(6 , 2018);
conta.addlancamento(salario , contadeluz)
console.log(conta.sumario()) // 47742
