const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')

const playerRoute = require('./routes/player')
const authRoute = require('./routes/auth')

const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://shaniasad:secre7@cluster0.vp4fu.mongodb.net/?retryWrites=true&w=majority')

const app = express()

const origin = '*' // insert your origin here
app.use(cors({
  origin
}))

app.use(passport.initialize())

app.use('/player', passport.authenticate('jwt', { session: false }), playerRoute)

app.use('/auth', authRoute)

app.get('/', (req, res) => {
  res.send('welcome to CRUD service')
})

app.use((req, res) => {
  res.status(404).send('<h1> Endpoint not found.</h1>')
})

app.listen(port, () => {
  console.log(`server listening on ${port}`)
})
