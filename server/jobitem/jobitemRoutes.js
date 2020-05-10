'use strict';

const _ = require('lodash');
const service = require('./jobitemService');
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
    path: '/api/jobitems/job/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
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
  },
  {
    method: 'GET',
    path: '/api/jobitems/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.getJobItemById(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve jobItem with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobitem']
    }
  },
  {
    method: 'POST',
    path: '/api/jobitems',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const role = getRole(req);
      const userId = getUserId(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service', 'Tech'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const updatedData = Object.assign({}, data, {
            submitterId: userId
          });
          const result = await service.createJobItem(updatedData);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create jobitem`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobitem', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/jobitems/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service', 'Tech'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const updated = await service.updateJobItem(id, data);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update jobitem with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobitem', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/jobitems/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.deleteJobItem(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete jobitem with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobitem', 'delete']
    }
  }
)

module.exports = _.flattenDeep(routes);