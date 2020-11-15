# Weather App

## Prints

<table style="width:100%">
  <tr>
    <th><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/sol.jpg?raw=true" width="80%" /></th>
    <td><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/nevoa.jpg?raw=true" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/tempestade.jpg?raw=true" width="80%" /></th>
    <td><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/garoa.jpg?raw=true" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/chuva.jpg?raw=true" width="80%" /></th>
    <td><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/neve.jpg?raw=true" width="80%" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/nuvem.jpg?raw=true" width="80%" /></th>
    <td><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/shimmer.gif?raw=true" width="1100px" /></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th><img src="https://github.com/fabinppk/weather-current-location/blob/main/prints/chuva-landscape.jpg?raw=true" width="80%" /></th>
  </tr>
</table>

## Demo - https://weather-current-location.vercel.app/

## Code design choices

#### Atomic Design

Hoje há muitas maneiras de organizar componentes dentro da aplicação, mas o uso do Atomic Design me agrada muito pois cria uma relação de componentes "menores" em um nível inferior (átomos) e componentes maiores em um nível superior (organismos). Mas no final, a estrutura de pastas, seja qual for, deve definir um padrão de organização dentro do projeto.

#### Linter/Prettier

Pra mim projetos que nascem prezando extensividade, qualidade e manutenibilidade precisam ter essas duas ferramentas integradas por padrão. Elas exigem que o código de todo o projeto siga um conjunto de regras e que qualquer coisa fora disso seja rejeitada. Junto a isso o Prettier vem para automatizar a formatação do código baseado nas regras do Linter. Hoje em dia me sinto muito desconfortável ao trabalhar em um projeto sem Linter e Prettier.

#### Pré-commit

Por padrão sempre configuro um pré-commit nos meu projetos que basicamente rodam testes e validam o build e rodam o linter. Isso ajuda a evitar que código quebrado ou fora do padrão vire um commit, evitando assim que commits extras de ajustes venham a existir durante o processo de desenvolvimento de uma feature.

#### Alias Import

A escolha de usar o Alias Import ajuda muito na hora de importar os componentes em pastas aninhadas pois, usando ele se tem o caminho absoluto ao invés do relativo e com isso não preciso ficar voltando pastas e mais pastas para achar o caminho do componente.

#### Shimmer Skeleton Preview

Por mais que as chamadas API hoje em dia sejam rápidas, não mostrar um loading ao usuário final pode dar problemas. Por isso sempre opto em colocar nem que seja o famoso "carregando" porém, o efeito de Shimmer junto ao Skeleton Preview impôe bem mais respeito e credibilidade a interface, deixando a interface na etapa de carregamento bem próxima a interface pós carregamento.

#### Meta tag theme-color

O uso da meta tag theme-color faz a barra superior do navegador mobile mudar de cor (definida pelo dev, mas geralmente a cor primária da aplicação). Nesse caso em específico faço uso disso de forma dinâmica alterando a cor da meta tag de acordo com a cor primária do clima, tornando a aplicação bem mais imersiva para o usuário.

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
