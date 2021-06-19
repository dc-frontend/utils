export function hasProp (obj: object, prop: string) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
