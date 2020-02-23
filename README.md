# Southland Service Group ERP Hapi Server

- build database `npm run db:migrate`
- seed database `npm run db:seed`
- create new model (and migration) `sequelize model:create --name UserNotes --attributes note:text submitter:integer`
- create new seed `sequelize seed:create --name userNotes`

## Config
- local config lives in `config/config.json`
- AWS config lives in `opt/config.json`
- Which config to use to connect to the db is set by `models/index.js`

## Startup (AWS)
- `cd /opt/back-end/ && sudo pm2 start ecosystem.config.js`