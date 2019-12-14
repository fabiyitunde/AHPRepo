var jwt = require('jsonwebtoken')
const key = '56HJK345';
export const generateToken = obj => {
  var token = jwt.sign(obj, key)
  return token
};
