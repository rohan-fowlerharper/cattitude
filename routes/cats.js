const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  const cats = await db.getAllCats()

  res.render('home', { cats })
})

router.get('/add-cat', async (req, res) => {
  res.render('add-cat')
})

router.post('/add-cat', async (req, res) => {
  const { name, colour } = req.body
  const newCat = { name, colour }

  const newIds = await db.addCat(newCat)
  const newId = newIds[0]

  res.redirect(`/cats/${newId}`)
})

router.get('/:id', async (req, res) => {
  const cat = await db.getCatById(req.params.id)

  res.render('cat', { cat })
})

router.get('/:id/edit', async (req, res) => {
  const cat = await db.getCatById(req.params.id)

  res.render('edit-cat', { cat })
})

router.post('/:id/edit', async (req, res) => {
  // const name = req.body.name
  // const colour = req.body.colour
  // -- is the same as:
  const { name, colour } = req.body
  const newCat = { name, colour }

  await db.updateCat(req.params.id, newCat)

  res.redirect(`/cats/${req.params.id}`)
})

router.post('/:id/delete', async (req, res) => {
  await db.deleteCat(req.params.id)

  res.redirect('/cats')
})

module.exports = router

// EXTRA ----------------------------------------------------------------------

// with promises
// router.get('/', (req, res) => {
//   db.getAllCats().then((cats) => {
//     res.render('home', { cats })
//   })
// })

// async/await with error handling
// router.get('/', (req, res) => {
//   try {
//     const cats = await db.getAllCats()

//     res.render('home', { cats })
//   } catch (err) {
//     console.error(err)
//     res.status(500).send('Server error')
//   }
// })

// promises with error handling
// router.get('/', (req, res) => {
//   db.getAllCats()
//     .then((cats) => {
//       res.render('home', { cats })
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500).send('Server error')
//     })
// })

// ------------------------------------------------------------------------------
