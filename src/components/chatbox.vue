<template>
  <div class="view chat">
    <div class="chat-box">
      <h2>VOCO CHATBOX</h2>
        <div class="message-inner">
          <div v-for="m in _MESSAGE" :key="m.message" class="content">
          <h3>{{ m.message }}</h3>
          <h3>nimi: {{ m.name }}</h3>
          </div>
        </div>
    </div>
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

<style lang="scss" scoped>
h3{
  color: #fff;
  }
.chat-box {
  border-radius: 24px 24px 0px 0px;
  background-color: #000000;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  flex: 1 1 100%;
  padding: 30px;
.message {
  display: flex;
  margin-bottom: 15px;

.message-inner {

.content {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 999px;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.2em;
  text-align: left;
}
}

.message-inner {
  max-width: 75%;

}
}
}

</style>