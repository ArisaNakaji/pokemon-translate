require("dotenv").config();
const parse = require("pg-connection-string").parse;

let pgconfig = null;
if (process.env.DATABASE_URL !== undefined) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
} else {

}

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "127.0.0.1", //this is localhost
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'migrate',
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
    searchPath: 'public',
  },
  production: {
    client: 'pg',
    connection: pgconfig,
    migrations: {
      tableName: 'migrate',
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
    searchPath: 'public',
  }

};
// connection: pgconfig || {
//   host: process.env.DATABASE_HOST || "127.0.0.1",
//   database: process.env.DATABASE_DATABASE || process.env.DB_NAME,
//   user: process.env.DATABASE_USER || process.env.DB_USER,
//   port: process.env.DATABASE_PORT || '5432',
//   pxassword: process.env.DATABASE_PASSWORD || process.env.DB_PASSWORD,
// },