'use strict';

const _ = require('lodash')
const service = require('./userService');
const notes = require('../usernote/usernoteService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission, getRole } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/users',
    async handler(req, h) {
      const { query } = req;
      const role = getRole(req);
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
    path: '/api/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/users/{id}/notes',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/users/{id}/note',
    async handler(req, h) {
      const { id } = req.params;
      const data = req.payload;  // const data = JSON.parse(req.payload);
      if (data.id) { delete data.id; }
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const result = await notes.createUsernote(data);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create usernote`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'notes', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/users/{id}/note/{noteId}',
    async handler(req, h) {
      const data = req.payload; // const data = JSON.parse(req.payload);
      const { id, noteId } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updated = await notes.updateUsernote(noteId, data);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update usernote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'notes', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/users/{id}/note/{noteId}',
    async handler(req, h) {
      const { id, noteId } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await notes.deleteUsernote(id, noteId);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete usernote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'users', 'delete']
    }
  },
  {
    method: 'POST',
    path: '/api/users',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      if(!data.role) { data.role = "4" }
      delete data.id;
      const role = getRole(req);
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
    path: '/api/users/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
