'use strict';

const _ = require('lodash')
const service = require('./clientService');
const { handleInitialSuccess, handleInitialFailure } = require('../utils/routeHelpers');

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
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, 'Failed to retrieve client(s)');
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
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, `Failed to retrieve client with id: ${id}`);
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  }
)

module.exports = _.flattenDeep(routes);