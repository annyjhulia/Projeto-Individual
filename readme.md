# Inteli - Instituto de Tecnologia e Liderança 

# Laços de Leitura

## 📝 Descrição

&emsp;*Laços de Leitura* é uma aplicação web que permite a criação de uma biblioteca virtual pessoal para registro de leituras realizadas de obras de Clarice Lispector. A partir do momento em que o usuário adiciona o livro em sua biblioteca, pode registrar a nota que daria para o livro e sua leitura, além do tempo que levou e, também, se possui o livro físico ou não.

## 🎯 Objetivos do Projeto

- Criar uma plataforma para amantes da literatura de Clarice Lispector
- Permitir o registro e acompanhamento de leituras pessoais
- Oferecer uma interface intuitiva e esteticamente alinhada com o universo literário da autora
- Demonstrar a implementação de uma arquitetura MVC com Node.js, Express e PostgreSQL

## 🚀 Funcionalidades Principais

- Visualização do catálogo completo de obras de Clarice Lispector
- Adição de livros à biblioteca pessoal do usuário
- Registro de avaliações (notas de 1 a 10) para cada leitura
- Registro do tempo dedicado à leitura de cada obra
- Indicação de posse do livro físico
- Adição de notas e impressões pessoais sobre cada leitura
- Remoção de livros da biblioteca pessoal

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript, EJS (templates)
- **Banco de Dados**: PostgreSQL
- **Testes**: Jest, Supertest
- **Outros**: Dotenv (variáveis de ambiente), Nodemon (desenvolvimento)

## 📁 Estrutura de pastas

```
lacos-de-leitura/
│
├── assets/                # Arquivos públicos como imagens e fontes
├── config/                # Arquivos de configuração (ex: conexão com banco)
├── controllers/           # Lógica de controle das requisições
├── documentos/            # Todos os documentos do projeto, como o Web Application Document (WAD)
├── models/                # Definição de modelos de dados (estrutura do banco)
├── node_modules/          # Estruturas do Node.js
├── routes/                # Definição das rotas do sistema
├── scripts/               # Arquivos de JavaScript públicos
│   ├── init.sql           # Script de inicialização do banco de dados
│   └── runSQLScript.js    # Script para executar comandos SQL
├── services/              # Serviços auxiliares do sistema
├── tests/                 # Arquivos de testes unitários
├── views/                 # Configurações de visualização da aplicação
│   └── pages/             # Páginas EJS da aplicação
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── jest.config.js         # Arquivo de configuração do Jest
├── modelo-banco.png       # Modelo da estrutura do banco de dados do projeto
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── rest.http              # Teste de endpoints (opcional)
└── server.js              # Arquivo principal que inicializa o servidor
```

## 💻 Configuração para desenvolvimento e execução do código

### Pré-requisitos

- Node.js (versão 16.15.1 LTS ou superior)
- PostgreSQL (versão 14 ou superior)
- Git

### Passo a passo para configuração

1. **Instalar o Node.js**
   - Baixe e instale o Node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS ou superior)
   - Verifique a instalação executando no terminal:
     ```sh
     node --version
     npm --version
     ```

2. **Instalar e configurar o PostgreSQL**
   - Baixe e instale o PostgreSQL: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
   - Crie um banco de dados para o projeto:
     ```sql
     CREATE DATABASE lacos_de_leitura;
     ```

3. **Clonar o repositório**
   ```sh
   git clone https://github.com/seu-usuario/lacos-de-leitura.git
   cd lacos-de-leitura
   ```

4. **Instalar as dependências do projeto**
   ```sh
   npm install
   ```

5. **Configurar as variáveis de ambiente**
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:
     ```
     DB_USER=seu_usuario_postgres
     DB_HOST=localhost
     DB_DATABASE=lacos_de_leitura
     DB_PASSWORD=sua_senha_postgres
     DB_PORT=5432
     ```

6. **Inicializar o banco de dados**
   ```sh
   npm run init-db
   ```
   Este comando executará o script SQL que criará as tabelas e inserirá os dados iniciais.

7. **Iniciar o servidor em modo de desenvolvimento**
   ```sh
   npm run dev
   ```
   O servidor será iniciado com Nodemon, que reinicia automaticamente quando há alterações no código.

8. **Acessar a aplicação**
   - Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

### Comandos disponíveis

- `npm start`: Inicia o servidor em modo de produção
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com Nodemon
- `npm test`: Executa os testes unitários
- `npm run test:coverage`: Executa os testes e gera relatório de cobertura
- `npm run init-db`: Inicializa o banco de dados com as tabelas e dados iniciais
- `npm run migrate`: Executa migrações de banco de dados (se houver)

## 📝 Uso da Aplicação

### Página Inicial

Ao acessar a aplicação, você verá a página inicial com:

1. **Cabeçalho**: Título da aplicação e uma citação de Clarice Lispector
2. **Formulário de Adição**: Para adicionar novas leituras à sua biblioteca
3. **Biblioteca Virtual**: Exibe cards dos livros que você adicionou
4. **Informações sobre a Autora**: Breve biografia de Clarice Lispector

### Como adicionar um livro à sua biblioteca

1. No formulário "Adicionar Nova Leitura", selecione o título da obra
2. Escolha uma nota de 1 a 10 para a sua experiência de leitura
3. Informe o tempo de leitura em horas
4. Marque a caixa "Possuo o livro físico" se aplicável
5. Opcionalmente, adicione notas pessoais sobre a leitura
6. Clique em "Adicionar à Biblioteca"

### Como remover um livro da sua biblioteca

1. Localize o card do livro na sua biblioteca virtual
2. Clique no botão "Remover" no canto inferior do card

## 📊 Modelo do Banco de Dados

O banco de dados do projeto segue o seguinte modelo relacional:

![Modelo do Banco de Dados](modelo-banco.png)

## 🗃 Histórico de lançamentos

* 0.2.0 - 15/05/2025
    * Implementação da interface de usuário
    * Integração com o banco de dados PostgreSQL
    * Desenvolvimento das rotas da API

* 0.1.0 - 09/05/2025
    * Modelo Físico Relacional do banco de dados
    * Configuração inicial do projeto

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📧 Contato

Anny Jhulia Cerazi - [anny.cerazi@sou.inteli.edu.br](mailto:anny.cerazi@sou.inteli.edu.br)

