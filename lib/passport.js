const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')

const Player = require('../model/player')

require('dotenv').config()

const option = {}

option.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
option.secretOrKey = process.env.JWT_SECRET

passport.use(new JwtStrategy(option, (jwtPayload, done) => {
  Player.findById(jwtPayload.id, (err, player) => {
    if (err) return done(err, false)

    if (!player) return done(null, false)

    return done(null, player)
  })
}))
