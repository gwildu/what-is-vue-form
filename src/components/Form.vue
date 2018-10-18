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
      console.log(typeof e.target.elements)
      this.$emit('submit', { e, values: Object.keys(e.target.elements).reduce((previous, current, key => e.target.elements[key].value) })
    }
  }
}
</script>

<style scoped></style>
