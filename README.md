## Descrição:
**Blogs API** é uma API projetada para gerenciar postagens e categorias de blog. Ela permite que os usuários criem, leiam, atualizem e excluam postagens de blog. 
Para criação das tabelas do banco de dados, foi utilizado a técnica de Mapeamento Objeto-Relacional (ORM) através do pacote sequelize do Node.js e 
a autenticação do usuário por meio de JSON Web Tokens (JWT).
Também utilizamos a arquitetura de software MSC (Model-Service-Controller).
Este projeto demonstra uma sólida compreensão do design de API RESTful e gerenciamento de banco de dados.

 ## Diagrama de Entidade-Relacionamento
Para orientar a construção das tabelas através do ORM, utilize o DER a seguir:

 ![Banco Blogs-API](./blogs_api_database.png)

 ## Sobre o projeto:
  <summary><strong>O que foi desenvolvido:</strong></summary>  

  1. Endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

  2. Criação de um post, necessitando da relação entre usuário e login, sendo **relação (1:N) entre** `user` e `blog_posts`; 

  3. Separamos os post por categorias, com a **relação (N:N) de** `blog_posts` para `categories` e de `categories` para `blog_posts`.

  4. Arquivos dentro da pasta src que foram desenvolvidos: 
     - A pasta controllers;
     - A pasta de middlewares;
     - A pasta de migrations;
     - A pasta de services;
     - A pasta models;
     - A pasta utils;
     - As rotas da API dentro do arquivo app.js

### :heavy_exclamation_mark:ATENÇÃO!:heavy_exclamation_mark:: Todos os arquivos que não foram mencionados, foram criados pela Trybe! :white_check_mark:

<br />
