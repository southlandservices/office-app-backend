const handleInitialSuccess = (h, data) => {
  return !data ?
    boom.notFound() :
    h.response({ data });
}

const handleInitialFailure = (h, errorMessage) => {
  !error.logged && logger.error(error, errorMessage)
  return h.response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
}

module.exports = {
  handleInitialSuccess,
  handleInitialFailure
}