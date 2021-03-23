module.exports = {
  development: {
    client: 'pg',
    connection: { 
      user: process.env.DB_USER, 
      database: process.env.DB_NAME 
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'pokemon'
    }
  },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: __dirname + "/migrations",
  //   },
  //   seeds: {
  //     directory: __dirname + "/seeds/production",
  //   },
  // },
};