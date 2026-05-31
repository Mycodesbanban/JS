type Votacao = { // criando um tipo 
    numeroVotos:number, // dentro desse tipo vai ter numero de votos e a opcao
    opcao:string
}


export class VotacaoIniciada {
    private _OpcaoVotacao: Votacao[]= [] // criamos uma opcao de votacao privada onde recebe o tipo votacao com array e passamos dentro do tipo um array vazio 
    constructor(public detalhes:string){}
    adicionarVotcao(opcaoVotacao:Votacao): void { // criamos uma funcao onde retorna void e passamos as opcao de votacao dentro da nossa opcao de votacao privada, inserindo com o metodo push
        this._OpcaoVotacao.push(opcaoVotacao)
    }
    votar(IndexVoto:number):void { // criamos uma funcao votar onde recebe um index dentro dela 
        if(!this._OpcaoVotacao[IndexVoto]) return; // caso nao existe nao consegue votar 
        this._OpcaoVotacao[IndexVoto].numeroVotos += 1 // caso existir colocamos o numero do index e adicionamos o numero do voto
    }
    get OpcaoDeVotos():Votacao[] {
        return this._OpcaoVotacao // pegando tudo que vem da opcao de votacao privada
    }

}


export class VotacaoApp  { // criando um classe pra adicionar a votacao e mostrar 
    private votacoes: VotacaoIniciada[] = [] 
    adicionarVotacao(votacao:VotacaoIniciada):void {
        this.votacoes.push(votacao) // adiciona a votacao 
    }

    MostrarVotacoes(){
        for(const votacao of this.votacoes){ // moostra os detalhes da votacao
            console.log(votacao.detalhes)
        } 
        for(const OpcaoDeVotacao of votacao1.OpcaoDeVotos ){
            console.log(OpcaoDeVotacao.opcao, OpcaoDeVotacao.numeroVotos) // mostra as opcao e o numero de votos 
        }
    }
}


const votacao1 = new VotacaoIniciada ("qual e a sua linguagem de programacao favorita?")
votacao1.adicionarVotcao({opcao:"java", numeroVotos: 0})
votacao1.adicionarVotcao({opcao:"python", numeroVotos: 0})
votacao1.adicionarVotcao({opcao:"c#", numeroVotos: 0})
votacao1.adicionarVotcao({opcao:"rust", numeroVotos: 0})
votacao1.adicionarVotcao({opcao:"js", numeroVotos: 0})
votacao1.adicionarVotcao({opcao:"ts", numeroVotos: 0})
votacao1.votar(0)

const votacao2 = new VotacaoApp()
votacao2.adicionarVotacao(votacao1)
votacao2.MostrarVotacoes()