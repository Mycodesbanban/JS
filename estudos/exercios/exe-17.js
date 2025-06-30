// Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
// “Não trabalhamos com este tipo de automóvel aqui”.

function revenda (carros){
    switch (carros){
        case "hartch":
            return console.log("Compra evetuada com sucesso")
        case "motocicletas":
        case "caminhonetes":
        case "sedans":
            return console.log("Tem certeza quer vai querer esse modelo?")
        default:
            console.log("Não tralhamos com esse tipo de automovel")
    }
}
revenda("hartch")
revenda("motocicletas")
revenda("BMW")