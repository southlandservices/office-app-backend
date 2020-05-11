'use strict';

const _ = require('lodash')
const service = require('./shipperService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission, getRole } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/shippers',
    async handler(req, h) {
      const { query } = req;
      const role = getRole(req);
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
    path: '/api/shippers/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
  {
    method: 'POST',
    path: '/api/shippers',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const result = await service.createShipper(data);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create shipper with first name: ${data.firstName} and last name ${data.lastName}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'shippers', 'create']
    }
  },
)

module.exports = _.flattenDeep(routes);