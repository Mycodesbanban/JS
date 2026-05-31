// decorator factores
function betas(param1:string, param2:string){ // criando uma funcao onde a intencao dela e receber os paramentros, ela deve retorna uma funcao, e essa funcao deve ser o decorator
    return function  <T extends new (...args:any[]) => any>(target:T):T{
    
    return class extends target { 
        cor:string
        constructor(...args:any[]){
            super(...args)
            this.cor = "se eu conseguisse pelo menos uma vez ser o orgulho de alguem, talvez eu me sentiria melhor"
        }
    }
} 
}

@betas("valor1", "valor2") // passando paramentros pra os nossos decoradores 
export class Animal {
    constructor(public cor:string){}

}



const animal = new Animal("cinza como ficou minha vista apois perceber que nunca fui suficiente pra voce, nem mesmo quando demostrava meu amor a te contar coisas intimas do meu passado, nem mesmo quando eu desejei ter voce pra mim, mas seus planos eram outros, eu um pobre plebeu da baixa escassez, pensei que poderia me relacionar com alguem da alta nobreza, meu cabelo negrolado cheio de curvas e embolados, brigando com os seus que parecem cachos de uvas em um dia de verao")
console.log(animal)


// composicao de decoradores 

// podemos crias mais de um decoradores 

// e so colocar o @ e nome do decorador