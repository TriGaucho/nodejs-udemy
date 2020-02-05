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


// module.exports = function(app){
    
//     app.get('/noticias', function(req, res){
//         //COnexão combanco
//         var mysql = require('mysql');
        
//         var conexao = mysql.createConnection({
//             host : 'localhost',
//             user : 'root',
//             password : '',
//             database : 'portal_noticias'
//         })

//         //Executa uma consulta no banco e trata o retorno
//         conexao.query('select * from noticias', function(erro, resultado){
//             res.send(resultado);
//         })
//     });
// };


////encapsulamento dos dados em forma de função para os comandas serem executados
//module.exports = function(app){ // >>> precisamos receber o app para como parametro 
//    app.get('/noticias', function(req, res){
//        res.render("noticias/noticias")
//    });
//};