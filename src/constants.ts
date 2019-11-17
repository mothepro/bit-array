export type bit = boolean

/** Number of booleans can be stored in a byte. */
export const BITS_PER_BYTE = 8

/** Number of bytes a bit takes up. */
export const BYTES_PER_ELEMENT = 1 / BITS_PER_BYTE

/** The number of bits that represent the boolean offset within a byte. */
export const X = 3

/** A mask representing `X` bits set. */
export const Y = 0b111
