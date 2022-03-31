# 🚀 Site CMS Modelo - baseado no CMS Strapi

Esse é um **monorepo** que contém um modelo de referência para criação de um servidor de conteúdos(textos, imagens e vídeos) a ser usado como gestor de conteúdo para aplicações corporativas.



O projeto já fornece uma estrutura básica de páginas, menu e componentes de formulário, bem como configuração de conteúdo para acessibilidade e rastreio de eventos para usar em serviços como Google Analytics.

Para utilizar localmente o projeto você precisa acionar a [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) que torna tudo muito mais simples.

### `develop`

Inicie sua aplicação com o modo autoReload e recursos de administrador de estruturas ativados. [Saiba mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```
Para gerenciar a estrutura do projeto🚀, use o painel administrativo em http://localhost:1337/admin

Para consumir os conteúdos via API, utilize o endereço http://localhost:1337/api

Exemplo:
Faça um request GET http://localhost:1337/api/pages/?populate=deep para listar todas as páginas e seus componentes.

É necessário enviar em cada request um cabeçalho ```Authorization Bearer Token``` para autorização de consumo com o token de API, a ser gerado no painel administrativo no menu ```Settings->Global Settings->API Tokens```.


### `start`

Inicie sua aplicação com o modo autoReload e recursos de administrador de estruturas desativados. [Saiba mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
```

#### Componentes

- Button
- FormFieldInput
- Item
- Section
- SimpleList

#### Tipos de páginas
- Page
- ErrorPage

#### Settings
- MetaData
- MonitoringData

#### Validators
- Validator

# Contato

Para tirar dúvidas sobre o modelo ou sugestões de componentes, me mande uma mensagem no meu instagram dev @janynnegomesdev ou  abra uma issue aqui mesmo :)
