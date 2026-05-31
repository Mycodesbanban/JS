// todas as classes que se estenderem daquela classe terao o mesmo tipo dessa classe

export abstract class  Personagem {
    constructor(protected nome:string, protected ataque:number, protected life:number){}
    atacar(personagem:Personagem):void{
        this.bordao()
        console.log(`${this.nome} esta usando seu ataque lendario `)
        personagem.perderVida(this.ataque)
    }
    perderVida(forcaDeAtaque:number):void{
        this.life -= forcaDeAtaque
        console.log(`${this.nome} esta sendo atacado e ficou com ${this.life} de hp HSZHSHHSHSHSHSHSHSHSHSHSHSHSHSHSH`)
    }
    abstract bordao():void;
    
}
export class GuerreiraMacumbeira extends Personagem {
    bordao(): void {
        console.log("a macumbeira lancou seus exus")
    }
}
export class GuerreiraEvangelica extends Personagem {
    bordao(): void {
        console.log("a evangelica lancou suas heresias pois nao sabe ler a biblia ")
    }
}
export class GuerreiroCatolico extends Personagem {
    bordao(): void {
        console.log("o lendario maycon, o da imculanda, lanca seu ataque pra proteger a igreja de cristo onde derrota todos os inimigos com a verdade plena e absuluta.")
    }
}

const macumbeira = new GuerreiraMacumbeira("Xbal", 1000, 5444)
const evangelica = new GuerreiraEvangelica("maysa Pentencostal", 1219, 9782)
const catolico = new GuerreiroCatolico("maycon", 56478390467745757584934736638393, 4467896987697654123456789090999999999999999999999999999999999)
macumbeira.atacar(evangelica)
catolico.atacar(macumbeira)
