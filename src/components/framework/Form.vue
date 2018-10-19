<template>
  <form @submit.prevent="submit">
    <slot />
    <input type="submit" value="submit">
  </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    submit (e) {
      const { elements } = e.target
      const values = Object.keys(elements).reduce((previous, key) => {
        const potentialElement = elements[key]
        const { id, value } = potentialElement
        const current = Number.isNaN(+key) || (value === 'submit') ? {} : { [`${id}`]: value }
        return { ...previous, ...current }
      }, {})
      this.$emit('submit', {
        e,
        values
      })
    }
  }
}
</script>

<style scoped></style>
