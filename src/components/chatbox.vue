<template>
  <h2>CHATBOX</h2>
  <div v-for="m in _MESSAGE" :key="m.message" class="messageStyle">
    {{ m.message }}<br>
    nimi: {{ m.name }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "chatbox",

  computed: {
    ...mapGetters({
      _MESSAGE: '_MESSAGE'
    })
  }
}
</script>

<style scoped>
.messageStyle {
  padding: 5px;
  margin: 5px;
  background-color: darkgray;
  color: white;
}
</style>