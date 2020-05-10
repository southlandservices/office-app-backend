'use strict';

const _ = require('lodash')
const service = require('./jobnoteService');
const { 
  handleInitialSuccess, 
  handleInitialFailure, 
  permissionError, 
  checkPermission,
  getRole,
  getUserId
} = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/jobnotes/job/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.getJobnoteByJob(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve jobnotes for job with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote']
    }
  },
  {
    method: 'GET',
    path: '/api/jobnotes/submitter/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.getJobnoteBySubmitter(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve jobnotes for submitter with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote']
    }
  },
  {
    method: 'GET',
    path: '/api/jobnotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.getJobnoteById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve jobnote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote']
    }
  },
  {
    method: 'POST',
    path: '/api/jobnotes',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const role = getRole(req);
      const userId = getUserId(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const updatedData = Object.assign({}, data, {
            submitterId: userId
          });
          const result = await service.createJobnote(updatedData);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create jobnote`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/jobnotes/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const role = getRole(req);
      const userId = getUserId(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const updated = await service.updateJobnote(id, data, userId);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update jobnote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/jobnotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.deleteJobnote(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete jobnote with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobnote', 'delete']
    }
  }
)

module.exports = _.flattenDeep(routes);