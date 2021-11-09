
const defaultAlg = 'ES256K'
const DID_JSON = ''

export interface JWTHeader {
  typ: 'JWT'
  alg: string
}

// issuer, subject, audience, issued at, Not Before, expiration
export interface JWTPayload {
  iss?: string              
  sub?: string
  aud?: string | string[]
  iat?: number
  nbf?: number
  exp?: number
  
}

// JWTSigniture is JWS = encode JWT header + payload
export interface JWTSigniture {
  siginture: string
}



export async function createJWT(
  header: Partial<JWTHeader>,
  payload: Partial<JWTPayload>

  
): Promise<string> {

  return createJWS
}