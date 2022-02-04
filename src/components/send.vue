<template>
  <div class="view send">

  <input type="text" v-model="message"/>
  <input type="submit" @click="setMessage();"/>

  </div>
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

<style lang="scss" scoped>
.view {
  border-radius: 0px 0px 24px 24px;
  position: sticky;
  bottom: 0px;
  background-color: #807e7e;
  padding: 30px;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  form {
    display: flex;
    input[type="text"] {
      flex: 1 1 100%;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px 0px 0px 8px;
      color: #ffffff;

      color: #333;
      font-size: 18px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      background-color: #F3F3F3;
      transition: 0.4s;
      &::placeholder {
        color: #888;
        transition: 0.4s;
      }
    }

    input[type="submit"] {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      padding: 10px 15px;
      border-radius: 0px 8px 8px 0px;
      background-color: #ea526f;
      color: #FFF;
      font-size: 18px;
      font-weight: 700;
    }
  }
}

</style>