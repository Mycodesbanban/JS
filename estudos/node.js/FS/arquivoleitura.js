const fs= require("fs"); //fs (File System) é um módulo nativo do Node.js que permite ler, escrever, modificar e excluir arquivos no sistema. Ele é essencial para manipulação de arquivos e diretórios.
const { json } = require("stream/consumers");
const caminho = __dirname + "/arquivo.json" //__dirname é uma variável global no Node.js que retorna o caminho absoluto do diretório onde o script atual está localizado , quando usar: Quando precisa do caminho do arquivo que está rodando?.
// lendo um arquivo de forma sincrona (caso for um arquivo grande ele vai fica parado em event loop esperando ler um arquivo completo)
const conteudo = fs.readFileSync(caminho , "utf-8")
console.log(conteudo);

// lendo um arquivo assincrono 
fs.readFile(caminho , "utf-8" , (erro , conteudo)=>{
    const confi= JSON.parse(conteudo)
    console.log(`${confi.db.host}:${confi.db.port}`)
})

// ou podemos fazer assim 

const confi = require("../arquivo.json");
const { error } = require("console");
console.log(confi.db)

fs.readdir(__dirname , (err , arquivo)=>{ // usamos uma arrow function  
    console.log("Conteudo da pasta");
    console.log(arquivo)
}) 

// fs.readFile():Lê um arquivo
// fs.writeFile():Cria/sobrescreve um arquivo
// fs.appendFile():Adiciona conteúdo a um arquivo
// fs.unlink():Deleta um arquivo
// fs.mkdir():Cria uma pasta
// fs.rmdir():Remove uma pasta
// fs.readdir():ler o conteúdo de um diretório e listar os arquivos e subpastas dentro dele.
// process.cwd():Diretório onde o Node.js foi iniciado
// quando usar?: Quando precisa do caminho da raiz do projeto