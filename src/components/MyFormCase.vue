<template>
  <div>
    <Form @submit="submit">
      <FormElement id="id1" label="id1 label" :hintText="id1ValidationMessage" >
        <Input id="id1" type="number" @blur="() => blurred('id1')" @input="e => changed('id1', e)" @focus="() => focused('id1')" />
      </FormElement>
      <FormElement id="id2" label="id2 label" :hintText="id2ValidationMessage" >
        <input id="id2" type="text" @blur="() => blurred('id2')" @input="e => changed('id2', e)" @focus="() => focused('id2')" />
        <Counter slot="hint" :max="MAX" :current="id2Length" v-if="showCounter"/>
      </FormElement>
      <Number id="id3" :min="-10" :max="10" />
    </Form>
  </div>
</template>

<script>
import Form from './Form'
import FormElement from './FormElement'
import Counter from './Counter'
import Input from './Input'
import { required, max, maxLength } from '../common/validations'
import { formMixin, initFormElementData } from '../common/form'
import Number from './Number'

const MAX = 10

export default {
  name: 'myFormCase',
  components: { Number, Form, FormElement, Counter, Input },
  mixins: [formMixin],
  data () {
    return {
      ...initFormElementData('id1'),
      ...initFormElementData('id2'),
      id1Validations: [
        required(),
        max(MAX)
      ],
      id2Validations: [
        required(),
        maxLength(MAX)
      ],
      MAX
    }
  },
  computed: {
    showCounter () {
      return this.id2Focused && MAX - this.id2Length < 5
    }
  },
  methods: {
    submit (e) {
      console.log({ values: e.values })
    }
  }
}
</script>

<style scoped>

</style>
