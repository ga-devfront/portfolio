<template>
  <main>
<Nav/>
</main>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'Portfolio',
  components: {
    Nav,
  },
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {
    initializeLang() {
      this.$store.state.language = 'fr';
    },
    getSectionName(el) {
      return el.name[this.$store.getters.lang];
    },
  },
};
</script>

<style>
body {
    background: red;
}
</style>
