const pokemon = require('../../data/pokemon.json');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert(pokemon);
    });
};
