## Descrição:
**Blogs API** é uma API projetada para gerenciar postagens e categorias de blog. Ela permite que os usuários criem, leiam, atualizem e excluam postagens de blog. 
Para criação das tabelas do banco de dados, foi utilizado a técnica de Mapeamento Objeto-Relacional (ORM) através do pacote sequelize do Node.js e 
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
   git clone <repository-url>
   cd blogs-api
  ``` 
 </li>
 <li>
  <p>Instale as dependências:</p>
  
  ```bash
   git clone <repository-url>
   cd blogs-api
   ``` 
 </li>
 <li>
  <p>Configure seu banco de dados com as migrações e modelos necessários:</p>
  
  ```bash
   npm run prestart
   ```
 </li> 
</ol>
