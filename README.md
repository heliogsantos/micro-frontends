<p align="center">
  <img src="images/logo.jpg"  width="1000"  height="250">
</p>

## Introdução

Este projeto tem como objetivo ensinar como implementar **Micro Frontend**  no angular.

Ferramentas necessárias para subir o projeto:

- Angular v9.1.7
- Node

## Início rápido

``` bash
git clone https://github.com/heliogsantos/micro-frontends.git

🚪 cd keep-app

  ⌨️ npm install
  
  ⌨️ npm start

🚪 cd cards-keep

  ⌨️ npm install
  
  ⌨️ npm start

🚪 cd form-keep

  ⌨️ npm install
  
  ⌨️ npm start
```

## Detalhes dos micros frontends

Temos dois micro forntends **(form-keep, cards-keep)**

- O **keep-app**, é o app root. Ele vai receber todos os.
micros frontends.

- O micro frontend **form-keep**, é o formulário para adicionar tarefas.

- O micro frontend **cards-keep**, é os cartões de tarefas.

## Vamos executar a nossa aplicação

com todos os apps instalados e completos para execução,
vamos entrar no app root e executar o seguinte comando.

``` bash

🚪 cd keep-app

  ng serve
```

👌 pronto! Nosso app está rodando na porta: http://localhost:4200

vamos subi os dois micro forntends agora. Para isso, entre nos diretórios a baixo e 
executa os comandos: 

``` bash

🚪 cd form-app

  npm start

🚪 cd cards-app

  npm start
```

👌 Legal! Nosso micro frontend **form-app** está rodando na porta: http://localhost:5002

👌 Legal! Nosso micro frontend **cards-app** está rodando na porta: http://localhost:5001

😁 Pronto! nossos apps estão todos rodando em seus devidos lugares. Com isso, podemos notar todos os 
apps angular, juntos na mesma aplicação.

