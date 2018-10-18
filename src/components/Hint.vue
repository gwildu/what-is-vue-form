<template>
    <div v-if="hint">{{hint}}</div>
</template>

<script>
export default {
  name: 'Hint',
  props: {
    hint: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
