const config = require('../knexfile.js');
console.log(config);
const environment = process.env.DB_ENV || 'development';
module.exports = require('knex')(config[environment]);

//[environment]はdevelopment,productionの指定をしている丈なので
//事前に指定するか、指定をなくすか。
//connectionは、developmentの時もprocess.env.DATABASE_URL,を.envに
//追加してあげれば、汎用的に使える。