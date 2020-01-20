//incorporando http no escript
var http = require('http');

//subir um servido/criar o servidor
//createServer espera uma função como argumento, que recebe uma REQUISIÇÃO e uma RESPOTA.
//requisição é o acesso a porta escutada.
//resposta é o retorno quando algo é requisitado
var server = http.createServer(function(req, res){

    //url recupera a requisição da url
    var categoria = req.url;
    
    if (categoria == '/tecnologia'){
        //end: resposta para o navegador
        res.end('<html><body>Notícias de Técnologia</body></html>');
    } else if(categoria == '/moda') {
        //end: resposta para o navegador
        res.end('<html><body>Notícias de Moda</body></html>');
    } else if(categoria == '/beleza'){
        //end: resposta para o navegador
        res.end('<html><body>Notícias de Beleza</body></html>');
    } else {
        //end: resposta para o navegador
        res.end('<html><body>Portal de Notícias</body></html>');
    }
});

//escuta requisições em uma porta
server.listen(3000);