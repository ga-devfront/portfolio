<template>
  <nav>
    <transition name="fade">
      <span
      :key="$route.name + $i18n.locale"
      class="actual">
      {{$t(`routes.${$route.name}`)}}
      </span>
    </transition>
    <ul>
      <li
      v-for="section in $router.options.routes[0].children"
      :id="section.name"
      :class="isActive(section.name)"
      :key="section.name + $i18n.locale"
      v-on:click="$router.push({name: section.name })"
      >
        <div class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" v-html="section.meta.svg"></svg>
        </div>
        <span>{{$t(`routes.${section.name}`)}}</span>
      </li>
      <li>
        <button class="lang">{{$i18n.locale}}</button>
        <span>
          <div
          :class="isLang('fr')"
          v-on:click="switchLang('fr')">
            fr
          </div>
          <div
          :class="isLang('en')"
          v-on:click="switchLang('en')">
            en
          </div>
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavDesktop',
  methods: {
    isActive(section) {
      if (section === this.$route.name) {
        return 'active';
      }
      return 'inactive';
    },
    isLang(lang) {
      if (lang === this.$i18n.locale) {
        return 'active';
      }
      return 'inactive';
    },
    switchLang(lang) {
      this.$i18n.locale = lang;
      this.$route.params.lang = lang;
      this.$router.push({ name: this.$route.name });
    },
  },
  data() {
    return {
      displayLang: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

$white: #ffffff;
/* global */
* {
  box-sizing: border-box;
  font-family: 'Aquawax', Arial;
  font-weight: bold;
  color: $white;
}
ul {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  border-radius: 30px;
  border: 4px solid $white;
  width: max-content;
  padding: 0;
  position: relative;
  padding-bottom: 10px;
}

li {
  height: 30px;
  width: 30px;
  margin: 4px 5px;
  position : relative;
  cursor: pointer;
  span {
    display: inline-block;
    opacity: 0;
    color: $white;
    position: absolute;
    width: max-content;
    top: 50%;
    transform: translateY(-50%);
    left: 65px;
    transition: all 0.2s ease-in-out;
  };
  &.active, &:not(.active):hover {
    >div.item {
      height: 30px;
      width: 30px;
      background: rgb(0 0 0 / 0%);
      border: 2px solid $white;
    };
  };
  &.active {
    >span {
      display: none;
    };
  };
  >div.item {
    display: block;
    background-color: rgb(255 255 255 / 100%);
    border: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    @include center;
    transition: all 0.2s ease-in-out;
    >svg {
      position: absolute;
      @include center;
      height: 20px;
      width: 20px;
    };
    &~ span {
      pointer-events: none;
    };
  };
  &:hover {
    >div.item ~ span {
      left: 50px;
      opacity: 1;
    };
  };
  >button.lang {
    position: absolute;
    @include center;
    text-align: center;
    cursor: pointer;
    border: none;
    background: none;
    outline: 0;
    transition: all 0.2s ease-in-out;
    &~ span {
      display: flex;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
      >div {
        padding-left: 15px;
        &.inactive {
          opacity: 0.5;
          transition: all 0.2s ease-in-out;
          &:hover {
            opacity: 1;
          }
        };
      };
    };
    &:focus ~ span {
      visibility: visible;
      opacity: 1;
      left: 40px;
    };
  };
}

nav {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  >span.actual{
    white-space:nowrap;
    color: $white;
    position: absolute;
    right: 50%;
    left: 50%;
    transform: rotate(-90deg) translate(50%);
  };
}

/* class animation */

.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: -20px;
}
</style>
