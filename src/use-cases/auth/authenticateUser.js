const authenticateUserFactory = (comparepasswords, userdb, generatetoken) => {
  return async ({ userid, password }) => {
    if (!userid) {
      throw new Error('You must supply userid.')
    }
    const existingUser = await userdb.findByUserId({ userid })
    if (!existingUser) throw new Error('User Id Does Not Exist')
    const isvalidPassword = comparepasswords(password, existingUser.password)
    if (!isvalidPassword) throw new Error('Invalid Password')

    const token = generatetoken({
      userid: userid,
      username: existingUser.username
    })
    const username = existingUser.username
    return { token, username, userid }
  };
}

export default authenticateUserFactory
