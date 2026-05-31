export class Empresa {
    public readonly nome: string;
    private readonly colaboradores:Colaborador[]= []
    protected readonly cnpj:string // pode ser acessado nas classe que foi criado e nas subclases 
    constructor(nome:string, cnpj:string){
        this.nome = nome
        this.cnpj = cnpj
    }
    adicionarColaborador(colaborador:Colaborador):void{
        this.colaboradores.push(colaborador)
    }
 }
export class Colaborador {
    constructor(public readonly nome:string,  public readonly sobrenome:string ){} // maneira mais rapida
}
 const empresa1 = new Empresa("BingaGROSSAS ","1.1.1.1.1.1.11.1.1.1.1.1.1.11..")
 const colaborador1 = new Colaborador("binga duro", "ou mole")
 empresa1.adicionarColaborador(colaborador1)
 console.log(empresa1)

