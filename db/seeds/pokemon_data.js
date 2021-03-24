const pokemon = require('../../data/pokemon.json');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemons').insert(pokemon);
    });
};
