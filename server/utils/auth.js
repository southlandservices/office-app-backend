const jwtPlugin = require('hapi-auth-jwt2').plugin
const jwt = require('jsonwebtoken')
const Boom = require('boom')

// This will be in an environment variable in production
const JWT_KEY = '123SecretKey'

var validate = function (credentials) {
  // Run any checks here to confirm we want to grant these credentials access
  return {
    isValid: true,
    credentials // request.auth.credentials
  }
}

exports.configureAuth = async (server) => {
  await server.register(jwtPlugin)
  server.auth.strategy('admin', 'jwt', {
    key: JWT_KEY,
    validate,
    verifyOptions: { algorithms: ['HS256'] }
  })

  // Default all routes to require JWT and opt out for public routes
  server.auth.default('admin')
}

exports.login = (email, password) => {
  if (!(email === 'mb4@gmail.com' && password === 'bears')) return Boom.notAcceptable()
  const credentials = { email }
  const token = jwt.sign(credentials, JWT_KEY, { algorithm: 'HS256', expiresIn: '24h' })

  return { token }
}