<template>
  <div>
    <label
      :for="id"
      v-if="label">{{ label }}</label>
    <div>
      <slot/>
      <slot name="hint">
        <div
          v-if="hintText"
          :class="`emphasis-${hintEmphasis}`">
          {{ hintText }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { EMPHASIS } from '../../common/index'

export default {
  name: 'FormElement',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    hintText: {
      type: String,
      default: ''
    },
    hintEmphasis: {
      type: String,
      validator: function (value) {
        return (EMPHASIS.indexOf(value) !== -1)
      },
      default: 'danger'
    }
  }
}
</script>

<style lang="scss">
</style>
