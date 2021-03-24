require("dotenv").config();
const parse = require("pg-connection-string").parse;

const pgconfig = parse(process.env.DATABASE_URL);
pgconfig.ssl = { rejectUnauthorized: false };

module.exports = {
  client: 'pg',
  connection: pgconfig || {
    host: process.env.DATABASE_HOST || "127.0.0.1",
    database: process.env.DATABASE_DATABASE || process.env.DB_NAME,
    user: process.env.DATABASE_USER || process.env.DB_USER,
    port: process.env.DATABASE_PORT || '5432',
    pxassword: process.env.DATABASE_PASSWORD || process.env.DB_PASSWORD,
  },
  migrations: {
    tableName: 'pokemons',
    directory: __dirname + '/db/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds',
  },
  searchPath: 'public',
};