<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyFormCase />
  </div>
</template>

<script>
import MyFormCase from './components/MyFormCase'

export default {
  name: 'app',
  components: {
    MyFormCase
  }
}
</script>

<style lang="scss">
@import './common/unscoped';
</style>
