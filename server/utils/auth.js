const jwtPlugin = require('hapi-auth-jwt2').plugin
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Boom = require('boom')
const userService = require('../user/userService')

// This will be in an environment variable in production
const JWT_KEY = '123SecretKey'

const validate = async (decoded, request, h) => {
  // Run any checks here to confirm we want to grant these credentials access
  // verify the email exists in the db?
  return {
    isValid: true,
    decoded
  }
}

exports.configureAuth = async (server) => {
  await server.register(jwtPlugin)
  server.auth.strategy('jwt', 'jwt', {
    key: JWT_KEY,
    validate,
    verifyOptions: { algorithms: ['HS256'] }
  })

  // Default all routes to require JWT and opt out for public routes
  server.auth.default('jwt')
}

exports.login = async (email, password) => {
  const credentials = { email }
  const user = await userService.getUserForAuth(credentials);
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return Boom.notAcceptable();
  credentials.role = user.Role.name;
  
  const token = jwt.sign(
    credentials, 
    JWT_KEY, 
    {
      algorithm: 'HS256',
      expiresIn: '24h'
    }
  )

  const userDetails = {
    id: user.id,
    userRole: {
      id: user.Role.id,
      name: user.Role.name
    }
  };

  return { token, user: userDetails }
}