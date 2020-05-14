<template>
  <main id="scrollSections">
    <div id="background" :style="$store.getters.currentSection.background"></div>
    <transition-group
    name="fadeSection"
    mode="in-out"
    >
      <section
      :is="section.component"
      v-for="section in $store.state.Router.sections"
      v-if="isCurrentSection(section)"
      :next="nextP"
      :prev="prevP"
      v-on:stopNext="stopNextP()"
      v-on:stopPrev="stopPrevP()"
      :key="section.name.en"
      />
    </transition-group>
    <NavDesktop v-if="screenSize.screenWidth > 1080 && mobile === false"/>
    <NavMobile v-if="screenSize.screenWidth <= 1080 || mobile === true"/>
  </main>
</template>

<script>
import ScrollListener from 'scroll-event-handler';
import { isMobile } from 'mobile-device-detect';
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
      mobile: isMobile,
      background: this.$store.state.Router,
      scrollListener: null,
      nextP: false,
      prevP: false,
    };
  },
  methods: {
    stopNextP() {
      this.nextP = false;
    },
    stopPrevP() {
      this.prevP = false;
    },
    isCurrentSection(section) {
      return this.$store.getters.getSectionName(section) === this.$store.getters.currentSectionName;
    },
    prevSection() {
      const prevPos = this.$store.getters.currentPosition - 1;
      if (prevPos < 0) return;
      const futureSection = Object.values(this.$store.state.Router.sections)[prevPos];
      this.$store.commit('setSection', futureSection);
      this.ProjectsChangeListener();
    },
    nextSection() {
      const nextPos = this.$store.getters.currentPosition + 1;
      if (nextPos >= this.$store.getters.sectionCount) return;
      const futureSection = Object.values(this.$store.state.Router.sections)[nextPos];
      this.$store.commit('setSection', futureSection);
      this.ProjectsChangeListener();
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
    ProjectsChangeListener() {
      if (this.$store.getters.currentSection === this.$store.state.Router.sections.projects) {
        this.scrollListener.changeSettings({
          scroll: {
            x: {
              next: {
                callback: () => { this.nextP = true; },
              },
              prev: {
                callback: () => { this.prevP = true; },
              },
            },
          },
          touch: {
            x: {
              next: {
                callback: () => {},
              },
              prev: {
                callback: () => {},
              },
            },
          },
        });
      } else {
        this.scrollListener.changeSettings({
          scroll: {
            x: {
              next: {
                callback: () => {},
              },
              prev: {
                callback: () => {},
              },
            },
          },
          touch: {
            x: {
              next: {
                callback: () => {},
              },
              prev: {
                callback: () => {},
              },
            },
          },
        });
      }
    },
  },
  created() {
    window.addEventListener('resize', this.displayWindowSize);
    this.displayWindowSize();
  },
  mounted() {
    this.scrollListener = new ScrollListener({
      scroll: {
        y: {
          next: {
            callback: this.nextSection,
          },
          prev: {
            callback: this.prevSection,
          },
        },
      },
      touch: {
        y: {
          next: {
            callback: this.nextSection,
          },
          prev: {
            callback: this.prevSection,
          },
        },
      },
    });
    this.ProjectsChangeListener();
  },
};
</script>

<style lang="scss">
@mixin noPad-noMarg() {
  padding: 0px;
  margin: 0px;
}

@font-face {
  font-family: "Aquawax";
  src: url('../../public/Aquawax-Pro-DemiBold.ttf')
}

html {
  @include noPad-noMarg();
}

main {
  @include noPad-noMarg();
  position: relative;
  overflow: hidden;
  height: 100vh;
}

body {
  @include noPad-noMarg();
  overflow: hidden;
  color: #ffffff;
  font-family: Arial, 'Courier New', Courier, monospace;
}

section {
  opacity: 1;
  transform: scale(1);
}

#background {
  height: 100vh;
  width: 500%;
  position: absolute;
  background: center / contain linear-gradient(to right, #240b36, #c31432, #c39e14, #14c357, #149cc3, #c3145b);
  transition: all ease 0.5s;
}

.fadeSection-enter-active,
.fadeSection-leave-active {
  transition: all .4s ease-in-out;
}

.fadeSection-enter  {
  transform-origin: center;
  transform: scale(2);
  opacity: 0;
}

  .fadeSection-enter-active
{
  transition-delay: .4s;
}

.fadeSection-leave-to {
  transform-origin: center;
  transform: scale(0);
  opacity: 0;
}
</style>
