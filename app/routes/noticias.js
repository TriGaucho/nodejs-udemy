//importa os dados da conexão com o banco de dados
var conexaoBD = require('../../config/conexaoBD');

module.exports = function(app){
    
    //executa a função de conexão com o banco de dados.
    var conexao = conexaoBD();

    app.get('/noticias', function(req, res){
        //Executa uma consulta no banco e trata o retorno
        conexao.query('select * from noticias', function(erro, resultado){
            res.render("noticias/noticias", {noticias : resultado});
        })
    });
};