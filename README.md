
## Autores

- [@danielpedroo](https://www.github.com/danielpedroo)
- [@pablohdev](https://www.github.com/pablohdev)


# Trilha-react-desafio-3 - FORMS_DIO

Estou animado para compartilhar mais um projeto que desenvolvi em parceria com a [DIO](https://www.dio.me) (Digital Innovation One). A ideia deste projeto é trazer de volta o visual do site da DIO de anos anteriores, com um toque de nostalgia. Lembrando que "qualquer semelhança é mera coincidência!" 😉

#Atenção

Fique atento as validações ou seja, o email, a senha, este projeto trabalha com dados estaticos, e não flexisiveis portanto verifique isto.

- Recomendação
  -> Quando clonar o arquivo faça um: `yarn install` para que seus arquivos sejam atualizados. :D


## Stacks

**IDE:** Vs_Code

**Front-end:** React.Ts

**Services:** Json


## Melhorias

O desafio do projeto consiste no desenvolvimento da tela de cadastro, ou seja implementação visual e funcional. Portanto o projeto consta diferenças do que é pedido e extras.

Tela de registro:

![Register](https://github.com/danielpedroo/React_Forms_Dio/blob/main/src/img/Register.png)

Tela de Esqueçi minha senha:

![Recover](https://github.com/danielpedroo/React_Forms_Dio/blob/main/src/img/Recover.png)

## Instalação - Pacotes_Hooks

Este projeto está rodando localmente, portanto, siga os passos abaixo para instalar o projeto React e suas dependências.

**Instalar o projeto React e suas dependências:**
   Execute o comando abaixo para criar o projeto React.
   ```bash
   npx create-react-app nome-do-projeto
```

- Instalar o Styled Components: 
Styled Components permite usar CSS-in-JS no React. 
Execute o comando abaixo para instalar o pacote. [Documentação do Styled Components](https://styled-components.com/)
```bash
  yarn add styled-components
```

- Instalar o React Hook Form: Para gerenciar formulários no React, use o comando abaixo para instalar o pacote. [Documentação do React Hook Form](https://react-hook-form.com/)
```bash
  yarn add react-hook-form
```
    
- Instalar o YUP: YUP é usado para validação de campos de formulário. Instale-o juntamente com os resolvers do [React Hook Form]().
```bash
  yarn add @hookform/resolvers yup
```

- Instalar o React Router: Para gerenciar rotas na aplicação, instale o React Router com o comando abaixo. [Documentação do React Router ](https://www.npmjs.com/package/react-router-dom)
```bash
  yarn add react-router-dom
```

- Instalar o pacote de ícones: Para utilizar ícones na aplicação, instale o pacote . [react-icons](https://www.npmjs.com/package/react-icons)
```bash
  yarn add react-icons
```

- Instalar o pacote do Json-Server: Para gerenciar ou "subir" uma api fake, muito utilizado em produção. [Json-Server](https://www.npmjs.com/package/json-server)
```bash
  yarn add json-server
```


## Json-Server - Api Fake

Após concluir o processo de instalação, é necessário configurar uma API fake para simular o servidor de dados. Para isso, utilizaremos o pacote json-server, que permite criar uma API local com um arquivo JSON.

Configuração manual da API:
Instalar o json-server: Execute o seguinte comando para instalar o json-server, que rodará o seu servidor local com dados fake.

```bash
yarn add json-server
```

Configurar o arquivo JSON: Crie um arquivo db.json na raiz do projeto, que conterá os dados simulados.

Rodar o servidor JSON: Para iniciar o servidor com o arquivo db.json, utilize o comando abaixo:


```bash
npx json-server --watch db.json --port 8001
```

Esse comando inicia o servidor no endereço http://localhost:8001, permitindo que sua aplicação React consuma os dados da API fake.

![Json](https://github.com/danielpedroo/React_Forms_Dio/blob/main/src/img/Json_Server.png)
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/danielpedroo/React_Forms_Dio.git
```

Entre no diretório do projeto

```bash
  cd site_dio
```

Inicie o servidor

```bash
  yarn start
```

Inicie o serviço Json

```bash
  yarn api
```
## Referência

Projeto original - Digital Innovation One - trilha-react-desafio-3
 - [trilha-react-desafio-3](https://github.com/digitalinnovationone/trilha-react-desafio-3)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://danielpedroo.github.io/Js-developer-Portifolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-pedro-12b306209/)

[![instagram](https://img.shields.io/badge/instagram-1DA1F2?style=for-the-badge&logo=instagram&logoColor=DeepPink)](https://www.instagram.com/_danpedro_dev)

