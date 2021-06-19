export {}
const reduceSumByKey = require('./array').reduceSumByKey

describe('reduceSumByKey', () => {
  test('it returns the expected value when all keys exist', () => {
    const testArray = [ { a: 1 }, { a: 2 }, { a: 3 } ]
    expect(reduceSumByKey(testArray, 'a')).toEqual(6)
  })

  test('it will parseFloats if asFloat is true (default)', () => {
    const testArray = [ { a: 1.5 }, { a: 1.5 }, { a: 2 } ]
    const result = reduceSumByKey(testArray, 'a')
    expect(result).toEqual(5)
    expect(typeof result).toEqual('number')
  })

  test('it will parseInts if asFloat is false and objects are not already numbers', () => {
    const testArray = [ { a: "1.4" }, { a: "1.4" }, { a: 2 } ]
    const result = reduceSumByKey(testArray, 'a', false)
    expect(result).toEqual(4)
    expect(typeof result).toEqual('number')
  })

  test('if any elements are null or undefined it should return the remaining sum', () => {
    const testArray = [ { a: 2 }, { a: 4 }, { a: 4 }, null, undefined ]
    expect(reduceSumByKey(testArray, 'a')).toEqual(10)
  })
})
