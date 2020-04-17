<template>
  <main>
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
      scroll: 0,
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
    testWheel(event) {
      const { deltaY } = event;
      this.scroll += deltaY;
      if (this.scroll === 300) {
        this.nextSection();
        this.scroll = 0;
      }
      if (this.scroll === -300) {
        this.prevSection();
        this.scroll = 0;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.displayWindowSize);
    this.displayWindowSize();
  },
  mounted() {
    const container = document.querySelector('body');
    container.onwheel = this.testWheel;
  },
};
</script>

<style>
@font-face {
  font-family: "Aquawax";
  src: url('../../public/Aquawax-Pro-DemiBold.ttf')
}

html {
  padding: 0px;
  margin: 0px;
}

main {
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  height: 100vh;
}

body {
    overflow: hidden;
    padding: 0px;
    margin: 0px;
    background: red;
    font-family: Arial, 'Courier New', Courier, monospace;
}
</style>
