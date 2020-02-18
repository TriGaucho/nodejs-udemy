##O que é Consign?
Incluir de forma automatica os modulos.
Quantidade de telas igual quantidade de rotas.
Carrega de forma automatica

Hoje as rotas são carregadas uma-a-uma
Com o Consign nos recuperamos o modulo e atrves do include, do Consign, incluimos todas as rotas de um diretorio.
Tbm faz autoload de view, arquivos de configs e controles

Ele faz um scan, recupera e inicializa todos os módulos.

---
##Instalando o Consign
nom intall consign --save

---
## Refactorin do projeto pratico portal de noticias com Consign(routes)
Recuperar todos modulos em um unico lugar.

1. Instanciar o Consign:
   1. var consign = require('consign')
