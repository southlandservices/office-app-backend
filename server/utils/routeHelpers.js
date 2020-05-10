const logger = require('./logger')
const boom = require('boom')
const httpStatus = require('http-status')
const jwt = require('jsonwebtoken');
const _ = require('lodash');

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

const checkPermission = (role, allowedRoles) => {
  // const role = getRole(req);
  return allowedRoles.includes(role)
}

const decodeAuth = (req) => {
  const auth = _.get(req.headers, 'authorization');
  if (!auth) return false;
  const decoded = jwt.decode(auth);
  return decoded
}

const getRole = (req) => {
  const decoded = decodeAuth(req);
  const role = _.get(decoded, 'role');
  return role;
}

const getUserId = (req) => {
  const decoded = decodeAuth(req);
  const userId = _.get(decoded, 'userId');
  return userId;
}

module.exports = {
  handleInitialSuccess,
  handleInitialFailure,
  checkPermission,
  permissionError,
  getRole,
  getUserId
}