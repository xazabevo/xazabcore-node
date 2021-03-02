'use strict';

var createError = require('errno').create;

var XazabcoreNodeError = createError('XazabcoreNodeError');

var RPCError = createError('RPCError', XazabcoreNodeError);

module.exports = {
  Error: XazabcoreNodeError,
  RPCError: RPCError
};
