###Visão geral NPM, Express, EJS e Nodemon
**Express**: framework quem implementa api de diversos metodos para controles. OInterface entre o js e o node.

**EJS**: geração dinamica de HTML com JavaScript

**Nodemon**: utilitario que reinicia o servidor Node.js

**NPM**: Gerenciador de pacotes.

---
###Iniciando o NPM
*npm* *-v*: versão do npm
*npm init*: instala e configura o package.json

---
###Instalando o Express
*npm install express -save*: instala e salva no package.json

---
###Refactoring do projeto pratico portal de noticias com Express

---
###Instalando o EJS
*npm install ejs --save*

Uma engine de views(html), que permite escrever hmlt com código js. Paginas HTML dinamicas.

Passos:
1. alterar o engine de views do express usando o metodo SET.
2. Criar um diretorio de views com os html que serão consumidos conforme a requisição.
3. Substituir a forma de renderização HTML, de forma a isolar em arquivos(método **RENDER**).

---
###Refactoring do projeto pratico portal de noticias com EJS
1. Criar os arquivos de html dentro de um arquivo ejs
2. Refatorar as respostas utilizando o método RENDER.
3. app.get('/', function(req, res){
    res.render("home/index")
});

---
###Instalando Nodemon
Recurso para ambiente de desenvolvimento para reiniciar o node.

Instalar: *npm intall -g nodemon*
Executyar: nodemon <arquivo.js> 
