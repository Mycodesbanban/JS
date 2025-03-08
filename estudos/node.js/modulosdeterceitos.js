// Usando modulos de terceiros 
// usando o comando no terminal  npm init -y cria um package.json que gerencia as dependências do seu projeto
// npm install (nome do modulo) quando ultilizamos assim vai instalar um modulo , podemos usar assim tambem npm i express que já reconhece que é de install 
// exemplo 
// npm install express

// listar pacotes instalados:
// npm list



// para Remover um módulo:
// npm uninstall nome-do-modulo


//  Instalar dependências de um projeto (quando já existe um package.json)
// npm install

// vamos usar a blibioteca lodash

const _ = require("lodash") // é bem bastante comun usar o _ para cria uma constante ou variavel na blibioteca lodash
setInterval(()=> console.log(_.random(1,1000)),2000);

// instalando uma blibioteca global 
// para instalar uma blibioteca global temos que usar o npm i -g ( -g = gobal) nome-do-modulo-global

// vamos ultilizar o nodemon, é importante lembra que devemos criar um index.js fora das pastas e coloca todo o caminho para poder usar esse elemento 

