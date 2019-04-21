'use strict';

const _ = require('lodash')
const service = require('./userService');
const { handleInitialSuccess, handleInitialFailure } = require('../utils/routeHelpers');

const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/users',
    async handler(req, h) {
      const { query } = req;
      try {
        const data = !query ? 
            await service.getUsers() : 
            await service.getUser(query);
        return handleInitialSuccess(h, data);
      } catch(error) {
        return handleInitialFailure(h, 'Failed to retrieve user(s)');
      }
    },
    config: {
      tags: ['api', 'v1', 'users'],
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      try {
        const data = await service.getUserById(id);
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, `Failed to retrieve user with id: ${id}`);
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    async handler(req, h) {
      const data = req.payload;
      try {
        const data = await service.createUser(data);
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, `Failed to create user with email: ${data.email}`);
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const data = req.payload;
      const { id } = req.params;
      try {
        const data = await service.updateUser(id, data);
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, `Failed to update user with email: ${data.email}`);
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    async handler(req, h) {
      const { id } = req.params;
      try {
        const data = await service.deleteUser(id);
        return handleInitialSuccess(h, data);
      } catch (error) {
        return handleInitialFailure(h, `Failed to delete user with id: ${id}`);
      }
    },
    config: {
      auth: false
    }
  }
)

module.exports = _.flattenDeep(routes);