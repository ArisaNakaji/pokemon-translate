require("dotenv").config()

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: process.env.DATABASE_HOST || "127.0.0.1",
    database: process.env.DATABASE_DATABASE || process.env.DB_NAME,
    user: process.env.DATABASE_USER || process.env.DB_USER,
    port: process.env.DATABASE_PORT || '5432',
    password: process.env.DATABASE_PASSWORD || process.env.DB_PASSWORD,
  }
};