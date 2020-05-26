<template>
  <nav :class="isOpen">
    <div class="topNav">
      <transition name="fade">
        <h3 v-if="open === true">
          Menu
        </h3>
      </transition>
      <button id="hamburger" @click="open = !open" :class="isOpen" class="hamburger">
        <div id="hamburgerTop"></div>
        <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="64px"
        height="64px"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
        xml:space="preserve">
          <!-- eslint-disable-next-line -->
          <path id="circle" fill="none" stroke-width="4" stroke-miterlimit="10" d="M16,32h32c0,0,11.723-0.306,10.75-11c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"/>
        </svg>
        <div id="hamburgerBottom"></div>
      </button>
    </div>
    <transition name="fade">
      <ul class="menu" :key="isOpen" v-if="open === true">
        <hr>
        <li
        v-for="section in $store.state.Router.sections"
        :id="section.name.en"
        :class="$store.getters.isActive(section)"
        v-bind:key="section.name.en"
        v-on:click="open = false"
        v-on:click.prevent.stop="$store.commit('setSection', section)"
        >
          <transition name="fadeText">
            <!-- eslint-disable-next-line -->
            <span :key="section.name + $store.getters.lang">{{section.name[$store.getters.lang]}}</span>
          </transition>
        </li>
        <hr>
        <span class="lang">
          <div
          :class="$store.getters.isLang('fr')"
          v-on:click.prevent.stop="$store.commit('setLang', 'fr')">
            fr
          </div>
          <div
          :class="$store.getters.isLang('en')"
          v-on:click.prevent.stop="$store.commit('setLang', 'en')">
            en
          </div>
        </span>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavMobile',
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isOpen() {
      if (this.open === true) return 'is-open';
      return 'is-closed';
    },
  },
};
</script>

<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

h3 {
  margin: {
    right: 30px;
    top: 10px;
  }
  font-family: 'Aquawax', Arial;
  color: #ffffff;
  font-size: 40px;
  @media screen and (orientation: landscape) {
    padding-top: 5px;
    font-size: 30px;
  };
}

path, line {
  stroke: #ffffff;
  stroke-linecap: round;
}

hr {
  margin: 30px 0px;
  @media screen and (orientation: landscape) {
    margin: 15px 0px;
  };
}

nav {
  z-index: 0;
  width: 10px;
  &.is-open {
    width: 250px;
    z-index: 1;
    backdrop-filter: blur(5px);
    background: rgb(0 0 0 /70%);
  }
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  transition: all 0.2s ease-in-out;
}

ul {
  padding: 0px;
  margin: 0px;
  z-index: 1;
  list-style: none;
  font-family: 'Aquawax', Arial;
  color: #ffffff;
  font-size: 20px;
  @media screen and (orientation: landscape) {
    font-size: 15px;
  };
}

li {
  color: rgb(150 150 150);
  margin: {
    top: 30px;
    right: 0px;
    bottom: 30px;
    left: 40px;
    };
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media screen and (orientation: landscape) {
    margin: {
      top: 20px;
      bottom: 20px;
      left: 30px;
      };
  };
  &.active, &:not(.active):hover {
    margin-left: 50px;
    color: #ffffff;
  }
}

span.lang {
  display: flex;
  justify-content: space-evenly;
  div {
    cursor: pointer;
    color: rgb(150 150 150);
    transition: all 0.2s ease-in-out;
    &.active, &:not(.active):hover {
      color: #ffffff;
    }
  };
}

.topNav {
  height: 70px;
  display: flex;
  justify-content: flex-end;
  top: 5px;
  right: 0px;
  margin-right: 10px;
  position: relative;
  z-index: 2;
  @media screen and (orientation: landscape) {
    height: 50px;
  };
}

.hamburger {
  background: none;
  border: none;
  padding: 0;
  z-index: 2;
  outline: 0;
  cursor: pointer;
  -webkit-transform: scale(0.8);
          transform: scale(0.8);
  display: block;
  width: 64px;
  height: 64px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  @media screen and (orientation: landscape) {
    transform: scale(0.5);
  };
  &.is-open {
    border-radius: 32px;
    #circle {
      stroke-dasharray: 1 100 190 300;
      stroke-dashoffset: 1;
    };
    #hamburgerTop {
      -webkit-transform: translateX(-4.5px) rotate(-45deg);
      transform: translateX(-4.5px) rotate(-45deg);
    };
    #hamburgerBottom {
      -webkit-transform: translateX(-4.5px) rotate(45deg);
      transform: translateX(-4.5px) rotate(45deg);
    };
  };
}

#hamburgerTop {
  top: 19px;
  left: 14px;
}

#hamburgerBottom {
  top: 41px;
  left: 14px;
}

#hamburgerTop, #hamburgerBottom {
  position: absolute;
  display: block;
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: #ffffff;
  -webkit-transform-origin: 34px 2px;
  transform-origin: 34px 2px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 500ms cubic-bezier(0.8, -1.1, 0.5, 1.9);
  transition: all 500ms cubic-bezier(0.8, -1.1, 0.5, 1.9);
}

#circle {
  stroke-dasharray: 1 100 32 300;
  stroke-dashoffset: 101;
  -webkit-transition: all 750ms ease;
  transition: all 750ms ease;
}

/* class animation */

.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(300px);
}

.fadeText-enter-active, .fade-text-leave-active {
  transition: all .4s;
}
.fadeText-enter, .fade-text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  padding-left: 10px;
}
</style>
