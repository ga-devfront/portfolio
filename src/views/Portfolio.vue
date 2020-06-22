<template>
  <main id="scrollSections">
    <div id="background" :style="$route.meta.background"></div>
    <transition
    name="fadeSection"
    mode="out-in"
    >
      <router-view
      :key="currentSectionName"
      >
      </router-view>
    </transition>
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
      scrollListener: null,
      nextP: false,
      prevP: false,
    };
  },
  computed: {
    sections() {
      return this.$router.options.routes[1].children;
    },
    currentSectionName() {
      return this.$route.path.split('/')[2];
    },
    currentSectionIndex() {
      return this.sections.map((element) => element.path).indexOf(this.currentSectionName);
    },
  },
  methods: {
    stopNextP() {
      this.nextP = false;
    },
    stopPrevP() {
      this.prevP = false;
    },
    getSectionName(index) {
      return this.sections[index].name;
    },
    prevSection() {
      const prevPos = this.currentSectionIndex - 1;
      if (prevPos < 0) return;
      const prevSectionName = this.getSectionName(prevPos);
      this.$router.push({ name: prevSectionName });
      if (prevSectionName === 'projects') {
        this.$route.params.currentProject = 'scrolleventhandler';
        this.$router.push({ name: 'currentProject' });
      }
    },
    nextSection() {
      let currentIndex = this.currentSectionIndex;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      const nextPos = currentIndex + 1;
      if (nextPos >= this.sections.length) return;
      const nextSectionName = this.getSectionName(nextPos);
      this.$router.push({ name: nextSectionName });
      if (nextSectionName === 'projects') {
        this.$route.params.currentProject = 'scrolleventhandler';
        this.$router.push({ name: 'currentProject' });
      }
    },
    displayWindowSize() {
      this.screenSize.screenHeight = document.documentElement.clientHeight;
      this.screenSize.screenWidth = document.documentElement.clientWidth;
    },
    enableXScroll() {
      this.scrollListener.changeSettings({
        scroll: {
          x: {
            next: {
              callback: () => { this.$bus.emit('nextProject'); },
            },
            prev: {
              callback: () => { this.$bus.emit('prevProject'); },
            },
          },
        },
        touch: {
          x: {
            next: {
              callback: () => { this.$bus.emit('nextProject'); },
            },
            prev: {
              callback: () => { this.$bus.emit('prevProject'); },
            },
          },
        },
      });
    },
    disableXScroll() {
      this.scrollListener.changeSettings({
        scroll: {
          x: {
            next: {
              callback: () => { },
            },
            prev: {
              callback: () => { },
            },
          },
        },
        touch: {
          x: {
            next: {
              callback: () => { },
            },
            prev: {
              callback: () => { },
            },
          },
        },
      });
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
            value: 5,
            callback: this.nextSection,
          },
          prev: {
            value: 5,
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
    this.$bus.on('enableXScroll', this.enableXScroll);
    this.$bus.on('disableXScroll', this.disableXScroll);
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

mark {
  border-radius: 7px 0px 7px 0px;
  padding: 1px;
  margin: 2px;
  background: rgb(250 250 250 / 90%);
  color: #2e2e2e;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: rgb(250 250 250 / 100%);
  }
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
  background: center / contain linear-gradient(to right, #240b36, #c31432, #c39e14, #27c2aa, #5E3D72, #D32C2C);
  transition: all ease 0.8s;
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

.fadeSection-leave-to {
  transform-origin: center;
  transform: scale(0);
  opacity: 0;
}
</style>
