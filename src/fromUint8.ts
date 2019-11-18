import { BITS_PER_BYTE, bit } from './constants'

/** 
 * Converts an 8bit int to a bit array.
 * The returned array is always of size 8.
 */
export default (num: number) =>
  [...new Array(BITS_PER_BYTE)]
    .map((_, index) => !!(num & 1 << index)) as [bit, bit, bit, bit, bit, bit, bit, bit]
