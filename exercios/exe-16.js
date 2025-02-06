// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
// também um default, que retornará uma mensagem de erro no console. 
 function vendas (frutas){
    switch ( frutas){
        case "Maça":
            return console.log("Não vendemos essa fruta aqui")
        case "Kiwis":
            return console.log("Estamos com escassez de kiwis")
        case "melancia":
            return console.log("AQui está , são 3 reais o kilo da melancia")
        default:
            console.log("Erro , não temos esse tipo de fruta")
    }
}
vendas("Maça")
vendas("melancia")
vendas("Kiwis")
