//importa o módulo do express
var express = require('express');

//o "express' retorna uma função e nós precisamos executa-la(chamada da função)
var app = express();

//respondendo requisições e renderizando com EJS
app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia")
});

//altera o engine de views(motor de view) do EXPRESS e configura como o EJS
app.set('view engine', 'ejs');

//respondendo e tratando rotas de requisições URL com EXPRESS
app.get('/', function(req, res){
    res.send("<html><body>Portal de Notícias</body></html>")
});

//metodo listen fica escutando uma porta e executa uma função na subida do servidor.
app.listen(3000, function(){
    console.log("Servidor ativo com EXPRESS!");
});