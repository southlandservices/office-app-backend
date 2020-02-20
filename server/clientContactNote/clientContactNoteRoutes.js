'use strict';

const _ = require('lodash')
const service = require('./clientContactNoteService');
const { handleInitialSuccess, handleInitialFailure, permissionError, checkPermission } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/clientContactNotes/submitter/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientContactNoteBySubmitter(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve clientContactNotes for submitter with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContactNotes']
    }
  },
  {
    method: 'GET',
    path: '/api/clientContactNotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin', 'Manager', 'Customer Service'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.getClientContactNoteById(id, role);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to retrieve clientContactNotes with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContactNotes']
    }
  },
  {
    method: 'POST',
    path: '/api/clientContactNotes',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      delete data.id;
      const { role, userId } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updatedData = Object.assign({}, data, {
            submitterId: userId
          });
          const result = await service.createClientContactNote(updatedData);
          return handleInitialSuccess(h, result);
        } catch (error) {
          return handleInitialFailure(error, `Failed to create clientContactNotes`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContactNotes', 'create']
    }
  },
  {
    method: 'PUT',
    path: '/api/clientContactNotes/{id}',
    async handler(req, h) {
      const data = JSON.parse(req.payload);
      const { id } = req.params;
      const { role, userId } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const updated = await service.updateClientContactNote(id, data, userId);
          return handleInitialSuccess(h, updated);
        } catch (error) {
          return handleInitialFailure(error, `Failed to update clientContactNotes with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContactNotes', 'update']
    }
  },
  {
    method: 'DELETE',
    path: '/api/clientContactNotes/{id}',
    async handler(req, h) {
      const { id } = req.params;
      const { role } = req.auth.credentials;
      const allowedRoles = ['Admin'];
      if (checkPermission(req, allowedRoles)) {
        try {
          const data = await service.deleteClientContactNote(id);
          return handleInitialSuccess(h, data);
        } catch (error) {
          return handleInitialFailure(error, `Failed to delete clientContactNotes with id: ${id}`);
        }
      } else {
        permissionError(h, role);
      }
    },
    config: {
      tags: ['api', 'v1', 'clientContactNotes', 'delete']
    }
  }
)

module.exports = _.flattenDeep(routes);