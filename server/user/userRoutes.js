'use strict';

const httpStatus = require('http-status')
const _ = require('lodash')
const config = require('config')
const service = require('./userService');
const routes = [];

routes.push(
  {
    method: 'GET',
    path: '/api/v1/users',
    async handler(req, res) {
      const { query } = req;
      try {
        const data = !query ? 
            await service.getUsers() : 
            await service.getUser(query);
        return res({ data });
      } catch(error) {
        const errorMessage = 'Failed to retrieve user(s)';
        !error.logged && logger.error(error, errorMessage)
        return res(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    async handler(req, res) {
      const { id } = req.params;
      try {
        const data = await service.getUserById(id);
        return res({ data });
      } catch (error) {
        const errorMessage = `Failed to retrieve user with id: ${id}`;
        !error.logged && logger.error(error, errorMessage)
        return res(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
      }
    },
    config: {
      tags: ['api', 'v1', 'users']
    }
  }
)

module.exports = _.flattenDeep(routes);