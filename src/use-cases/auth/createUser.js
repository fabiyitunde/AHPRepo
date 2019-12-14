const createUserFactory = (encryptpassword, userdb, generatetoken) => {
  return async ({ userid, username, password }) => {
    if (!userid) {
      throw new Error('You must supply an userid.')
    }
    const existingUser = await userdb.findByUserId({ userid })
    if (existingUser) throw new Error('User Id Already Exist')
    const encryptedpassword = encryptpassword(password)
    userdb.insertuser({
      userid: userid,
      username: username,
      password: encryptedpassword,
      creationdate: new Date()
    })
    const token = generatetoken({ userid: userid, username: username })
    return { token, username, userid }
  };
}

export default createUserFactory
