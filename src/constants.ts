export type bit = boolean

/** Number of bits can be stored in a byte. */
export const BITS_PER_BYTE = 8

/** Number of bytes a bit takes up. */
export const BYTES_PER_ELEMENT = 1 / BITS_PER_BYTE

/**
 * The number of set bits in `BYTE_OFFSET_MASK`.
 * This is used as a shortcut instead of division with `BITS_PER_BYTE`.
 */
export const BYTE_OFFSET = 3

/**
 * A mask representing `BYTE_OFFSET` bits set.
 * @constant `BITS_PER_BYTE` - 1
 */
export const BYTE_OFFSET_MASK = 0b111
