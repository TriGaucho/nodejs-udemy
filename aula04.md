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
##Criando Módulos de OCnfiguração do servidor
1. Criar um diretorio de configuração do servidor
2. Criar arquivo *server.js*: ficam as configurações do servidor
3. 