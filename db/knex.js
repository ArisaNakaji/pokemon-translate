const config = requre('./knexfile.js')[environment];
console.log(config);
module.exports = require('knex')(config);