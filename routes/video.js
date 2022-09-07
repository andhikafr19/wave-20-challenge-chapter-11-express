const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { video } = require('../controllers/mediaController')

router.use(bodyParser.json())

router.get('/', () => {
  return 'asdasd'
})

// upload video
router.post('/upload', async (req, res) => {
  return video.upload(req, res)
})

module.exports = router
