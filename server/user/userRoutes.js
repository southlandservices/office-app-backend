'use strict';

const _ = require('lodash')
const service = require('./userService');
const notes = require('../usernote/usernoteService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/users',
    async handler(req, h) {
      const { query } = req;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if(checkPermission(req, allowedRoles)) {
        try {
          const data = (!query || _.isEmpty(query)) ?
            await service.getUsers() :
            await service.getUser(query, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve user(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getUserById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve user with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}/notes',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await notes.getUsernoteByUser(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve notes for user with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'usernotes']
    }
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      if(!data.role) { data.role = "4" }
      delete data.id;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const result = await service.createUser(data);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create user with email: ${data.email}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updated = await service.updateUser(id, data);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update user with email: ${data.email}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.deleteUser(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete user with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'delete']
    }
  }
)

module.exports = _.flattenDeep(routes);