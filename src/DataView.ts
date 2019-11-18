import { X, Y, bit } from './constants'

declare global {
  export interface DataView {
    setBit(offest: number, bit: bit): void
    getBit(offest: number): boolean
  }
}

/** Gets a bit at an offset. */
DataView.prototype.getBit = function (offset: number): bit {
  return !!(this.getUint8(offset >> X) & 1 << (offset & Y))
}

/** Sets a bit at an offset. */
DataView.prototype.setBit = function (offset: number, bit: bit) {
  const mask = 1 << (offset & Y),
    prev = this.getUint8(offset >> X)
  this.setUint8(offset >> X, bit
    ? prev | mask  // set the bit
    : prev & ~mask // clear the bit
  )
}

