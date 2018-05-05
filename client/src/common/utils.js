import { MAX_LENGTH, MIN_LENGTH } from './constants'

const validateTextLength = text => {
  if (text.length < MIN_LENGTH)
    return `Must be ${MIN_LENGTH} characters or more`
  if (text.length > MAX_LENGTH)
    return `Must be ${MAX_LENGTH} characters or less`
}

export const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  } else {
    errors.title = validateTextLength(values.title)
  }

  if (!values.description) {
    errors.description = 'Required'
  } else {
    errors.description = validateTextLength(values.description)
  }

  return errors
}
