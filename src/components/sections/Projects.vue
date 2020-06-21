<template>
  <section>
    <svg
    id="leftArrow"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
    style="enable-background:new 0 0 492 492;"
    xml:space="preserve"
    v-on:click="prevProject()">
      <!--eslint-disable-next-line-->
      <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
    </svg>
    <transition :name="transition" mode="out-in">
      <project-container :key="currentProjectPath" :project="currentProject" id="projects"/>
    </transition>
    <svg
    id="rightArrow"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
    style="enable-background:new 0 0 492 492;"
    xml:space="preserve"
    v-on:click="nextProject()">
      <!--eslint-disable-next-line-->
      <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
    </svg>
  </section>
</template>

<script>
import ProjectContainer from '../projects/ProjectContainer.vue';
import Listing from '../projects/Listing.vue';

export default {

  name: 'Projects',
  components: {
    ProjectContainer,
  },
  props: {
  },
  data() {
    return {
      transition: '',
    };
  },
  computed: {
    currentProjectPath() {
      if (typeof this.currentProject === 'undefined') {
        return undefined;
      }
      return this.currentProject.path;
    },
    currentProject() {
      return Listing.project[this.$route.params.currentProject];
    },
    currentProjectKey() {
      return Object.keys(Listing.project).indexOf(this.currentProject.path);
    },
    currentProjectName() {
      return Object.keys(Listing.project)[this.currentProjectKey];
    },
    nextProjectName() {
      if (Object.keys(Listing.project)[this.currentProjectKey + 1] === undefined) {
        return Object.keys(Listing.project)[0];
      }
      return Object.keys(Listing.project)[this.currentProjectKey + 1];
    },
    prevProjectName() {
      if (Object.keys(Listing.project)[this.currentProjectKey - 1] === undefined) {
        return Object.keys(Listing.project)[Object.keys(Listing.project).length - 1];
      }
      return Object.keys(Listing.project)[this.currentProjectKey - 1];
    },
  },
  methods: {
    nextProject() {
      this.$route.params.currentProject = this.nextProjectName;
      this.transition = 'nextTransition';
      this.$router.push({ name: 'currentProject' });
    },
    prevProject() {
      this.$route.params.currentProject = this.prevProjectName;
      this.transition = 'prevTransition';
      this.$router.push({ name: 'currentProject' });
    },
  },
  beforeCreate() {
    if (typeof Listing.project[this.$route.params.currentProject] === 'undefined') {
      this.$router.push({ name: 'error404project' });
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.$bus.emit('enableXScroll');
    }, 1);
    this.$bus.on('nextProject', this.nextProject);
    this.$bus.on('prevProject', this.prevProject);
  },
  beforeDestroy() {
    this.$bus.emit('disableXScroll');
    this.$bus.off('nextProject', this.nextProject);
    this.$bus.off('prevProject', this.prevProject);
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;

@mixin flexColumnCenter {
  display: flex;
  vertical-align: middle;
  justify-content: center;
}

section {
  height: 100vh;
  width: 100%;
  @include flexColumnCenter;
  align-items: center;
}

svg {
  position: absolute;
  z-index: 1;
  &#leftArrow {
    left: 12%;
    &:hover {
      left: calc(12% - 10px);
    }
    @media screen and (max-width:850px) {
      height: 30px;
      left: 2%;
      &:hover {
        left: calc(2% - 10px);
      }
    };
  };
  &#rightArrow {
    right: 12%;
    &:hover {
      right: calc(12% - 10px);
    }
    @media screen and (max-width:850px) {
      height: 30px;
      right: 2%;
      &:hover {
        right: calc(2% - 10px);
      }
    };
  };
  fill: $white;
  fill-opacity: 0.7;
  height: 50px;
  transition: all .2s;
  &:hover {
    fill-opacity: 1;
    cursor: pointer;
  }
}

.nextTransition-enter-active,
.nextTransition-leave-active,
.prevTransition-enter-active,
.prevTransition-leave-active {
  transition: all .4s ease-in-out;
}

.nextTransition-enter  {
  opacity: 0;
  margin-right: -80%
}

.nextTransition-leave-to {
  opacity: 0;
  margin-left: -80%
}

.prevTransition-enter  {
  opacity: 0;
  margin-left: -80%
}

.prevTransition-leave-to {
  opacity: 0;
  margin-right: -80%
}
</style>
