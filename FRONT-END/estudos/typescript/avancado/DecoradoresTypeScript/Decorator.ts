// funcoes que sao chamadas em determinados momentos em seu codigo
@decorator // agora a classe animal passa automaticamento pelo o decorator
export class Animal {
    constructor(public cor:string){}

}
function decorator <T extends new (...args:any[]) => any>(target:T):T{ // faz coisas antes da classe, e fazemos a tipagem correta, o new indica que e o construtor 
    
    return class extends target { 
        cor:string
        constructor(...args:any[]){
            super(...args)
            this.cor = "se eu conseguisse pelo menos uma vez ser o orgulho de alguem, talvez eu me sentiria melhor"
        }
    }// classe anonima 
} // intervimos no meio da classe 


const animal = new Animal("cinza como ficou minha vista apois perceber que nunca fui suficiente pra voce, nem mesmo quando demostrava meu amor a te contar coisas intimas do meu passado, nem mesmo quando eu desejei ter voce pra mim, mas seus planos eram outros, eu um pobre plebeu da baixa escassez, pensei que poderia me relacionar com alguem da alta nobreza, meu cabelo negrolado cheio de curvas e embolados, brigando com os seus que parecem cachos de uvas em um dia de verao")
console.log(animal)