import { bit } from './constants'

/** Converts a bit array to an 8bit int. */
export default (...bits: bit[]) =>
  bits.reduce((prev, current, index) => current
    ? prev | 1 << index
    : prev, 0)
