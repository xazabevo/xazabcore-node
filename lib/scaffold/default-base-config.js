'use strict';

var path = require('path');

/**
 * Will return the path and default xazabcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to Xazab database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }

  var datadir = options.datadir || path.resolve(process.env.HOME, '.xazab');

  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['xazabd', 'web'],
      servicesConfig: {
        xazabd: {
          spawn: {
            datadir: datadir,
            exec: path.resolve(__dirname, datadir, 'xazabd')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
