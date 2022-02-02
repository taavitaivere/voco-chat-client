<template>

 <br>
  <login v-if="_STATE == 0"/><br>
  <chatbox v-if="_STATE == 1"/><br>
  <send v-if="_STATE == 1"/><br>
</template>
<script>

import login from '@/components/login.vue'
import chatbox from '@/components/chatbox.vue'
import send from '@/components/send.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    login,
    chatbox,
    send
  },
  computed: {
    ...mapGetters({
      _STATE: '_STATE',
      _NAME: '_NAME'
    })
  }
}
</script>
<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>