//Conexão com banco

//importa o módulo do mysql
var mysql = require('mysql');

//função que exporta o dasdos de conexão com o banco
module.exports = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
};