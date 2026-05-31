export class Caixa <C>{ // metodo (generic)
    constructor(private valor:C){

    }
    pagar():C  {
        return this.valor;
    }

}
const caixaNumero = new Caixa<number>(42);
const caixaTexto = new Caixa<string>("olá");