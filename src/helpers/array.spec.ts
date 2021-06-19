export {}
const reduceSumByKey = require('./array').reduceSumByKey

describe('reduceSumByKey', () => {
  test('it returns the expected value when all keys exist', () => {
    const testArray = [ { a: 1 }, { a: 2 }, { a: 3 } ]
    expect(reduceSumByKey(testArray, 'a')).toEqual(6)
  })

  test('if any elements are null or undefined it should return the remaining sum', () => {
    const testArray = [ { a: 2 }, { a: 4 }, { a: 4 }, null, undefined ]
    expect(reduceSumByKey(testArray, 'a')).toEqual(10)
  })
})
