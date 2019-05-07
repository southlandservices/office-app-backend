'use strict'

const Hapi = require('hapi')
const config = require('config')

const routes = require('./routes')
const plugins = require('./plugins')
const logger = require('./server/utils/logger')

const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-console'
    }, 'stdout']
  }
};

exports.deployment = async () => {
  const server = new Hapi.Server({
    port: config.get('app.port'),
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Authorization'],
        exposedHeaders: ['Accept'],
        additionalExposedHeaders: ['Accept']
      }
    }
  });

  try {
    await server.register(plugins)
    server.route(routes)
  } catch (error) {
    logger.error(error, 'Failed to register hapi plugins')
    throw error
  }
  return server;
}
