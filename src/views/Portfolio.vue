<template>
  <main>
<Nav v-if="screenWidth > 1080"/>
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
      screenWidth: 0,
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
    displayWindowSize() {
      this.screenWidth = document.documentElement.clientWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.displayWindowSize);
    this.displayWindowSize();
  },
};
</script>

<style>
@font-face {
  font-family: "Aquawax";
  src: url('../../public/Aquawax-Pro-DemiBold.ttf')
}

body {
    background: red;
    font-family: Arial, 'Courier New', Courier, monospace;
}
</style>
