<template>
  <main :style="{ width: screenWidth, height: screenHeight }">
<NavDesktop v-if="screenSize.screenWidth > 1080"/>
<NavMobile v-if="screenSize.screenWidth <= 1080"/>
</main>
</template>

<script>
import NavDesktop from '../components/NavDesktop.vue';
import NavMobile from '../components/NavMobile.vue';

export default {
  name: 'Portfolio',
  components: {
    NavDesktop,
    NavMobile,
  },
  data() {
    return {
      screenSize: {
        screenWidth: 0,
        screenHeight: 0,
      },
    };
  },
  computed: {
  },
  methods: {
    prevSection() {
      const prevPos = this.$store.getters.currentPosition - 1;
      if (prevPos < 0) return;
      const futureSection = Object.values(this.$store.state.Router.sections)[prevPos];
      this.$store.commit('setSection', futureSection);
    },
    nextSection() {
      const nextPos = this.$store.getters.currentPosition + 1;
      if (nextPos >= this.$store.getters.sectionCount) return;
      const futureSection = Object.values(this.$store.state.Router.sections)[nextPos];
      this.$store.commit('setSection', futureSection);
    },
    initializeLang() {
      this.$store.state.language = 'fr';
    },
    getSectionName(el) {
      return el.name[this.$store.getters.lang];
    },
    displayWindowSize() {
      this.screenSize.screenHeight = document.documentElement.clientHeight;
      this.screenSize.screenWidth = document.documentElement.clientWidth;
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

main {
  overflow: hidden;
}

body {
    background: red;
    font-family: Arial, 'Courier New', Courier, monospace;
}
</style>
