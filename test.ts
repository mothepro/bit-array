import 'should'
import './src/DataView'
import toUint8 from './src/toUint8'
import fromUint8 from './src/fromUint8'

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
