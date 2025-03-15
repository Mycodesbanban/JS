const porta = 3003

const express = require("express")
const app = express()

app.get("/produtos",(req , res , next)=>{
    console.log("middleware 1...")
    next() // vai passar para o outro middle
})

app.get("/produtos" , ( req , res , next)=>{
    // usamos a função middle 
    res.send({nome:"notebook" , preco:37293 }) // send é um metodo do express.js que envia uma resposta HTTP para o cliente.
    // vai converte para o formato Json



}) // get uma forma de requisição para web

app.listen(porta , ()=>{ // chamos uma callback
    console.log(`Servidor rodando na porta ${porta}.`)
}) // listen() tambem é um metodo do express.js que é usado para iniciar um servidor web e escutar requisições em uma determinada porta 

