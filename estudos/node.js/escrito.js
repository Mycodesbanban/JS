const fs = require("fs")

const produto={
    nome:"celular",
    preco:2932,
    modelo:"sangsint",
    desconto:0.21
}
fs.writeFile(__dirname +"/arquivoGerado.json" , JSON.stringify(produto ) , err=>{ // err é a callback
    console.log(err || "arquivo salvo")
}) // JSON.stringify() converte um objeto JavaScript em uma string JSON. Isso é útil para armazenar dados, enviar para APIs ou salvar em arquivos.

