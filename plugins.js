'use strict'

/**
 * Vendor modules
 */
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const Good = require('good')
const config = require('config')

/**
 * Internal modules
 */
const Package = require('./package.json')

const DEVELOPMENT = 'development'

/**
 * exports array of plugins with configuration.
 * @type {Array}
 */
let plugins = []

if (config.util.getEnv('NODE_ENV') === DEVELOPMENT) {

//   // add hapi swagger integration
  plugins = plugins.concat([Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          'title': Package.description,
          'version': Package.version
        },
        pathPrefixSize: 4
      }
    }])

  // add good console for log reporting
  plugins.push({
    plugin: Good,
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        console: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  })
}

module.exports = plugins
