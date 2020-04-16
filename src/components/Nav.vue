<template>
  <nav>
    <transition name="fade">
      <span
      :key="$store.getters.currentSectionName"
      class="actual">
      {{$store.getters.currentSectionName}}
      </span>
    </transition>
    <ul class="menu">
        <li
        v-for="section in $store.state.Router.sections"
        :id="section.name.en"
        :class="$store.getters.isActive(section)"
        v-bind:key="section.name.en"
        v-on:click.prevent.stop="$store.commit('setSection', section)"
        >
            <div class="item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" v-html="section.svg"></svg>
            </div>
            <span>{{section.name[$store.getters.lang]}}</span>
        </li>
        <li>
          <button class="lang">{{$store.getters.lang}}</button>
          <span>
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
        </li>
</ul>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  },
  data() {
    return {
      displayLang: false,
    };
  },
};
</script>

<style scoped>
/* global */
* {
  box-sizing: border-box;
  font-family: 'Aquawax', Arial;
  font-weight: bold;
  color: #ffffff;
}
ul.menu {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  border-radius: 30px;
  border: 4px solid #fff;
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
}

li span {
  display: inline-block;
  opacity: 0;
  color: white;
  position: absolute;
  width: max-content;
  top: 50%;
  transform: translateY(-50%);
  left: 65px;
  transition: all 0.2s ease-in-out;
}

nav {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
}

nav>span.actual {
  white-space:nowrap;
  color: white;
  position: absolute;
  right: 50%;
  left: 50%;
  transform: rotate(-90deg) translate(50%);
}

/* nav buttons */
div.item {
  display: block;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
}

li.active>div.item,
li:not(.active):hover div.item {
  height: 30px;
  width: 30px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
}

div.item>svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;
}

li>div.item ~ span {
  pointer-events: none;
}

li.active>span {
  display: none;
}


li:hover>div.item ~ span {
  left: 50px;
  opacity: 1;
}

/* lang button */
li>button.lang {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  border: none;
  background: none;
  outline: 0;
  transition: all 0.2s ease-in-out;
}

li>button.lang ~ span {
  display: flex;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
}

li>button.lang:focus ~ span {
  visibility: visible;
  opacity: 1;
  left: 40px;
}

li>button.lang ~ span>div {
  padding-left: 15px;
}

li>button.lang ~ span>div.inactive {
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
}

li>button.lang ~ span>div.inactive:hover {
  opacity: 1;
}

/* class animation */

.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: -20px;
}
</style>
