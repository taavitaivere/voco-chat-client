<template>
  <div class="card" style="border-radius: 0rem 0rem 1rem 1rem">
    <div class="card-body" style="padding: 0px">
      <div class="row">
        <div
          class="col-2"
          style="
            border-right: 1px solid black;
            padding: 15px;
            text-align: center;">
          {{ _NAME }}
        </div>
        <div class="col-10" style="padding: 15px">
          <input type="text" v-model="message" />
        </div>
      </div>
    </div>
  </div>
  <div style="text-align: right; padding-top: 10px">
    <button
      type="button"
      class="btn btn-outline-light"
      style="padding-right: 2em; padding-left: 2em"
      @click="setMessage()"
    >
      Send
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "send",
  data() {
    return {
      message: null,
    };
  },
  methods: {
    ...mapMutations([
      "setMessage"
    ]),

    setMessage: function () {
      console.log(this.message);
      this.$store.commit("setMessage", this.message);
    },
  },

  computed: {
    ...mapGetters([
      "_NAME"
    ])
  },
};
</script>
