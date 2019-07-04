'use strict';

const _ = require('lodash')
const service = require('./usernoteService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/usernotes/user/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getUsernoteByUser(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve usernotes for user with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/usernotes/submitter/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getUsernoteBySubmitter(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve usernotes for submitter with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/usernotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getUsernoteById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve usernote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote']
    }
  },
  {
    method: 'POST',
    path: '/api/v1/usernotes',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const result = await service.createUsernote(data);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create usernote`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/v1/usernotes/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const { role, userId } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updated = await service.updateUsernote(id, data, userId);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update usernote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/usernotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.deleteUsernote(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete usernote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'usernote', 'delete']
    }
  }
)

module.exports = _.flattenDeep(routes);