<p align="center">
  <img src="images/logo.jpg"  width="1000">
</p>

## Introdução

Este projeto tem como objetivo ensinar como implementar **Micro Frontend**  no Angular.

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

## Detalhes dos Micro Frontends

Temos dois Micro Frontends **(form-keep, cards-keep)**

- O **keep-app**, é o app root. Ele vai receber todos os Micro Frontends.

- O micro frontend **form-keep**, é o formulário para adicionar tarefas.

- O micro frontend **cards-keep**, é wraper de cartões.

## Vamos executar a nossa aplicação

com todos os apps instalados e completos para execução,
vamos entrar no app root e executar o seguinte comando.

``` bash

🚪 cd keep-app

  ng serve
```

👌 pronto! Nosso app está rodando na porta: http://localhost:4200

vamos subir os dois Micro Frontends agora. Para isso, entre nos diretórios abaixo e 
execute os seguintes comandos:

``` bash

🚪 cd form-app

  npm start

🚪 cd cards-app

  npm start
```

👌 Legal! Nosso micro frontend **form-app** está rodando na porta: http://localhost:5002

👌 Legal! Nosso micro frontend **cards-app** está rodando na porta: http://localhost:5001

😁 Pronto! Nossos apps estão todos rodando em seus devidos lugares. Com isso, podemos notar todos os 
apps Angular juntos na mesma aplicação.

## 🔥 Agora vamos entender como tudo foi feito em nossa aplicação

Dependências:

Primeiro, em todos os Micro Frontends **(form-app, cards-app)**, instalamos o 
Angular elements e o ngx-build-plus.

``` bash
  npm i --save @Angular/elements

  npm i @Angular/elements ngx-build-plus -D
```

- O Angular elements, da suporte a elementos personalizados

- O ngx-build-plus é uma ferramenta de compilação alternativa para o Angular


Fizemos algumas alterações no package.json dos Micro Frontends **(form-app, cards-app)**
para criar nossos Micro Frontends e servi-lo como elementos personalizados:

``` javascript
"start": "npm run build && serve -l 5001 dist / micro-fe-ng", 
"build": "ng build --prod --output-hashing none --single-bundle true",
``` 

Em nosso app.module.ts dos Micro Frontends **(form-app, cards-app)** precisamos definir os 
elementos personalizados


``` javascript
constructor(private injector: Injector) {}

ngDoBootstrap(): void {
  const { injector } = this
  const element = createCustomElement(AppComponent, { injector })
  customElements.define('micro-cards-keep', element)
}
```

O bootstrap do Angular devemos remover e crialo na mão,


``` javascript
bootstrap: [],
```

Agora precisamos dizer ao Angular para utilizar a ferramenta que instalamos **ngx-build-plus**.

Vamos especificar em três locais dentro do **angular.json**

No **angular.json:**

``` javascript
"architect": {
  "build": {
   "builder": "ngx-build-plus: build",
     ....
  "serve": {
    "construtor": "ngx-build-plus: dev-server",
     ...
  "test": { 
    "builder": "ngx-build-plus: karma",
```

Agora vamos da start em nossos Micro Frontends **(form-app, cards-app)** 

``` bash
🚪 cd form-app

  npm start

🚪 cd cards-app

  npm start
```

😁 Pronto! Nossos Micro Frontends **(form-app, cards-app)** estão configurados e 
rodadando em sua devidas portas.


Micro frontend **form-app** está rodando na porta: http://localhost:5002/main.js

Micro frontend **cards-app** está rodando na porta: http://localhost:5001/main.js

<p align="left">
  <img src="images/excelente.jpg"  width="650">
</p>

### 🔥 Agora vamos configurar o nosso app root **(keep-app)**

Primeiro vamos ao **app.module.ts** do **(keep-app)**.

Adicionaremos o schemas para o Angular conhecer as tags dos Micro Frontends **(form-app, cards-app)**

``` javascript 
schemas: [CUSTOM_ELEMENTS_SCHEMA],
```

👍 Configuramos o **app.module.ts**

Vamos agora para o **app.component.ts**

Criaremos e adicionaremos os scripts no body do app.

``` javascript
ngOnInit(): void {
  const scriptMicroFormKeep = document.createElement('script')

  //script do nosso Micro Frontends (form-app)
  scriptMicroFormKeep.src = 'http://localhost:5002/main.js'
  document.body.appendChild(scriptMicroFormKeep)

  //script do nosso Micro Frontends (cards-keep)
  const scriptMicroCardsKeep = document.createElement('script')
  scriptMicroCardsKeep.src = 'http://localhost:5001/main.js'
  document.body.appendChild(scriptMicroCardsKeep)
}
```
👍 Configuramos o **app.component.ts**

E para finalizar todas as nossas configurações, iremos para o **app.component.html**
e adicionaremos as seguintes tags dos Micro Frontends **(form-app, cards-app)**



``` html
<micro-form-keep></micro-form-keep>

<micro-cards-keep></micro-cards-keep>
```

<p align="left">
  <img src="images/fim.jpg"  width="600">
</p>

😁 Legal! Toda nossa aplicação está pronta.

Para mais detalhes sobre Micro Frontends, eu índico os links abaixo.

Blog [martinfowler](https://martinfowler.com/articles/micro-frontends.html)

MICRO-APP EM ANGULAR USANDO WEB COMPONENTS [Danilo Rodrigues](https://youtu.be/54wcutNmsd0)

# 🤗 Obrigado por ter chegado até o final.
