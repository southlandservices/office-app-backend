Southland Service Group ERP Hapi Server

- build database `npm run db:migrate`
- seed database `npm run db:seed`
- create new model (and migration) `sequelize model:create --name UserNotes --attributes note:text submitter:integer`
- create new seed `sequelize seed:create --name userNotes`