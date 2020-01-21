//importa o módulo de configuração
var app = require('./config/server')

//importa o módulo da rota
var rotaNoticias = require('./app/routes/noticias');
var rotaHome = require('./app/routes/home');
var rotaFromInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');

//executa a função do módulo passando o app por parametro
rotaNoticias(app);
rotaHome(app);
rotaFromInclusaoNoticia(app);

//metodo listen fica escutando uma porta e executa uma função na subida do servidor.
app.listen(3000, function(){
    console.log('Servidor on-line');
});