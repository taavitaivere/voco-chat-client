<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-8 col-xl-8">
        <div
          class="chatbox card bg-dark overflow-auto"
          style="border-radius: 1rem 1rem 0px 0px; max-height: 400px"
        >
          <div class="card-body p-3 text-center">
            <div class="text-white">
              <div
                class="card m-2"
                v-for="m in _MESSAGE"
                :key="m.message"
                style="background-color: #444548"
              >
                <div class="card-body p-1">
                  <div class="container">
                    <div class="row">
                      <div class="col-12" style="text-align: right">
                        {{ m.message }}
                      </div>
                    </div>
                    <div
                      class="row"
                      style="font-size: 11px; color: gray; text-align: right"
                    >
                      <div
                        class="col-12"
                        style="font-size: 11px; color: gray; text-align: right"
                      >
                        {{ m.username }} | {{ m.created }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <send />
      </div>
    </div>
  </div>
</template>

<script>
// mapMutationi vaja ei ole sest on vaja vaadata ainult state ja teha API call, milleks on vaja mappida action vuex-s
import { mapGetters, mapActions } from "vuex";
import send from "@/components/send.vue";

export default {
  name: "chatbox",
  data() {
    return {
      allMessages: null,
    };
  },
  components: {
    send,
  },
  methods: {
    ...mapActions(["getMessages"]),
  },
  computed: {
    ...mapGetters({
      _MESSAGE: "_MESSAGE",
    }),
  },
  // kui componentides kasutada commit/dispatchi, siis tuleb kasutada this.$store.dispatch/commit('funktsiooni-nimi', data/payload)
  mounted() {
    this.$store.dispatch("getMessages");

    window.setInterval(() => {
      this.$store.dispatch("getMessages");
    }, 1000);
  },
};
</script>

<style lang="scss" scoped></style>
