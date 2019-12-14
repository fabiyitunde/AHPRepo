export default function postAuthenticateUserFactory ({ authenticateUser }) {
    return async function postAuthenticateUser (httpRequest) {
      try {
        const { userid, password } = httpRequest.body
  
        const tokenandinfo = await authenticateUser({
          userid,         
          password
        })
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
          body: tokenandinfo
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
  