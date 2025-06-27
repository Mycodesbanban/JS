// Herança com classes 

class DispositivoEletronico {
   constructor(nome){
    this.nome = nome // criando uma variavel que pode ser acessada publicamente na clase
    this.ligado =  false
   }
   Ligar(){
    if(this.ligado) {
        console.log("já ligado")
       return
    }
    this.ligado = true
    
   }
   desligar(){
       if(!this.ligado) {
        console.log("Desligado")
       return
    }
    this.ligado = false
   }
}

class Iphone extends DispositivoEletronico { // falando que a classe iphone vai se extender na classe dispositivosEletronicos
}
const s1 = new Iphone("11")
s1.Ligar()
console.log(s1.ligado) // acessando a variavel ligado publicamente 
