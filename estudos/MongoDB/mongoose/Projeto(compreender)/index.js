const moongose = require("mongoose")

moongose.connect("mongodb://localhost/test", {})

const db= moongose.connection; // pega o objeto da conexao atual

// caso aconteca um erro
db.on("error", console.error.bind(console, "connection error:"));

// Vai tentar uma vez abria a conexao
db.once("open", function(){
    console.log("Estou conectado ao mongoDB")
})