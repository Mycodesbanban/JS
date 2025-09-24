const express = require('express');
const app = express();

const mongoose = require("mongoose"); // unsando o pacote mongoose

const connectString= 'mongodb+srv://MayconBancoMongodb:maycon1716@cluster0.2jfkzls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // colocando a conexão do servidor

mongoose.connect(connectString, {useNewUrlParser:true , useUnifiedTopology:true})//conectando o servidor
  .then(()=> {
    app.emit() // emite eventos/dados
  })
  


const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

