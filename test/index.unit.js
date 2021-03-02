'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export xazabcore-lib', function() {
    var xazabcore = require('../');
    should.exist(xazabcore.lib);
    should.exist(xazabcore.lib.Transaction);
    should.exist(xazabcore.lib.Block);
  });
});
