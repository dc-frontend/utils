export function hasValue (val: any) {
  if (val === null) { return false }
  if (typeof val === 'undefined') { return false }
  return true
}
