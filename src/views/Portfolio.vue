<template>
  <main>
<Nav
:currentSection="currentSection"
:currentSectionName="currentSectionName"
/>
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
    currentSectionKey() {
      return this.$store.state.Router.sectionMapper[window.location.pathname];
    },
    currentSection() {
      return this.$store.state.Router.sections[this.currentSectionKey];
    },
    currentSectionName() {
      return this.getSectionName(this.currentSection);
    },
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
