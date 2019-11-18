import { BYTE_OFFSET, BYTE_OFFSET_MASK, bit } from './constants'

declare global {
  export interface DataView {
    setBit(offest: number, bit: bit): void
    getBit(offest: number): bit
  }
}

/** Gets a bit at an offset. */
DataView.prototype.getBit = function (offset: number): bit {
  return !!(this.getUint8(offset >> BYTE_OFFSET) & 1 << (offset & BYTE_OFFSET_MASK))
}

/** Sets a bit at an offset. */
DataView.prototype.setBit = function (offset: number, bit: bit) {
  const mask = 1 << (offset & BYTE_OFFSET_MASK),
    prev = this.getUint8(offset >> BYTE_OFFSET)
  this.setUint8(offset >> BYTE_OFFSET, bit
    ? prev | mask  // set the bit
    : prev & ~mask // clear the bit
  )
}

