'use strict';
var request = require('postman-request');
module.exports = {
getRequest : function(urlRequest) {
 request.get('http://restapi.demoqa.com/utilities/weather/city/Pune', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});
    }
}
