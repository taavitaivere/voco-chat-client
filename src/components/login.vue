<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Login as {{ name }}</h2>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="setName"
                  v-model="v$.name.$model"
                  class="form-control form-control-lg"
                />
              </div>
              <button
                class="btn btn-outline-light btn-lg px-5"
                type="submit"
                @click="formName()"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "login",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: null,
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3), maxLength: maxLength(30) },
    };
  },
  methods: {
    // eslint-disable-next-line prettier/prettier
    ...mapMutations([
      "setName",
      "setState"
    ]),
    formName: function () {
      console.log(this.name);
      this.$store.commit("setName", this.name);
      this.$store.commit("setState", 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
