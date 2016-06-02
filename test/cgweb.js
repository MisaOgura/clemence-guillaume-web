var expect = require('chai').expect;
var CGWeb = require('../app/cgweb.js');

describe('CGWeb', function() {
  describe('#testFunc()', function() {
    it('should return a message', function() {
      var cgweb = new CGWeb();
      expect(cgweb.testFunc()).to.equal('mocha working');
    });
  });
});
