# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Laços de Leitura

#### Anny Jhulia Cerazi

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução

&emsp;*Laços de Leitura- é uma aplicação web que permite a criação de uma biblioteca virtual pessoal para registro de leituras realizadas de obras de Clarice Lispector. A partir do momento em que o usuário adiciona o livro em sua biblioteca, pode registrar a nota que daria para o livro e sua leitura, além do tempo que levou e, também, se possui o livro físico ou não.
&emsp;O sistema se baseia na integração de um banco de dados em uma aplicação web, com back-end feito em JavaScript e front-end em CSS e HTML.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas

### 2.2. User Stories

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados

<img src='../modelo-banco.png'>

### 3.1.1 BD e Models (Semana 5)

#### 3.1.1.1. Model User

Responsabilidade: Gerenciar dados da tabela users

Métodos:
- GETAll(): Retorna todos os usuários ordenados por username
- GETById(id): Busca um usuário específico pelo ID
- create(data): Cria novo usuário
- update(id, data): Atualiza username de um usuário
- delete(id): Remove usuário

Métodos auxiliares:
- GETByUsername(username): Busca usuário pelo nome
- exists(id): Verifica se usuário existe


#### 3.1.1.2. Model Book
Responsabilidade: Gerenciar dados da tabela book e suas relações com gêneros

Métodos:
- GETAll(): Lista todos os livros com nome do gênero
- GETById(id): Busca livro específico com dados do gênero
- create(data): Adiciona novo livro
- update(id, data): Atualiza dados do livro
- delete(id): Remove livro
- searchByTitle(title): Busca livros por título
- GETByGenre(genreId): Retorna todos os livros de um gênero específico

Métodos auxiliares:
- exists(id): Verifica se livro existe


#### 3.1.1.3. Model Reading
Responsabilidade: Gerenciar dados da tabela users_book (relacionamento entre usuários e livros)

Métodos:
- GETAll(): Todas as leituras com dados de usuário, livro e gênero
- create(data): Cria nova leitura
- update(userId, bookId, data): Atualiza leitura específica
- delete(userId, bookId): Remove leitura específica
- GETByUser(userId): Todas as leituras de um usuário com dados dos livros
- GETByBook(bookId): Todos os usuários que leram um livro específico
- GETByUserAndBook(userId, bookId): Leitura específica de um usuário para um livro

Métodos auxiliares:
- exists(userId, bookId): Verifica se já existe leitura para este par usuário-livro
- deleteByBookId(bookId): Remove todas as leituras de um livro

### 3.2. Arquitetura

<img src= '../diagrama-arquitetura-mvc.jpg'>

Esse diagrama representa a arquitetura MVC (Model-View-Controller) de uma aplicação web com backend em Node.js + Express e banco de dados PostgreSQL.

### Funcionamento entre as camadas:

#### Frontend

- O navegador (Browser) acessa a aplicação via `localhost:3000` usando JavaScript para interagir com a API backend.

#### Backend (Node.js + Express)

- A requisição é enviada para a API.
- Os endpoints são definidos nas rotas.
- As rotas chamam os controllers (`UsersController`, `BooksController`, `ReadingController`), que contêm a lógica de negócio.
- Os controllers interagem com os models (`userModel`, `bookModel`, `readingModel`), responsáveis pela comunicação com o banco de dados.
- Os models usam um conector de banco (`config/database.js`) para executar queries no PostgreSQL.

### Camadas:

- Rotas: definem os caminhos da API.
- Controllers: tratam a lógica de negócio.
- Models: fazem a interface com o banco.
- Database: armazena os dados de usuários, livros e leituras.

Essa estrutura separa responsabilidades, facilita manutenção e escalabilidade.


### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints 

#### 3.6.1. Rotas de Usuários

- POST /api/users - Cria um novo usuário no sistema
- GET /api/users/:id - Busca e retorna o perfil de um usuário específico pelo ID

#### 3.6.2. Rotas de Livros

- GET /api/livros - Lista todos os livros disponíveis no sistema
- GET /api/livros/buscar - Permite buscar livros específicos (provavelmente por título, autor, etc.)

#### 3.6.3. Rotas de Leituras

- POST /api/leituras - Registra uma nova leitura (quando um usuário começa/termina um livro)
- GET /api/leituras/user/:userId - Busca todas as leituras de um usuário específico
- DELETE /api/leituras/:readingId - Remove um registro de leitura específico

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---