
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, text: 'task 1', completed: false},
        {id: 2, text: 'task 2', completed: false},
        {id: 3, text: 'task 4', completed: false},
      ]);
    });
};
