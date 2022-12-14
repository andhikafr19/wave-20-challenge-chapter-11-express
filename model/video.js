const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Video', videoSchema)
