// O tipo enum e algo exclusivo do typescript
 enum Cores {
    VERMELHO, //0
    AZUL, //1
    AMARELO //2
 } 
 console.log(Cores)

 export function EscolhaUmaCor (cor:Cores):void {
    console.log(Cores[cor])
 }
 EscolhaUmaCor(Cores.AMARELO)