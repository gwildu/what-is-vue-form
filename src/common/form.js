import { validateAll } from './validations'
export const formMixin = {
  methods: {
    validate (id, value) {
      const validationMessage = validateAll(this[`${id}Validations`], value)
      this[`${id}ValidationMessage`] = validationMessage
    },
    blurred (id) {
      this[`${id}Touched`] = true
      this.validate(id, this[`${id}Value`])
      this[`${id}Focused`] = false
      console.log('blur')
    },
    changed (id, e) {
      const value = e.target.value
      this[`${id}Value`] = value
      this[`${id}Length`] = value.length
      if (this[`${id}Touched`]) {
        this.validate(id, value)
      }
    },
    focused (id) {
      this[`${id}Focused`] = true
      console.log('focused')
    }
  }
}

export const initFormElementData = id => ({
  [`${id}Touched`]: false,
  [`${id}Value`]: '',
  [`${id}ValidationMessage`]: '',
  [`${id}Length`]: 0,
  [`${id}Focused`]: false
})
