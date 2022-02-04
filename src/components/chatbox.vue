<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-8 col-xl-8">
        <div class="card bg-dark overflow-auto" style="border-radius: 1rem 1rem 0px 0px; max-height: 200px;">
          <div class="card-body p-3 text-center">

            <div class="mb-md-5 mt-md-4 pb-5 text-white">
              <div class="card m-2" v-for="m in _MESSAGE" :key="m.message" style="background-color: #444548;">
                <div class="card-body p-1">
                  <div class="container">
                    <div class="row">
                      <div class="col-12" style="text-align: right;">
                        {{ m.message }}
                      </div>
                    </div>
                    <div class="row" style="font-size: 11px; color: gray; text-align: right;">
                      <div class="col-12" style="font-size: 11px; color: gray; text-align: right;">
                        {{ m.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <send/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import send from '@/components/send.vue'

export default {
  name: "chatbox",
  components: {
    send
  },

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