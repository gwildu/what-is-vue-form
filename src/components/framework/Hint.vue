<template>
  <div v-if="hint">{{ hint }}</div>
</template>

<script>
export default {
  name: 'Hint',
  props: {
    hint: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
