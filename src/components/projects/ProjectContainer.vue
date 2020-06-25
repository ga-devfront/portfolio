<template>
  <article>
    <div id="leftPart">
      <img
      id="logoMobile"
      :src="project.logo.small"
      :alt="$t(`projects.${project.path}.name`) + ' logo'"
      >
      <div id="mokups">
        <picture id="desktop">
          <source media="(min-width: 1540px)" :srcset="project.preview.desktop.big">
          <source media="(min-width: 1100px)" :srcset="project.preview.desktop.medium">
          <img :src="project.preview.desktop.small" alt="desktop project mokup">
        </picture>
        <picture id="mobile" v-if="project.preview.mobile">
          <source media="(min-width: 1540px)" :srcset="project.preview.mobile.big">
          <source media="(min-width: 1100px)" :srcset="project.preview.mobile.medium">
          <img :src="project.preview.mobile.small" alt="mobile project mokup">
        </picture>
      </div>
    </div>
    <div id="details">
      <img id="logo" :src="project.logo.big" :alt="$t(`projects.${project.path}.name`) + ' logo'">
      <transition name="fadeTxt0" mode="out-in">
      <p :key="'type' + $i18n.locale">
        <span class="titlePart">
          {{$t('projects.type')}}:
        </span>
        {{$t(`projects.${project.path}.type`)}}
      </p>
      </transition>
      <transition name="fadeTxt1" mode="out-in">
      <p :key="'technos' + $i18n.locale">
        <span class="titlePart">
          {{$t('projects.technologies')}}:
        </span>
        <span
        v-for="technologie in project.technologies"
        v-bind:key="technologie"
        :class="technologie.toLowerCase() + ' language'">
          {{technologie}}
        </span>
      </p>
      </transition>
      <transition name="fadeTxt2" mode="out-in">
      <p :key="'description' + $i18n.locale">
        <span class="titlePart">
          {{$t('projects.description')}}: <br>
        </span>
        <span v-html="$t(`projects.${project.path}.description`)"></span>
      </p>
      </transition>
      <div id="links">
        <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener">
          <img :src="Listing.iconsLink.github" alt="GitHub">
        </a>
        <a v-if="project.links.npm" :href="project.links.npm" target="_blank" rel="noopener">
          <img :src="Listing.iconsLink.npm" alt="npm">
        </a>
        <a v-if="project.links.doc" :href="project.links.doc" download>
          <img :src="Listing.iconsLink.doc" alt="documentation">
        </a>
        <a v-if="project.links.project" :href="project.links.project" target="_blank" rel="noopener">
          <img :src="Listing.iconsLink.project" alt="online project">
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import Listing from './Listing.vue';

export default {
  name: 'ProjectContainer',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
  },
  data() {
    return {
      Listing,
    };
  },
  computed: {

  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
article {
  margin: {
    top: auto;
    bottom: auto;
  }
  display: flex;
  position: relative;
  z-index: 0;
  justify-content: space-around;
  vertical-align: middle;
  width: 65%;
  @media screen and (max-width:760px) {
    justify-content: start;
    flex-direction: column;
    width: 80%;
  };
  @media screen and (max-width:850px) and (orientation: landscape) {
    flex-direction: initial;
    width: 90%;
  }
}

#leftPart {
  margin: auto;
  @media screen and (max-width:760px) {
    margin: {
      bottom: 10px;
    }
  };
  @media screen and (max-width: 850px) and (orientation: landscape) {
    margin: auto;
  }
}

#logoMobile {
  margin: {
    left: auto;
    right: auto;
    bottom: 10px;
  }
  display: none;
  @media screen and (max-width:760px) {
  display: block;
  };
}

#mokups {
  position: relative;
  max-width: 550px;
  max-height: 285px;
  #desktop {
    margin-left: auto;
    margin-right: auto;
  }
  #mobile {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
}

p {
  position: relative;
  display: block;
  font-size: 0.9em;
  letter-spacing: 0.05em;
  @media screen and (max-width:850px) {
    font-size: .8em;
    margin: .3em;
  }
}

#links {
  display: flex;
  img {
    margin: 0px 10px;
    height: 35px;
    width: 35px;
    opacity: .8;
    transition: all .2s;
    &:hover {
      opacity: 1;
      transform: scale(.9);
  }
  }
}

#details {
  margin: {
    left: 50px;
    right: auto;
    top: auto;
    bottom: auto;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
  @media screen and (max-width: 760px) {
    margin: auto;
  }
  .titlePart {
    font-family: 'Aquawax', Arial;
  }
  #logo {
    margin: {
      left: auto;
      right: auto;
    };
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
}

@for $i from 0 through 2 {
  .fadeTxt#{$i}-enter-active,
  .fadeTxt#{$i}-leave-active {
    transition: {
    property: all;
    duration: ($i * .2s) + .8s;
    timing-function: ease-in-out;
    };
  };
  .fadeTxt#{$i}-enter,
  .fadeTxt#{$i}-leave-to {
    opacity: 0;
    transform: translate(50%);
  };
}

.language {
  letter-spacing: 0px;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 2px 5px;
  &.html {
    background: #CC4319;
  };
  &.css {
    background: #0c73b8;
  };
  &.javascript {
    background: #946714;
  };
  &.sass {
    background: #C14484;
  };
  &.vuejs {
    background: #34495e;
  };
  &.wordpress {
    background: #32373c;
  };
  &.bootstrap {
    background: #563d7c;
  };
  &.uml {
    background: #1d4515;
  };
  &.api {
    background: #19866A;
  };
  &.jasmine {
    background: #8a4182;
  };
}
</style>
