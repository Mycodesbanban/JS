// modules

const express = require("express")
const moongose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")

// rotas
 const authRouter = require("./routes/authRouter")
 const UserRouter = require("./routes/UserRouter")
 const Partyrouter = require("./routes/PartyRouter")


// middlewares (requisicioes e respostas)


// config

const dbName = "partyTime"; //identificar o banco de dados
const port = 3000; //porta
const app = express(); //passando o express ativo
app.use(cors()); // usando o metodo use para permite que meu servidor seja acessado em outros dominios
app.use(express.json()) //interpreta formato json
app.use(express.static("public")) // arquivos estaticos na pasta public
app.use("/api/auth", authRouter)
app.use("/api/user", UserRouter)
app.use("/api/party", Partyrouter)

// conexao mongodb

moongose.connect(`mongodb://localhost/${dbName}`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)


// configirar as rotas no express

app.get("/", (req , res) =>{
    res.json({message:"teste de rota "})
})

// server
app.listen(port , () =>{
    console.log("a porta 3000 esta aberta")
})