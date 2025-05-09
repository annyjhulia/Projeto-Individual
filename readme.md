# Inteli - Instituto de Tecnologia e Liderança 

# Laços de Leitura

## 📝 Descrição

&emsp;*Laços de Leitura* é uma aplicação web que permite a criação de uma biblioteca virtual pessoal para registro de leituras realizadas de obras de Clarice Lispector. A partir do momento em que o usuário adiciona o livro em sua biblioteca, pode registrar a nota que daria para o livro e sua leitura, além do tempo que levou e, também, se possui o livro físico ou não.

## 📁 Estrutura de pastas

```
meu-projeto/
│
├── assets/                # Arquivos públicos como imagens e fontes
├── config/                # Arquivos de configuração (ex: conexão com banco)
├── controllers/           # Lógica de controle das requisições
├── documentos/            # Todos os documentos do projeto, como o Web Application  Document (WAD)
├── models/                # Definição de modelos de dados (estrutura do banco)
├── node_modules/          # Estruturas do Node.js
├── routes/                # Definição das rotas do sistema
├── scripts/               # Arquivos de JavaScript públicos
├── services/              # Serviços auxiliares do sistema
├── tests/                 # Arquivos de testes unitários
├── views/                 # Configurações de visualização da aplicação
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

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório [aqui.](link)
3. No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```
5. Agora você pode acessar a aplicação através do link http://localhost:3000/
6. O servidor está online.

## 🗃 Histórico de lançamentos

* 0.1.0 - 09/05/2025
    * Modelo Físico Relacional do banco de dados