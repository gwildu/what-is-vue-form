<template>
  <FormElement :id="id" :label="label" :hintText="validationMessage">
    <Input v-bind="$attrs" :id="id" @input="e => changed(id, e)" @blur="() => blurred(id)" @focus="() => focused(id)"/>
    <Counter slot="hint" :max="maxLength" :current="currentLength" v-if="showCounterInternal"/>
  </FormElement>
</template>

<script>
import { formMixin, initFormElementData } from '../common/form'
import FormElement from './framework/FormElement'
import Input from './framework/Input'

export default {
  name: 'Text',
  components: { FormElement, Input },
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    maxLength: {
      type: Number,
      required: false,
      default: Infinity
    },
    showCounter: {
      type: Boolean,
      required: false,
      default: false
    },
    showCounterWhenAsCloseAs: {
      type: Number,
      required: false,
      default: 5
    },
    validations: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      ...initFormElementData(this.id),
      [`${this.id}Validations`]: this.validations
    }
  },
  computed: {
    validationMessage () {
      return this[`${this.id}ValidationMessage`]
    },
    showCounterInternal () {
      return this.showCounter && (this[`${this.id}Focused`] && this.maxLength - this[`${this.id}Length`] < this.showCounterWhenAsCloseAs)
    },
    currentLength () {
      return this[`${this.id}Length`]
    }
  }
}
</script>

<style scoped>

</style>
