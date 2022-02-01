<template>
  <input v-model="name"/>
  <button @click="formName();">SAADA</button>
  send kompott: {{ name }}
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: "login",
  data() {
    return {
      name: null,
    }
  },
  methods: {
    ...mapMutations([
      'setName',
      'setState'
    ]),


    formName: function() {
      console.log(this.name)
      this.$store.commit('setName', this.name)
      this.$store.commit('setState', 1)
    }
  }
}
</script>

<style scoped>

</style>