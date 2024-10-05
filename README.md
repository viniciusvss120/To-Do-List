#### Comandos para rodar a API

## Instalação da dependencias
- npm install

## Rodar o docker para iniciar o banco de dados
- docker-compose up -d

## Para usar o prisma na api
- npx prisma migrate dev

## Para vizualizar o bando de dados prisma
- npx prisma studio

## Para rodar os tests unitários
- npm run test

## Para rodar os tests e2e
- npm run test:e2e

## Para acessar a documentação no swagger
- http://localhost:3333/docs

O servidor precisa estar iniciado.

## Observação
- Esse projeto foi desenvolvido seguindo alguns conceitos de Clean Code;
- Foi criado uma estrutura de entidades para melhor estruturar e tipar os usuário, tasks e subtaks;
- Devido ao tempo de entrega e imprevistos, alguns tests unitários e e2e não foram feitos, mas cada rota foi testada.