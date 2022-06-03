const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
  })
)
server.set('view engine', 'hbs')

server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/cats', require('./routes/cats'))

server.get('/', (req, res) => {
  res.redirect('/cats')
})

module.exports = server
