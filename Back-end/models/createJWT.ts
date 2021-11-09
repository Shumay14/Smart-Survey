
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

  const timestamps: Partial<JWTPayload> = {
    iat: Math.floor(Date.now() / 1000),
    exp: undefined,
  }
  const fullPayload = { timestamps, payload, iss: issuer }
  return createJWS(fullPayload, signer, header)
}

export interface JWTDecoded {
  header: JWTHeader
  payload: JWTPayload
  signature: string
  data: string
}

export function decodeJWT(jwt: string): JWTDecoded {
  if (!jwt) throw new Error('invalid_argument: no JWT passed into decodeJWT')
  try {
    const jws = decodeJWS(jwt)
    const decodedJwt: JWTDecoded = Object.assign(jws, { payload: JSON.parse(decodeBase64url(jws.payload)) })
    return decodedJwt
  } catch (error) {
    throw new Error('invalid_argument: Incorrect format JWT')
  }
}