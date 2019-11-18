import 'should'
import { fromBuffer, fromUint8, toBuffer, toUint8 } from './index'

it('should convert bit array to number', () => {
  toUint8().should.eql(0)
  toUint8(true, true, false).should.eql(0b011)
  toUint8(true, true, false, false, false, false, false, false, false).should.eql(0b0000_00011)
  toUint8(true, false, true, false, true, false, true, false).should.eql(0b0101_0101)
})

it('should convert number to bit array', () => {
  fromUint8(0).should.eql([false, false, false, false, false, false, false, false])
  fromUint8(0b011).should.eql([true, true, false, false, false, false, false, false])
  fromUint8(0b1111_1110).should.eql([false, true, true, true, true, true, true, true])
})

it('should set bits directly with DataView', () => {
  const buffer = new ArrayBuffer(1),
    view = new DataView(buffer)

  view.setBit(2, true)

  view.getBit(0).should.eql(false)
  view.getBit(2).should.eql(true)
  view.getUint8(0).should.eql(0b0000_0100)
})

it('should convert bit array to an ArrayBuffer with minimal size', () => {
  toBuffer().byteLength.should.eql(0)
  toBuffer(true, true, false).byteLength.should.eql(1)
  toBuffer(true, true, true, true, true, true, true, true, true).byteLength.should.eql(2)
})

it('should convert number to bit array', () => {
  const uint8 = 0b0011_1010,
    emptyBuffer = new Uint8Array([]).buffer,
    zeroBuffer = new Uint8Array([0]).buffer,
    buffer = new Uint8Array([uint8]).buffer

  fromBuffer(emptyBuffer).should.be.empty()
  fromBuffer(zeroBuffer).should.eql([false, false, false, false, false, false, false, false])
  fromBuffer(buffer).should.eql([false, true, false, true, true, true, false, false])
})
