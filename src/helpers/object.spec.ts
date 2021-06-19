export {}
const hasProp = require('./object').hasProp

// import { hasProp } from './object'

describe('hasProp', () => {
  test('hasProp returns true when a property exists', () => {
    const testObject = { propExists: true }
    expect(hasProp(testObject, 'propExists')).toBe(true)
  })

  test('hasProp returns false when a property does not exist', () => {
    const testObject = { propExists: true }
    expect(hasProp(testObject, 'propNotExist')).toBe(false)
  })
})
