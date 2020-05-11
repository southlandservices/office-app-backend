'use strict';

const _ = require('lodash')
const service = require('./jobService');
const notes = require('../jobnote/jobnoteService');
const { 
  handleInitialSuccess, 
  handleInitialFailure, 
  permissionError, 
  checkPermission,
  getRole
} = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/jobs',
    async handler(req, h) {
      const { query } = req;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = !query ?
            await service.getJobs() :
            await service.getJob(query);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, 'Failed to retrieve jobs(s)');
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobs']
    }
  },
  {
    method: 'GET',
    path: '/api/jobs/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await service.getJobById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve job with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'job']
    }
  },
  {
    method: 'GET',
    path: '/api/jobs/{id}/notes',
    async handler(req, h) {
      const { id } = req.params;
      const role = getRole(req);
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const data = await notes.getJobnoteByJob(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve notes for job with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'job', 'jobnotes']
    }
  },
  {
    method: 'POST',
    path: '/api/jobs',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const role = getRole(req);
      const allowedRoles = ['Admin'];
      if (checkPermission(role, allowedRoles)) {
        try {
          const result = await service.createJob(data);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create job`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'jobs', 'create']
    }
  },
)

module.exports = _.flattenDeep(routes);