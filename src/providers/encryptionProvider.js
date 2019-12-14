var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)
export const encryptpassword = inputstring => {
  var hash = bcrypt.hashSync(inputstring, salt)
  return hash
};

export const comparepasswords = (password, hashedpassword) => {
  return bcrypt.compareSync(password, hashedpassword)
};
