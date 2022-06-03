/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cats').del()
  await knex('cats').insert([
    { id: 1, name: 'Hugo', colour: 'Black and White' },
    { id: 2, name: 'Scout', colour: 'White and Black' },
    { id: 3, name: 'Brazen', colour: 'Grey' },
  ])
}
