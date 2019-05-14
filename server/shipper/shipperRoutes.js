'use strict';

const _ = require('lodash')
const service = require('./shipperService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/shippers',
    async handler(req, h) {
      const { query } = req;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = !query ?
            await service.getShippers() :
            await service.getShipper(query, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve shipper(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'shippers']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/shippers/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getShipperById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve shipper with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'shipper']
    }
  },
)

module.exports = _.flattenDeep(routes);