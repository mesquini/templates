# Backend Basic

> yarn add dotenv knex express celebrate cors

> yarn add -D eslint prettier nodemon sucrase

- Config eslint
  > `npx eslint --init`

## Knex or Sequelize ?

Dialects: pg pg-hstore, sqlite3.

- For [knex](http://knexjs.org/) run:<br>
  `- yarn add knex` <br>
  `- npx knex init` <br>
  `- yarn knex migrate:make migration_name` <br>
  `- yarn knex migrate:latest`

- For [sequelize](https://sequelize.org/) run: <br>
  `- yarn add sequelize sequelize-cli` <br>
  `- npx sequelize-cli init` <br>
  `- npx sequelize-cli model:generate --name User` <br>
  `- npx sequelize-cli db:migrate`
