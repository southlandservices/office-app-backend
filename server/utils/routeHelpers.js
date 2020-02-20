const logger = require('./logger')
const boom = require('boom')

const handleInitialSuccess = (h, data) => {
  return !data ?
    boom.notFound() :
    h.response({ data });
}

const handleInitialFailure = (error, errorMessage, h) => {
  !error.logged && logger.error(error, errorMessage)
  return h.response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
}

const permissionError = (h, role) => {
  const errorMessage = `Route not permitted for role: ${role}`;
  !error.logged && logger.error(error, errorMessage)
  return h.response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
}

const checkPermission = (req, allowedRoles) => {
  const { role } = req.auth.credentials;
  return allowedRoles.includes(role)
}

module.exports = {
  handleInitialSuccess,
  handleInitialFailure,
  checkPermission,
  permissionError
}