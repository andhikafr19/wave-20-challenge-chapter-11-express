/* eslint-disable no-undef */
const { login, register } = require('../controllers/authController.js')
const mockRequest = (body = {}) => { return { body } }
const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  return res
}

describe('login and register function', () => {
  expect.extend({
    isObject (value) {
      const pass = typeof (value) === 'object'

      if (pass) {
        return {
          message: 'expected player to be object',
          pass: true
        }
      } else {
        return {
          message: 'expected player to be object',
          pass: false
        }
      }
    },
    isString (value) {
      const pass = typeof (value) === 'string'

      if (pass) {
        return {
          message: 'expected player to be string',
          pass: true
        }
      } else {
        return {
          message: 'expected player to be string',
          pass: false
        }
      }
    }
  })

  // test('res.json called with { status: true, message: "Logged in", player: Object, token: String }', async (done) => {
  //   const req = mockRequest({ email: 'none@email.com', password: '123456' })
  //   const res = mockResponse()
  //   login(req, res)
  //   console.log('res', res.status)
  //   expect(res.status).toBeCalledWith(404)
  //   expect(res.json).toBeCalledWith({
  //     success: false,
  //     message: 'Cannot find email'
  //   })
  //   done()
  // })

  test('res.json called with {success: true, message: Player successfully registered, player: Object}', done => {
    const req = mockRequest({ email: 'playerX@email.com', password: 'pass' })
    const res = mockResponse()
    register(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      success: true,
      message: 'Player successfully registered',
      player: expect.isString()
    })

    done()
  })
})
