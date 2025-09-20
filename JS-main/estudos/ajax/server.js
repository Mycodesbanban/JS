// .use: está registrando um middleware no Express. (express)
//  é uma função que intercepta requisições feitas ao servidor
// .static: é usado para servir arquivos estáticos, como imagens, arquivos CSS, arquivos JavaScript e fontes. (express)
const bodyParser = require("body-parser")
const express = require("express")
const app= express()

app.use(express.static(".")) // dentro da pasta atual sivar os arquivos static
app.use(bodyParser.urlencoded({extended:true})) // ler dados enviados em formularios HTML 
app.use(bodyParser.json()) // permite interprete requisições com o corpo em JSON

// pesquisa
const multer = require("multer")

const storage = multer.diskStorage({
    //configura a pasta e o nome do arquivo que seram salvos 

    destination: function(req , file , callback){ 
        callback(null , "./upload") // se não houver erro  , salve os arquivos na pasta ./upload
    } , 
    filename: function(req , file , callback){ // define o nome do arquivo que será salvo
        callback(null , `${Date.now()}_${file.originalname}`) // Define o nome do arquivo no servidor
    } ,
    
})

const upload = multer({storage}).single("arquivo")

app.post("/upload" , (req , res)=>{
    upload (req , res , err =>{ //  Passamos 'req' (requisição), 'res' (resposta) e uma função de callback para tratar possíveis erros
        if(err){ // se ocorrer um erro 
            return res.end("Ocorreu um erro") // envia uma resposta a o cliente dizendo que o erro ocorreu 
        }
        res.end("Concluido com sucesso.") // caso não ocorrer um erro , o arquivo foi carregado com sucesso 
    })
})

app.post("/formulario" ,(req , res) =>{ // define uma rota post para o caminho "/formulario"
    // envia uma resposta em formato Json para o cliente
    res.send({
        // copia todos os dados recebidos no corpo da requisição
        ...req.body,
        // adiciona (ou sobreescreve) o campo "id" co o valor 1
        id:1

    })
} )

app.get("/parOuImpar", (req , res)=>{
    const par = parseInt(req.query.numero) % 2===0
    res.send({
        resultado:par ? "par" : "impar" // caso for verdadeiro/par retorne a string par , caso for falso retorne a string impar 
    })
})
//formas de recerber dados do front-end
// req.body:envia dados para o sevidor 
// req.query: pega os parametros passado na url
//req.params:parâmetros da rota que estão definidos com : 


app.listen(8080 , () => {
    console.log("executando")
})


//diskStorage: diz ao Multer para salvar os arquivos enviados diretamente no disco do servidor, e como isso deve ser feito.

// destination: A pasta na qual o arquivo foi salvo . a ordem dos paramentos é a seguinte req (requisição) file(arquivo) callback(continuar o processo)

// filename: O nome do arquivo dentro do destino

// Date.now(): retorna o número de milisegundos decorridos

// DataTransfer:  usado para guardar os dados que estão sendo arrastados durante uma operação de Drag e Drop (arrastar e soltar)

// originalname: Nome do arquivo no computador do usuário

// single:  é usada para processar o upload de um único arquivo , você está informando ao Multer que quer receber apenas um arquivo do campo de formulário com o nome especificado

// multer: é um middleware do Node.js para lidar com uploads de arquivos no Express.