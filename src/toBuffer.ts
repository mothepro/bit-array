import './DataView'
import { BYTE_OFFSET, bit } from './constants'

// Could be optimized??
// for (let i = 0; i < bits.length; i += BITS_PER_BYTE)
//   view.setUint8(
//     i / BITS_PER_BYTE,
//     toUint8(bits.slice(i, i + BITS_PER_BYTE - 1)))

/** Converts a list of bits to an ArrayBuffer. */
export default function (...bits: bit[]): ArrayBuffer {
  if (!bits.length)
    return new ArrayBuffer(0)
  
  const view = new DataView(new ArrayBuffer(1 + (bits.length >> BYTE_OFFSET)))

  let i = 0
  for (const bit of bits)
    view.setBit(i++, bit)
  
  return view.buffer
}
