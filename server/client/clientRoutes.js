'use strict';

const httpStatus = require('http-status')
const _ = require('lodash')
const config = require('config')
const service = require('./clientService');
const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/clients',
    async handler(req, h) {
      const { query } = req;
      try {
        const data = !query ?
          await service.getClients() :
          await service.getClient(query);
        return h.response({ data });
      } catch (error) {
        const errorMessage = 'Failed to retrieve client(s)';
        !error.logged && logger.error(error, errorMessage)
        return h.response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/clients/{id}',
    async handler(req, h) {
      const { id } = req.params;
      try {
        const data = await service.getClientById(id);
        return h.response({ data });
      } catch (error) {
        const errorMessage = `Failed to retrieve client with id: ${id}`;
        !error.logged && logger.error(error, errorMessage)
        return h.response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  }
)

module.exports = _.flattenDeep(routes);