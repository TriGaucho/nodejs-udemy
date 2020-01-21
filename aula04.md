##O que são módulos e o que é CommmonsJS ?
Isolar uma lógica e permitir rutilizar aquela funcionalidade.
Assemelha-se a classe.
* Reduz complexidade
* Separação de código(cada módulo atende uma necessidade)
* Manutenção menos complicada.
* Express e o EJS são exemplos de módulo

**Incluir um módulo no script:** *require*

####CommonsJS
Formato que define a construção do módulo.

1. O módulo deve exportar(retornar) uma uma funcionalidade: 
   1. Ex: module.export = function(){
        var msg = "Mensagem de retorno"
        return msg;
    }
2. Importar o módulo no scrip que utilizará:
   1. var msg = require('./mod_teste');
3. Executar a função do módulo
   1. msg()

---
##Criando Módulos de Configuração do servidor
1. Criar um diretorio de configuração do servidor
2. Criar arquivo *server.js*: ficam as configurações do servidor(criar um objeto)
3. Exportar o objeto com as informações do servidor.
4. Importar o módulo do *server.js* na programa principal

---
##Reestruturando a aplicação e criando um módulo para definição de rotas
1. Criar um diretorio de rotas
   1. Cada rota é uma requisição url
2. Criar um arquivo de rota para cada requisição de URL
3. Exportar um objeto da rota
4. Importar cada rota no programa principal
5. Executar o objeto da rota no programa principal, passando o objeto de configuração.
