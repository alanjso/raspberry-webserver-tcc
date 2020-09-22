# Iniciando novo projeto
Delete a pasta .git do diretório e inicie um novo repositorio para o projeto

# RUN
comandos npm start ou nodemon start configurados

# deploy
Dockerfile configurado para deploy na porta 4001 com node versao 10

# package.json
Altere o "name" e "description" do projeto para o que vai desenvolver agora

# pasta 'test'
Aqui devem ser criado os arquivos de teste que vão rodar com o comando "npm test"
Outros testes devem ser escritos seguindo o modelo do arquivo "crud.test.js"

# pasta 'crud'
Contem um modelo de CRUD que deve ser seguido para outros CRUDs e serviços do projeto

# arquivo 'routs'
Deve ser importado todos os arquivos de rotas de serviços do sistema como mostra no modelo

# pasta 'utils'
Funções de reuso constantes que são compartilhados por várias partes do sistema.

# pasta 'database'
Arquivos de código para se conectar com mongo ou postgres.
Devem ser configurados dentro dos arquivos da pasta 'config'

# pasta 'config'
contem os arquivos de configuracao basicos do sistema em cada ambiente de deploy.
habilita o uso do mongo, postgres, determina host e nome de database do projeto alem da porta que ira rodar e servidor de email.