<template>
  <section class="chat-box">
  <div class="message-inner">
    <h2>VOCO CHATBOX</h2>
  <div v-for="m in _MESSAGE" :key="m.message" class="content">
    {{ m.message }}<br>
    nimi: {{ m.name }}
  </div>
  </div>
  </section>
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

<style lang="scss" scoped>
.chat-box {
  border-radius: 24px 24px 0px 0px;
  background-color: #FFF;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  flex: 1 1 100%;
  padding: 30px;
.message {
  display: flex;
  margin-bottom: 15px;

.message-inner {
.username {
  color: #888;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.content {
  display: inline-block;
  padding: 10px 20px;
  background-color: #F3F3F3;
  border-radius: 999px;
  color: #333;
  font-size: 18px;
  line-height: 1.2em;
  text-align: left;
}
}
&.current-user {
   margin-top: 30px;
   justify-content: flex-end;
   text-align: right;
.message-inner {
  max-width: 75%;
.content {
  color: #FFF;
  font-weight: 600;
  background-color: #ea526f;
}
}
}
}
}
</style>