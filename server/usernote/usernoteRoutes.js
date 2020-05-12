'use strict';

const _ = require('lodash')
const service = require('./usernoteService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission, getRole, getUserId } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/usernotes/user/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/usernotes/submitter/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/usernotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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
    path: '/api/usernotes',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const role = getRole(req);
      // const { userId } = req.auth.credentials;
      const userId = getUserId(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updatedData = Object.assign({}, data, {
            submitterId: userId
          });
          const result = await service.createUsernote(updatedData);
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
    path: '/api/usernotes/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const role = getRole(req);
      // const { userId } = req.auth.credentials;
      const userId = getUserId(req);
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
    path: '/api/usernotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
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