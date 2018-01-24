// eslint-disable-next-line no-restricted-globals
const getNumber = value => (isNaN(value) ? null : parseInt(value, 10))
const getString = value => (typeof value === 'string' ? value : '')

const memoize = (fn) => {
  const cache = {}

  return (...args) => {
    const key = JSON.stringify(args)

    cache[key] = cache[key] || fn(...args)

    return cache[key]
  }
}

export const required = memoize(() => value => (getString(value).trim() ? undefined : 'Required field'))

export const length = memoize((options = {}) => {
  let {
    min = undefined,
    max = undefined,
    exact = undefined,
  } = options

  min = getNumber(min)
  max = getNumber(max)
  exact = getNumber(exact)

  return (value) => {
    if (!value) { return undefined }

    if (exact !== null && value.length !== exact) {
      return `Wrong length. Should be ${exact} characters long.`
    }

    if (max !== null && value.length > max) {
      return `Wrong length. Should be less than ${max} characters long.`
    }

    if (min !== null && value.length < min) {
      return `Wrong length. Should be longer than ${min} characters long.`
    }

    return undefined
  }
})

export const makeValidate = validations => (values) => {
  const errors = {}

  Object.keys(validations).forEach((field) => {
    const value = values.get(field)

    errors[field] = validations[field]
      .map(validate => validate(value, values))
      .find(error => error)
  })

  return errors
}
