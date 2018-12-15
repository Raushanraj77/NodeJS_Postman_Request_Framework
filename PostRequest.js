'use strict';
var request = require('postman-request');
module.exports = {
postRequest : function(urlRequest, parameters_json) {
request({
    method: 'POST',
    uri: urlRequest,
    form:parameters_json
},  function(err,httpResponse,body){
 
  console.log('statusCode:',  httpResponse.statusCode); 
  console.log('body:', body); 
});
    }
}
