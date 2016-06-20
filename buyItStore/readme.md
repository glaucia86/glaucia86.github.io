#Projeto - Buy it Store! A sua compra certa! 

Desenvolvimento de mais uma aplicação em Angular.Js, porém dessa vez com a versão 2 e mais com o TypeScript. O projeto tem como intenção criar um gerenciamento de produtos listados (já pré-definidos no products.json). O usuário pode listar um determinado produto usando um filtro e detalhar as especificações sobre o produto. O design do projeto foi realizado no conceito SPA (Single Page Application).

## Recursos utilizados no desenvolvimento:

- Angular.Js 2;
- TypeScript;
- ES2016 (nova versão do JavaScript);
- JSon;
- Framework Bootstrap 3/Materialize;
- Conceito de SPA (Single Page Application);

##Conceitos aprendidos durante o desenvolvimento do Projeto:

Durante o desenvolvimento desse projeto pude aprender as novas features do Angular 2 + TypeScript, juntamente com os novos e alguns conceitos do ES2016. Entre esses:

- Building a Template;
- Using a Component as a Directive;
- Biding with Interpolation;
- Adding Logic with Directives;
- Property Biding;
- Handling Events with Event Biding;
- Handling Input with Two-way Biding;
- Transforming Data with Pipes;
- Defining an Interface;
- Encapsulating Component Styles;
- Using Lifecycle Hooks;
- Building a Custom Pipe
- Building a Nested Component;
- Using a Nested Component;
- Passing Data to a Nested Component Using @Input;
- Rasing an Event from Nested Component Using @Output;
- Building a Service;
- Registering the Service;
- Injecting the Service;

(continuando a estudar alguns features mais.....)

## Arquitetura da Aplicação

(colocar a imagem da arquitetura do projeto que foi desenvolvido)

## Demo do projeto

- [Buy it! Store by Glaucia Lemos] (http://glaucia86.github.io/buyItStore/)

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando

Para começar você deve simplesmente clonar o repositório do projeto e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina o Node.Js. Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

### Instalando as Dependências

Você precisará de duas dependências para este projeto. A qual poderá ser obtida da seguinte maneira:

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.Json e mais o bower.Json para o projeto. Criando assim, duas pastas no projeto: 

* `node_modules` - que contêm os packages do npm que precisará para o projeto.
* `typings` - contêm os arquivos necessários para executar os arquivos relacionados ao TypeScript e o ES2016(nova versão do JavaScript).

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm start
```

Agora, abre a página da aplicação em `http://localhost:3000/`. E pronto a aplicação será executada de maneira local na sua máquina.

