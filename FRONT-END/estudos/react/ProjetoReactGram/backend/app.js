require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
const port = process.env.PORT;

// configurar respostas json e form data

app.use(express.json()) // aceita json
app.use(express.urlencoded({extended:false})) // aceita form data

app.listen(port, () =>{
    console.log("app rodando na porta 3000")
})
