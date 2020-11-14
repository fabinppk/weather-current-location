# Weather App

## Prints

<table style="width:100%">
  <tr>
    <th><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/sol.png" width="80%" /></th>
    <td><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/nevoa.png" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/tempestade.png" width="80%" /></th>
    <td><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/garoa.png" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/chuva.png" width="80%" /></th>
    <td><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/neve.png" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://raw.githubusercontent.com/fabinppk/weather-current-location/main/prints/nuvem.png" width="80%" /></th>
  </tr>
</table>

## Demo - https://weather-current-location.vercel.app/

## Code design choices

#### Atomic Design

Hoje há muitas maneiras de organizar componentes dentro da aplicação, mas o uso do Atomic Design me agrada muito pois cria uma relação de componentes "menores" em um nível inferior (átomos) e componentes maiores em um nível superior (organismos). Mas no final, a estrutura de pastas, seja qual for, deve definir um padrão de organização dentro do projeto.

#### Alias Import

A escolha de usar o Alias Import ajuda muito na hora de importar os componentes em pastas aninhadas pois, usando ele se tem o caminho absoluto ao invés do relativo e com isso não preciso ficar voltando pastas e mais pastas para achar o caminho do componente.

## Requirements

For development, you will only need Node.js installed on your environement.

## Install Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/) or [YARN](https://yarnpkg.com/pt-BR/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.13.1

    $ npm --version || yarn --version
    6.14.4

## Install

    $ git clone git@github.com:fabinppk/weather-current-location.git
    $ cd weather-current-location
    $ npm i

## Run project on development mode:

```
$ npm i
$ npm run dev
```

## Generate a build:

```
$ npm i
$ npm run build
```

## Run project on production mode:

```
$ npm i
$ npm run build
$ npm run start
```

## Before make commit:

```
$ npm run commit
```

## Run lint:

```
$ npm i
$ npm run lint
```

## Run tests:

```
$ npm i
$ npm run test
```

## Run tests (watch mode):

```
$ npm i
$ npm run test:watch
```

## Run tests (coverage mode):

```
$ npm i
$ npm run test:coverage
```
