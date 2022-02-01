<template>

  <h2>{{ _NAME }}</h2><br>
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