export default function postCreateUserFactory ({ createUser }) {
  return async function postCreateUser (httpRequest) {
    try {
      const { userid, username, password } = httpRequest.body

      const tokenandinfo = await createUser({
        userid,
        username,
        password
      })
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        body: tokenandinfo
      }
    } catch (e) {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
