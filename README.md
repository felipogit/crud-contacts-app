Visão geral
Este é um projeto Nest.js para um Tech App que gerencia clientes e seus contatos. O aplicativo fornece APIs RESTful para criar, recuperar, atualizar e excluir clientes e contatos. Inclui autenticação usando tokens JWT e integra Swagger para documentação de API.

Pré-requisitos
Antes de executar o aplicativo, certifique-se de ter o seguinte instalado:

Node.js
npm (gerenciador de pacotes de nós)
PostgreSQL
Instalação
Clone o repositório:



git clone <repository-url>
cd <repository-directory>
Instale dependências:

npm install
Configuração do banco de dados
Crie um banco de dados PostgreSQL.

Defina a URL de conexão do banco de dados no .envarquivo:

ambiente

Copiar código
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
Executando o aplicativo


npm start
O aplicativo estará acessível em http://localhost:3000 .

Documentação da API
A documentação do Swagger está disponível em http://localhost:3000/api .

Estrutura do Projeto
O projeto segue uma estrutura modular com os seguintes componentes principais:

src: diretório do código-fonte.
auth: Módulo de autenticação.
clients: Módulo de clientes para gerenciamento de clientes.
contacts: Módulo de contatos para gerenciamento de contatos.
database: Serviço Prisma para interações com banco de dados.
app.module.ts: Módulo principal do aplicativo.
main.ts: Ponto de entrada do aplicativo.
Módulo de autenticação
O módulo de autenticação inclui serviços e controladores para lidar com a autenticação do usuário.

auth.service.ts: Serviço de autenticação com funcionalidade de login.
auth.controller.ts: Controlador de autenticação com endpoint de login.
Módulo Clientes
O módulo clientes gerencia operações relacionadas ao cliente.

clients.service.ts: Serviço para tratamento de operações do cliente (criar, localizar, atualizar, excluir).
clients.controller.ts: Controlador com endpoints para operações do cliente.
Módulo de Contatos
O módulo de contatos gerencia operações relacionadas a contatos.

contacts.service.ts: Serviço para tratamento de operações de contato (criar, localizar, atualizar, excluir).
contacts.controller.ts: Controlador com endpoints para operações de contato.
Documentação do Swagger
A documentação da API é gerada usando Swagger.

main.ts: Integração do Swagger com o aplicativo Nest.js.
Prisma Schema
O esquema Prisma define o modelo e os relacionamentos do banco de dados.

schema.prisma: arquivo de esquema Prisma especificando os modelos Cliente e Contatos.
Contribuindo
Sinta-se à vontade para contribuir abrindo problemas ou enviando solicitações pull. Contribuições são bem-vindas!
