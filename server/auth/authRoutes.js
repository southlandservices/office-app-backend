'use strict';

const Joi = require('joi');
const _ = require('lodash')
const { login } = require('../utils/auth');
const { handleInitialSuccess, handleInitialFailure } = require('../utils/routeHelpers')

const routes = [];

routes.push(
  {
    method: 'POST',
    path: '/authentication',
    handler: async (req, h) => {
      const { email, password } = req.payload;
      try {
        const authenticated = await login(email, password);
        return handleInitialSuccess(h, authenticated);
      } catch (error) {
        return handleInitialFailure(h, 'Failed to authenticate');
      }
    },
    config: { 
      auth: false,
      validate: {
        payload: {
          email: Joi.string().trim().email().required(),
          password: Joi.string().trim().required()
        }
      }
    }
  }
)

module.exports = _.flattenDeep(routes);