<template>
    <div class="inputContainer">
      <input v-bind="$attrs" @input="onInput" @focus="focused = true" @blur="focused = false"/>
    </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  data () {
    return {
      focused: false
    }
  },
  methods: {
    onInput (e) {
      if (!this.focused) {
        this.onUpDownClick(e)
      }
      this.$emit('input', e)
    },
    onUpDownClick (e) {
      this.$emit('blur', e)
    }
  }
}
</script>

<style scoped>

</style>
