var data = require('./Data.json');
var postman_request_get = require('./GetRequest.js');
describe('Test Get Request', function() {
    it('send a request to weather web service', function() {
     postman_request_get.getRequest(data.Request_Get);
    });
  });