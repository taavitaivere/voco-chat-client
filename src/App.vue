<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Login></Login>
  <SendMessage></SendMessage>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "@/components/Login";
import SendMessage from "@/components/SendMessage";
export default {
  name: "App",
  components: {
    SendMessage,
    Login,
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
