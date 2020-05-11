'use strict';

const _ = require('lodash')
const service = require('./clientService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission, getRole } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/clients',
    async handler(req, h) {
      const { query } = req;
      // const { role } = req.auth.credentials;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = (!query || _.isEmpty(query)) ?
            await service.getClients() :
            await service.getClient(query, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve client(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  },
  {
    method: 'GET',
    path: '/api/clients/{id}',
    async handler(req, h) {
      const { id } = req.params;
      // const { role } = req.auth.credentials;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve client with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  },
  {
    method: 'GET',
    path: '/api/clients/{id}/contacts',
    async handler(req, h) {
      const { id } = req.params;
      // const { role } = req.auth.credentials;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientContactsByClientId(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve client with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  },
  {
    method: 'GET',
    path: '/api/clients/{id}/contacts/{contactId}',
    async handler(req, h) {
      const { id, contactId } = req.params;
      // const { role } = req.auth.credentials;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientContactByContactId(contactId);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve client with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clients']
    }
  }
)

module.exports = _.flattenDeep(routes);