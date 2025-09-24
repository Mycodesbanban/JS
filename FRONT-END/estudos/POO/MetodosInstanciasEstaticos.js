class ControleRemoto{
    constructor(tv){
        this.tv = tv // defindindo como uma variavel que pode ser acessada publicamente 
        this.volume = 0    
    }
    aumentarVolume(){
        if(this.volume >= 100){ // caso for maior ou igual a 100 a função acaba
            return
        }
        this.volume +=2
    }
    diminuir(){
        if(this.volume <=0){ // caso for menor ou igual a 0 a função acaba
            return
        }
        this.volume -= 2
    }
    // Quando criamos um metodo assim se chama de metodo de instancia 
    TrocarPilha(){

    }

    // Mas se colocamos uma palavra antes
    static TrocarCapa(){ // agora é um metodo estatico

    } 
    //? Qual a principal diferença?
    //*Instancia:É chamado a partir de um objeto (instância) da classe; ex:
    /*
    this.nome = nome
    
    p1.dizerNome();
    */
    //* O que acontence é o seguinte o metodo dizerNome() é um método de instância porque depende do valor de this.nome

    //* estaticos:É chamado diretamente a partir da classe, sem precisar criar um objeto ,não tem acesso ao this da instância, a menos que receba um objeto como parâmetro; ex:
    /* 
    class Util {
    static somar (a , b)
    return a+b
    }
    console.log(Util.somar(1 , 3))
    */

    //* somar é estático porque não precisa de nenhum dado de um objeto da classe Util

    //* static: é usado para transforma o metodo em static
}
const controle1 = new ControleRemoto("sangung")
controle1.aumentarVolume()
console.log(controle1.volume)