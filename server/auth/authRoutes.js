'use strict';

const Joi = require('joi');
const _ = require('lodash')
const { login } = require('../utils/auth');

const routes = [];

routes.push(
  {
    method: 'POST',
    path: '/authentication',
    handler: async (req, h) => {
      const { email, password } = req.payload;
      return login(email, password);
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