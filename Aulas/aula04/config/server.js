var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//indica o diretório padrão de views(onde o módulo deve pesquisa)
app.set('views', './app/views')

//exporta a variavel app com todo o objeto
module.exports = app;