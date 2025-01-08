## Descrição:
**Blogs API** é uma API projetada para gerenciar postagens e categorias de blog, permitindo que os usuários criem, leiam, atualizem e excluam postagens de blog. 
Para a criação das tabelas do banco de dados, utilizamos a técnica de Mapeamento Objeto-Relacional (ORM) através do pacote Sequelize do Node.js e a autenticação do usuário por meio de JSON Web Tokens (JWT). 
Também utilizamos a arquitetura de software MSC (Model-Service-Controller). 
Este projeto demonstra uma sólida compreensão do design de API RESTful e do gerenciamento de banco de dados.


## Sumário
- [Diagrama de Entidade e Relacionamento](#Diagrama-de-Entidade-e-Relacionamento)
- [Sobre o projeto](#Sobre-o-projeto)
- [Instalação](#Instalação)
- [Utilizando a API](#Utilizando-a-API)
- [Instruções de utilização do projeto](#Instruções-de-utilização-do-projeto)
- [Dependências](#Dependências)
- [Licença](#Licença)



## Diagrama de Entidade e Relacionamento:
Para orientar a construção das tabelas através do ORM, utilize o DER a seguir:

 ![Diagrama de Entidade do Blogs-API](./blogs_api_database.png)

## Sobre o projeto:
### O que foi desenvolvido:

- Endpoints conectados ao banco de dados, seguindo os princípios do REST.
- 
- Criação de um post, necessitando da relação entre usuário e login, sendo relação (1:N) entre user e blog_posts.
- 
- Separação dos posts por categorias, com a relação (N:N) de blog_posts para categories e de categories para blog_posts.
 
### Arquivos ou Pastas que foram desenvolvidos:
- Controller
- Middlewares
- Migrations
- Services
- Models
- Utils
- App.js



#### :heavy_exclamation_mark:ATENÇÃO!:heavy_exclamation_mark:: Todos os arquivos que não foram mencionados, foram criados pela Trybe! :white_check_mark:

## Instalação:

Para a configuração do projeto, siga esses passos:

<ol>
 <li>
  <p>Clone o Repositório:</p>

  ```bash
   git clone git@github.com:FabioRodriguesT/Projeto_Blogs_API.git
   cd blogs-api
  ``` 
 </li>
 <li>
  <p>Instale as dependências:</p>
  
  ```bash
   npm install
   ``` 
 </li>
 <li>
  <p>
   Configure seu banco de dados com as migrações e modelos necessários:
  </p>
  
  ```bash
   npm run prestart
   ```
 </li> 
</ol>

## Utilizando a API:

Você pode executar a API utilizando npm ou Docker.

### Utilizando npm

Para executar a API, use o seguinte comando:

```bash
npm run dev
```
Você pode então acessar a API em `http://localhost:3000` (ou utilizando sua porta específica).

### Utilizando o Docker

<ol>
 <li>
  <p><strong>Construa e execute os contêineres do Docker:</strong></p>
  
   ```bash
   docker-compose up -d
   ```
 </li>
   
<li>
 <p>  
  <strong>Acesse a Api:</strong>  Você pode acessar a API no caminho `http://localhost:3001` (ou utilizando sua porta específica).
 </p>

 </li>

<li>
 <p>
  <strong>Acesse o container usando:</strong>  
 </p> 
 
   ```bash
   docker exec -it blogs_api bash
   ```
 </li>
</ol>

## Instruções de utilização do projeto:
- ⚠️ A maioria das rotas necessitam de um token gerado pela rota post de /login para authenticação.

### Gerando seu token:
<ol>
 <li> Ao fazer uma requisição para a rota POST /login, com email e password, será gerado um token para você. Exemplo:</li>

 ```bash
 {
  "email": "seuemail@exemplo.com",
  "password": "suasenha"
 }
 ```

<li> Ao realizar um login correto (como o exemplo), na rota, será retornado um token:</li>
   </br>
   <p>Exemplo:</p>

```bash
 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5I WKGL4hcCVG8"
 }
 ```
</ol>

### Utilizando o token:
Com o seu Token gerado, antes de fazer a requisição para qualquer rota, você deve utilizá-lo no header de sua requisição.

<ol>
 <li>Crie uma variavel em sua rota chamanda de "Authorization".</li>
 <li>Adicione o valor do seu token gerado na sua variavel Authorization, no formato de Bearer seu Token.</li>
 
```bash
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8
```
 <li>Assim, você está authenticado, permitindo a realização de requisições para todos os endpoints!</li>
</ol>

### Rotas disponíveis:
<ol>
 <table> 
  <thead>
   <th>Rota</th>
   <th>Funcionalidade</th>
   <th>Tipo da Requisição</th>
  </thead>
  <tbody>
   
   <tr>
    <th>/login</th>
    <td>Login na API com geração de token</td>
    <th>POST</th>
   </tr>
   
   <tr>
    <th>/user</th>
    <td>Cria um novo usuário</td>
    <th>POST</th>
   </tr>
   
   <tr>
    <th>/categories</th>
    <td>Cria uma nova categoria de Post</td>
    <th>POST</th>
   </tr>
  
   <tr>
    <th>/categories</th>
    <td>Lista todas as categorias</td>
    <th>GET</th>
   </tr>
  
   <tr>
    <th>/post</th>
    <td>Lista todos os posts</td>
    <th>GET</th>
   </tr> 
  
   <tr>
    <th>/post/:id</th>
    <td>Lista o post com o id específico</td>
    <th>GET</th>
   </tr>
  
   <tr>
    <th>/post</th>
    <td>Cria um novo post</td>
    <th>POST</th>
   </tr>
  
   <tr>
    <th>/post/:id</th>
    <td>Edita um post com o id específico</td>
    <th>PUT</th>
   </tr>
  
   <tr>
    <th>/post/:id</th>
    <td>Exclui um post com o id específico</td>
    <th>DELETE</th>
   </tr>
  
   <tr>
    <th>/user</th>
    <td>Lista todos os usuários</td>
    <th>GET</th>
   </tr>  
  
   <tr>
    <th>/user/:id</th>
    <td>Lista um usuário com id específico</td>
    <th>GET</th>
   </tr>
   
  </tbody>
 </table>
</ol>

### Utilização:

<p>Utilize algum aplicativo ou extensão do VSCode para realizar as requisições. </p>

<p> Exemplo: ThunderClient, Insomnia, entre outros.</p>

## Dependências:

Este projeto utilizou os seguintes pacotes:

### Dependências: ###
<ul> 
  <li>express: Web framework for Node.js.</li>
  <li>express-async-errors: Middleware to handle async errors.</li>
  <li>joi: Data validation library.</li>
  <li>jsonwebtoken: For handling JWT authentication.</li>
  <li>mysql2: MySQL client for Node.js.</li>
  <li>sequelize: ORM for managing SQL databases.</li> 
</ul>

### Dependências de desenvolvimento: ###
<ul>
  <li>chai: Assertion library.</li>
  <li>chai-http: HTTP integration testing for Chai.</li>
  <li>change-case: Utilities for changing case of strings.</li>
  <li>eslint-config-trybe-backend: ESLint configuration.</li>
  <li>frisby: API testing framework.</li>
  <li>jest: JavaScript testing framework.</li>
  <li>mocha: Test framework.</li>
  <li>nodemon: Auto-restart for Node.js applications.</li>
  <li>nyc: Code coverage tool.</li>
  <li>sequelize-cli: CLI for Sequelize.</li>
  <li>sinon: Standalone test spies, stubs, and mocks.</li>
  <li>supertest: Testing HTTP servers.</li>
  <li>wait-on: Wait for a resource to be available.</li>
</ul>

## Licença:

<p>Este projeto é licenciado sob a Licença MIT. Boa codificação!</p>



