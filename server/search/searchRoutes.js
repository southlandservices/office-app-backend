'use strict';

const _ = require('lodash');
const search = require('./searchService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission, getRole } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/search/all',
    async handler(req, h) {
      const { query } = req;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await search.searchAll(query, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve results', h);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'search', 'all']
    }
  }
)

module.exports = _.flattenDeep(routes);