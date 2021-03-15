<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ $store.state.counter }}</h1>
    <br />
    <br />
    <div>
      {{ $store.state.counter }}
      <sup>2</sup>
      =
      {{ $store.getters.counterSquared }}
    </div>

    <p>
      <button v-on:click="$store.commit('increaseCounter')">
        + Add The Counter
      </button>
      <br />
      <br />

      <button v-on:click="$store.commit('decreaseCounter')">
        - Subtract The Counter
      </button>
    </p>
    <p></p>
    <button v-on:click="$store.dispatch('increaseCounter')">
      + Add The Counter ny Actions
    </button>

    <br />
    <br />

    <button v-on:click="$store.dispatch('decreaseCounter')">
      - Subtract The Counter by Actions
    </button>

    <br />
    <br />
    <br />
    <br />

    <div>
      <h1>{{ $store.state.colorCode }}</h1>

      <input v-model="colorCode" type="text" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

// @ is an alias to /src
export default {
  name: "Home",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.commit("setColorCode", newValue);
      },
    },
  },

  setup(props) {
    const store = useStore();

    store.commit("checkFun");
  },
};
</script>
