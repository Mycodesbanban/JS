const bodyParser = require("body-parser")
const express = require("express")
const app= express()

app.use(express.static(".")) // dentro da pasta atual sivar os arquivos static
app.use(bodyParser.urlencoded({extended:true})) // ler dados enviados em formularios HTML 
app.use(bodyParser.json()) // permite interprete requisições com o corpo em JSON 
app.listen(8080 , () => {
    console.log("executando")
})


// .use: está registrando um middleware no Express. (express)
//  é uma função que intercepta requisições feitas ao servidor
// .static: é usado para servir arquivos estáticos, como imagens, arquivos CSS, arquivos JavaScript e fontes. (express)




