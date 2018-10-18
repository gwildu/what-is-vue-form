<template>
  <div :class="{counter: true, exceeded: exceeded}">{{current}} / {{max}}</div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    current: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  computed: {
    exceeded () {
      return this.current > this.max
    }
  }
}
</script>

<style scoped lang="scss">
.counter {
  color: gray;
  &.exceeded {
    color: red;
  }
}
</style>
