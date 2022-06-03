const config = require('./knexfile').development
const connection = require('knex')(config)

function getAllCats(db = connection) {
  return db('cats').select()
}

function getCatById(id, db = connection) {
  return db('cats').where({ id }).first()
}

function addCat(cat, db = connection) {
  return db('cats').insert(cat)
}

function updateCat(id, cat, db = connection) {
  return db('cats').update(cat).where({ id })
}

function deleteCat(id, db = connection) {
  return db('cats').where({ id }).del()
}

module.exports = {
  getAllCats,
  getCatById,
  addCat,
  updateCat,
  deleteCat,
}
