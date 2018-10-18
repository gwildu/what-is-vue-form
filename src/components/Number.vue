<template>
  <FormElement :id="id" label="id3 label" :hintText="validationMessage">
    <Input v-bind="$attrs" :id="id" type="number" @input="e => changed(id, e)" @blur="() => blurred(id)" @focus="() => focused(id)"/>
  </FormElement>
</template>

<script>
import { minMax } from '../common/validations'
import { formMixin, initFormElementData } from '../common/form'
import FormElement from './FormElement'
import Input from './Input'

export default {
  name: 'Number',
  components: { FormElement, Input },
  mixins: [formMixin],
  props: {
    max: {
      type: Number,
      default: Infinity,
      required: false
    },
    min: {
      type: Number,
      default: -Infinity,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      ...initFormElementData(this.id),
      [`${this.id}Validations`]: [
        minMax(this.max, this.min)
      ]
    }
  },
  computed: {
    validationMessage () {
      return this[`${this.id}ValidationMessage`]
    }
  }
}
</script>

<style scoped>

</style>
