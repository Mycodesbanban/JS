const express = require("express")
const moongose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")
const multer = require("multer") // ADICIONAR ESTA LINHA

// Importar o storage de arquivos
const diskStorage = require("./helpers/FileStorage") // ADICIONAR ESTA LINHA
const upload = multer({storage: diskStorage}) // ADICIONAR ESTA LINHA

// rotas
const authRouter = require("./routes/authRouter")
const UserRouter = require("./routes/UserRouter")
const Partyrouter = require("./routes/PartyRouter")

// config
const dbName = "partyTime"; //identificar o banco de dados
const port = 3000; //porta
const app = express(); //passando o express ativo

// Middleware para log de todas as requisições (ADICIONAR)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    if (req.method === 'POST' && req.url.includes('party')) {
        console.log('Headers:', req.headers);
    }
    next();
});

app.use(cors()); // usando o metodo use para permite que meu servidor seja acessado em outros dominios
app.use(express.json()) //interpreta formato json
app.use(express.static("public")) // arquivos estaticos na pasta public

// ROTAS DE TESTE (ADICIONAR ANTES DAS ROTAS PRINCIPAIS)
app.get("/test", (req, res) => {
    res.json({ 
        message: "Servidor funcionando!", 
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'development'
    });
});

// Teste de upload simples
app.post("/test-upload", upload.single('photo'), (req, res) => {
    console.log('Teste de upload:');
    console.log('Body:', req.body);
    console.log('File:', req.file);
    
    res.json({
        body: req.body,
        file: req.file,
        message: "Upload teste funcionando"
    });
});

// ROTAS PRINCIPAIS
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
    console.log("========================================")
    console.log(`🚀 Servidor rodando na porta ${port}`)
    console.log(`📝 Teste: http://localhost:${port}/test`)
    console.log(`🏠 Home: http://localhost:${port}/`)
    console.log("========================================")
})