require("dotenv").config()

// module.exports = {
//   client: 'pg',
//   connection:
//   process.env.DATABASE_URL || {
//     process.env.DATABASE_HOST || '127.0.0.1',
//     process.env.DATABASE_DATABASE || process.env.DB_NAME,
//     process.env.DATABASE_USER || process.env.DB_USER,
//     process.env.DATABASE_PORT || '5432',
//     process.env.DATABASE_PASSWORD || process.env.DB_USER,
//   }

// }

// if (process.env.DATABASE_URL !== null) {
//   const parse = require("pg-connection-string").parse;
//   const pgconfig = parse(process.env.DATABASE_URL);
//   pgconfig.ssl = { rejectUnauthorized: false };
//   console.log("pgconfig: ", pgconfig);
// }

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds/production",
    },
  },
};