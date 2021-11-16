// convert data into canonical(standard or normal) format
import canonicalizeData from 'canonicalize'

import { decodeBase64url, encodeBase64url } from './util'


const defaultAlg = 'ES256K'
const getVC = await createVC(header, payload)

export type getVC = string
export type publicKey = string
export type rawData = string

export interface JWTHeader {
  typ: 'JWT'
  alg: string
}
  
  
// issuer, subject, audience, issued at, Not Before, expiration
export interface JWTPayload {
  title?: string              
  sub?: string
  data?: string //encrypt data
}


// export async function createJWT(
//   header: Partial<JWTHeader>,
//   payload: Partial<JWTPayload>,
     
// ): Promise<string> {
  
//   return createVC(header, payload)
// }


// output => aaa.bbb.ccc
export async function createVC(
    header: Partial<JWTHeader>,
    payload: string | Partial<JWTPayload>,

): Promise<string> {
    if (!header.alg) header.alg = defaultAlg
    const encodedPayload = typeof payload === 'string' ? payload : encodeSection(payload)
    const endcodedHeader: string = [encodeSection(header), encodedPayload].join('.')
  
    return [endcodedHeader, encodedPayload].join('.')
}



export async function createVP(
    VC: getVC,
    pubKey: publicKey,
    rawData: string,

): Promise<string> {
    
  return [VC, rawData, pubKey].join('.')
}


function encodeSection(data: any, shouldCanonicalize = false): string {
    if (shouldCanonicalize) {
      return encodeBase64url(<string>canonicalizeData(data))
    } else {
      return encodeBase64url(JSON.stringify(data))
    }
  }

