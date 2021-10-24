import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface iPayload {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if(!authToken) {
    return response.status(401).json({
      errorCode: 'token.invalid'
    })
  }

  /* 
    Bearer r809dfs9udfs980ds9fi76d6f4df8u88233sd
    [0] Bearer
    [1] r809dfs9udfs980ds9fi76d6f4df8u88233sd
  */

  const [, token] = authToken.split(' ')

  try{
    const { sub } = verify(token, process.env.JWT_SECRET) as iPayload

    request.user_id = sub

    return next()
  } catch(err) {
    return response.status(401).json({ errorCode: 'token.expired' })
  }
}