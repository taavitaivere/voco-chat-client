<template>
  <section class="vh-100 gradient-custom">
    <login v-if="_STATE == 0"/>
    <chatbox v-if="_STATE == 1"/>
  </section>
</template>
<script>

import login from '@/components/login.vue'
import chatbox from '@/components/chatbox.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    login,
    chatbox
  },
  computed: {
    ...mapGetters({
      _STATE: '_STATE',
      _NAME: '_NAME'
    })
  }
}
</script>
<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}



</style>