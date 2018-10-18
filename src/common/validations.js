export const validateAll = (validations, value) => {
  const result = validations.reduce((message, validation) => {
    return message || validation(value)
  }, '')
  return result
}

export const required = (message) => value => {
  const isValid = Boolean(value) && (value.trim() !== '')
  return isValid ? '' : (message || 'Please enter some value for this field.')
}

export const minMax = (
  max = Infinity,
  min = -Infinity,
  message = (max, min) => (max !== Infinity & min !== -Infinity ? `The value of this field must be between ${min} and ${max}` : min === -Infinity ? `The value of this field must be below ${max}` : `The value of this field must be above ${min}`)
) => value => {
  const isValid = value >= min && value <= max
  return isValid ? '' : typeof message === 'function' ? message(max, min) : message
}

export const min = (message, min) => minMax(Infinity, min, message)
export const max = (max, message) => minMax(max, -Infinity, message)

export const maxLength = (
  max = Infinity,
  message = max => `The value of this field must not be longer then ${max} characters`
) => value => {
  const isValid = value.length <= max
  return isValid ? '' : typeof message === 'function' ? message(max) : message
}
