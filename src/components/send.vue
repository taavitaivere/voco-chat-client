<template>
  <input v-model="message"/><br>
  <button @click="setMessage();">Send message</button>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: "send",
  data() {
    return {
      message: null
    }
  },
  methods: {
    ...mapMutations([
      'setMessage'
    ]),

    setMessage: function() {
      console.log(this.message)
      this.$store.commit('setMessage', this.message)
    }
  }
}
</script>

<style scoped>

</style>