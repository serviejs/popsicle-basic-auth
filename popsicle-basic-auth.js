/**
 * Native base 64 encoding.
 *
 * @param  {String} str
 * @return {String}
 */
var btoa = typeof window === 'object' ? window.btoa : function btoa (str) {
  return new Buffer(str).toString('base64');
};

function popsicleBasicAuth (username, password) {
  var authorization = 'Basic ' + btoa(username + ':' + password);

  return function (req) {
    req.set('Authorization', authorization);
  };
}

module.exports = popsicleBasicAuth;
