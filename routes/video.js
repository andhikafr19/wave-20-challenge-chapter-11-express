const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { video } = require('../controllers/mediaController')

const Video = require('../model/video')

router.use(bodyParser.json())

router.get('/', async (req, res) => {
  return res.json(await Video.find())
})

// upload video
router.post('/upload', async (req, res) => {
  return video.upload(req, res)
})

module.exports = router
