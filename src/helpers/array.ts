export function reduceSumByKey (arr: object[], key: string, asFloat: boolean = true) {
  return arr.reduce((accumulator, current) => {
    // typeof null === 'object' "for legacy reasons"
    if (current === null) { return accumulator }
    if (typeof current !== 'object') { return accumulator }
    if (!Object.prototype.hasOwnProperty.call(current, key)) { return accumulator }

    let value = current[key]

    if (typeof value !== 'number') {
      const parser = asFloat === true ? parseFloat : parseInt
      value = parser(value)
    }

    return accumulator + value
  }, 0)
}
