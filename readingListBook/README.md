#Projeto - Reading List Book em Angular.Js

Desenvolvimento de uma pequena aplicação em Angular.Js (versão 1.2.x). O projeto cria reviews de novos livros através do site Amazon.com (ao incluir um determinado número de ISBN através do site Amazon) e realiza a busca através do biding, podendo depois o usuário realizar a inclusão do livro na página.

## Recursos utilizados no desenvolvimento:

- Angular.Js v. 1.2x;
- JSon;
- Uso de diretivas e controladores no projeto;
- Framework Bootstrap 3;
- Conceito de SPA (Single Page Application);

## Demo do projeto

- [Reading List Book App by Glaucia Lemos] (http://glaucia86.github.io/readingListBook/)

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
* `bower_components` - contêm os arquivos do angular.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm start
```

Agora, abre a página da aplicação em `http://localhost:4000/index.html`. E pronto a aplicação será executada de maneira local na sua máquina.









