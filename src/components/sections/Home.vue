<template>
  <section>
    <div id="titleContainer">
    <h1>
      <p class="title" id="secondName">Guyomar</p>
      <p class="title" id="firstName">Alexis</p>
    </h1>
    <transition
      name="fadeTxt"
    >
    <h2 v-bind:key="$store.state.Txt.home.title[$store.getters.lang]">{{$store.state.Txt.home.title[$store.getters.lang]}}</h2>
    </transition>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style scoped>
</style>
