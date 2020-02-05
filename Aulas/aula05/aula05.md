##NPM - Instalando o módulode conexão do MySQL
*npm install mysql --save*

---
##Criando Conexão com o Banco de dados
1. Criamos uma variavel com require do MySQL
   1. var mysql = require('mysql')
2. Uma outra variavel passaa os dados de conexão(host,user,password,database) em formato json
   1. var conexao = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias'
        })
3. Realizamos uma query que possui dois parametrs:
   1. <query>: o comando sql a executar.
   2. <callback>: uma função com dois parametros, o *erro* e outro com o *resultado* da query.
   3. Ex: 
        conexao.query('select * from noticias', function(erro, resultado){
            res.send(resultado);
        })
    });
4. res.send(resultado): é a resposta da requisição.

---
##EJS - Criando views dinamicas com JavaScript
Utilizando o EJS para passar um json, do resultado da consulta, com a renderização;
    *res.render("noticias/noticias, {<rótulo> : <valor do rotulo(json de retorno)>}).*
    
    Isso permite ao EJS recuperar o json na view(engine de view). 
1. Apontar qual view
2. Apontar qual json

**Recuperando o resultado da consulta na View com EJS**
 Precisamos misturar código JS com HTMl na **VIEW**.
 1. Bloco de código JS: *<% código JS %>*
 2. O bloco é interpretado e processado, gerando um resultado.
 3. Ex: *<% for(var i = 0; i < noticias.lebgth; i++%>*
 4. Para imprimir um valor em tela usa-se o sinal de =.
    1. Ex: *<%= noticias[i].id_noticia %>*

---
##Refactoring do métopdo de conexão com o banco de dados MySQL
1. Criar um arquivo de conexão (*/config/conexaoBD.js*)
2. Configurar a conexão como função.
   1.  var mysql = require('mysql');

        //função que exporta o dados de conexão com o banco
        module.exports = function(){
            return mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '',
                database : 'portal_noticias'
            });
        };
3. Importat o arquivo de conexão atrvaés do método require no arquivo de rota.
4. Executar a função de conexão com o banco.
5. var conexao = conexaoBD();

