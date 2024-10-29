## Descrição:
**Blogs API** é uma API projetada para gerenciar postagens e categorias de blog. Permitindo que os usuários criem, leiam, atualizem e excluam postagens de blog. 
Para criação das tabelas do banco de dados, utilizamos a técnica de Mapeamento Objeto-Relacional (ORM) através do pacote sequelize do Node.js e 
a autenticação do usuário por meio de JSON Web Tokens (JWT).
Também utilizamos a arquitetura de software MSC (Model-Service-Controller).
Este projeto demonstra uma sólida compreensão do design de API RESTful e gerenciamento de banco de dados.

 ## Diagrama de Entidade-Relacionamento
Para orientar a construção das tabelas através do ORM, utilize o DER a seguir:

 ![Diagrama de Entidade do Blogs-API](./blogs_api_database.png)

 ## Sobre o projeto:
 ### O que foi desenvolvido:
 <ol>  
  <li><p>Endpoints que estão conectados ao banco de dados seguindo os princípios do REST.</p></li>
 
  <li><p>Criação de um post, necessitando da relação entre usuário e login, sendo **relação (1:N) entre** `user` e `blog_posts`.</p></li>  
 
  <li><p>Separamos os post por categorias, com a **relação (N:N) de** `blog_posts` para `categories` e de `categories` para `blog_posts`.</p></li>
 
  <li><p>Arquivos ou Pastas que foram desenvolvidos:
   <ul>
      <li>Controllers;</li>
      <li>Middlewares;</li>
      <li>Migrations;</li>
      <li>Services;</li>
      <li>Models;</li>
      <li>Utils;</li>
      <li>App.js</li>
   </ul>
   </p>
  </li>
 </ol>

#### :heavy_exclamation_mark:ATENÇÃO!:heavy_exclamation_mark:: Todos os arquivos que não foram mencionados, foram criados pela Trybe! :white_check_mark:

## Instalação

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

## Utilizando a API

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

## Dependências

Este projeto utilizou os seguintes pacotes:

 <h4>Dependências:</h4>
<ul> 
  <li>express: Web framework for Node.js.</li>
  <li>express-async-errors: Middleware to handle async errors.</li>
  <li>joi: Data validation library.</li>
  <li>jsonwebtoken: For handling JWT authentication.</li>
  <li>mysql2: MySQL client for Node.js.</li>
  <li>sequelize: ORM for managing SQL databases.</li> 
</ul>

<h4> Dependências de desenvolvimento:</h4>
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

## License

<p>Este projeto é licenciado sob a Licença MIT. Boa codificação!</p>



