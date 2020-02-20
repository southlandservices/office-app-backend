'use strict';

const _ = require('lodash')
const service = require('./roleService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/roles',
    async handler(req, h) {
      const { query } = req;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service', 'Tech'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const result = (!query || _.isEmpty(query)) ?
            await service.getRoles() :
            await service.getRole(query, role);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve role(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'roles']
    }
  }
);

module.exports = _.flattenDeep(routes);