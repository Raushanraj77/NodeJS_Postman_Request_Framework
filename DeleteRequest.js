'use strict';
var request = require('postman-request');
module.exports = {
deleteRequest : function(urlRequest) {
request({
    method: 'DELETE',
    uri: urlRequest},  function(err,httpResponse,body){
 
  console.log('statusCode:',  httpResponse.statusCode); 
 
});
    }
}
