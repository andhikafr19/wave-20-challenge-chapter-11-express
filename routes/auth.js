const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { login, register } = require('../controllers/authController')

router.use(bodyParser.json())

router.post('/login', async (req, res) => {
  return login(req, res)
})

// register player
router.post('/register', async (req, res) => {
  return register(req, res)
})

module.exports = router
