
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1, name: 'nicolas', age: 24},
        {id: 2, name: 'zulema', age: 22},
        {id: 3, name: 'andrea', age: 26},
      ]);
    });
};
