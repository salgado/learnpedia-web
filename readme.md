Depedendencias do projeto:

$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo npm install -g bower
$ sudo npm install -g grunt-cli

$ npm install

$ bower install - Caso esse comando retorne erro: "/usr/bin/env: node: No such file or directory"

Para rodar o projeto:

$ grunt server

Informações úteis:

Se após executar o comando 'bower install, retornar o erro: "/usr/bin/env: node: No such file or directory", deve-se executar o seguinte comando:

$ sudo ln -s /usr/bin/nodejs /usr/bin/node
