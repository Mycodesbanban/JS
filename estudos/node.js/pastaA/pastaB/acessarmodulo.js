// Sistema de modulos require
// acessando modulos que estão em outra pasta

const moduloA=require("../../sistemademodulos") // usamos o ../ para sair de uma pasta , então no caso ../ saimos da pasta B , ../ saimos da pasta a e voltamos a pasta do node 
console.log(moduloA.ola);

// caso tentamos importa um modulo que não exista vai retorna um erro
// const moduloB=require("../../hcds");


// acessando um modulo que instalamos 

const saudacao=require("saudacao"); // quando ultilizamos isso , significa que vai procurar algum arquivo saudacao que colocamos é dentro deve vai mostrar o index.js que criamos, caso não tenha esse index ou esteja com um nome diferente de index.js vai retornar um Erro 
console.log(saudacao.ola)

// podemos importar os modulos que ja vem instalado com o node usando o require 

const http=require("http") // importa o modulo HTTP
http.createServer((req , res) => {
    res.write("bom dia ") // o write vai servir para escrevemos a resposta
    res.end() // o end finaliza a resposta
}).listen(8080) // O servidor escuta na porta 8080


// outra possibilidade criando outra pasta 

const c = require("./pastaC/index"); // como estamos ultizando um arquivo index não precisamos mostra o /index somente o ./pastaC
console.log(c.ola2);