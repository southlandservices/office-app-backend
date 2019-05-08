'use strict';

const _ = require('lodash')
const service = require('./clientContactService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/clientContacts',
    async handler(req, h) {
      const { query } = req;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = !query ?
            await service.getClientContacts() :
            await service.getClientContact(query);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve client contact(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContacts']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/clientContacts/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientContactById(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve client with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContacts']
    }
  }
)

module.exports = _.flattenDeep(routes);