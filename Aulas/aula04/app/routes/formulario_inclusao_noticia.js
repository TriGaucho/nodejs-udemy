//encapsulamento dos dados em forma de função para os comandas serem executados
module.exports = function(app){ // >>> precisamos receber o app para como parametro
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia")
    });
}