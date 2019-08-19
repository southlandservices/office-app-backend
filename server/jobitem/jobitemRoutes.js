'use strict';

const _ = require('lodash');
const service = require('./jobitemService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');
const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/jobitems/job/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getJobItemsByJobId(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve jobitems for job with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobitem']
    }
  }
)

module.exports = _.flattenDeep(routes);