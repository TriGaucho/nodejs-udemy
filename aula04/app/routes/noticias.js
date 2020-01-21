//encapsulamento dos dados em forma de função para os comandas serem executados
module.exports = function(app){ // >>> precisamos receber o app para como parametro
    app.get('/noticias', function(req, res){
        res.render("noticias/noticias")
    });
};