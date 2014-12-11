var popsicle = require('popsicle');
var expect   = require('chai').expect;
var nock     = require('nock');
var auth     = require('./');

describe('popsicle basic auth', function () {
  describe('authorization header', function () {
    beforeEach(function () {
      var str = new Buffer('blakeembrey:hunter2').toString('base64');

      nock('http://example.com', {
        reqheaders: {
          'Authorization': 'Basic ' + str
        }
      })
        .get('/')
        .reply(201);
    });

    it('should set authorization header', function () {
      return popsicle('http://example.com')
        .use(auth('blakeembrey', 'hunter2'));
    });
  });
});