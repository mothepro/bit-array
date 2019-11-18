import fromUint8 from './fromUint8'
import { bit } from './constants'

/**
 * Converts an Array Buffer to a list of bits.
 * The list of bits will always be a multiple of 8.
 */
export default (buffer: ArrayBuffer): bit[] =>
  [...new Uint8Array(buffer)].flatMap(fromUint8)
