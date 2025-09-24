const {MongoClient} = require("mongodb") //importando o MongoClient do pacote do mongodb 

const url = "mongodb://localhost:27017/notesDB"; //url do banco

let _db // variavel para armazenar a conexao

const initDb = cb => {
    MongoClient.connect(url , {useUnifiedTopology:true}) //abre uma conexao com o mongoDB 
    .then(client =>{ // se a conexao for bem sucedida , armazena o client em _db e chama a callback informando que deu certo 
        _db = client
        cb(null , _db)
    })
    .catch(err => {
        cb(err); //exibe o erro para o usuario 
    })
}


const getDb = () => {
    return _db; //retorna a variavel para amarzenar os dados da conexao
}

// exportando

module.exports = {
    getDb,
    initDb
}
