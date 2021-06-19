export {}
const hasValue = require('./misc').hasValue

describe('hasValue', () => {
  test('it returns true for number', () => {
    const number = 123
    expect(hasValue(number)).toEqual(true)
  })

  test('it returns true for string', () => {
    const string = '123'
    expect(hasValue(string)).toEqual(true)
  })

  test('it returns true for float', () => {
    const float = 123.45
    expect(hasValue(float)).toEqual(true)
  })

  test('it returns true for empty object', () => {
    const obj = {}
    expect(hasValue(obj)).toEqual(true)
  })

  test('it returns false when null', () => {
    const val = null
    expect(hasValue(val)).toEqual(false)
  })

  test('it returns false when undefined', () => {
    const val = undefined
    expect(hasValue(val)).toEqual(false)
  })
})
