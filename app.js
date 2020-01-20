//importa o módulo do express
var express = require('express');

//o "express' retorna uma função e nós precisamos executa-la(chamada da função)
var app = express();

//altera o engine de views(motor de view) do EXPRESS e configura como o EJS
app.set('view engine', 'ejs');

//respondendo requisições e renderizando com EJS
app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias")
});


//metodo listen fica escutando uma porta e executa uma função na subida do servidor.
app.listen(3000, function(){
    console.log("Servidor ativo com EXPRESS!");
});