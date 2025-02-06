// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior

let pontuacoes = "0 , 20 , 20  , 20 , 9"
function avaliaPontuacoes(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(",")
    let quabrarecords=0;
    let piorjogo=1;
    let maiorPontuacao=pontuacoes[0]
    let menorPontuacao=pontuacoes[0]
    for ( let i = 1; i < pontuacoes.lenght; i++){
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao= pontuacoes[i]
            quabrarecords++;

        } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao= pontuacoes[i]
            piorjogo=i+1

        }

        
    }
    return[quabrarecords, piorjogo]
}
console.log(avaliaPontuacoes(pontuacoes))