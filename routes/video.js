const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { video } = require('../controllers/mediaController')

router.use(bodyParser.json())

router.get('/', (req, res) => {
  return res.send('video')
})

// upload video
router.post('/upload', async (req, res) => {
  return video.upload(req, res)
})

module.exports = router
