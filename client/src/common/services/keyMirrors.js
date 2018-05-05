export function keyMirror(keys, namespace) {
  const mirror = {}

  Object.keys(keys).forEach(key => {
    mirror[key] = namespace ? `${namespace}@${key}` : key
  })

  return mirror
}
