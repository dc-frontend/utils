export function reduceSumByKey (arr: object[], key: string) {
  return arr.reduce((accumulator, current) => {
    // typeof null === 'object' "for legacy reasons"
    if (current === null) { return accumulator }
    if (typeof current !== 'object') { return accumulator }
    if (!Object.prototype.hasOwnProperty.call(current, key)) { return accumulator }

    return accumulator + current[key]
  }, 0)
}
