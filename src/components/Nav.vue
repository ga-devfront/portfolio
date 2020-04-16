<template>
  <nav>
  <span class="actual">{{$store.getters.currentSectionName}}</span>
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
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Aquawax', Arial;
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

div.item {
  display: block;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;
}

li.active>div.item,
li:not(.active) div.item:hover {
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
}

li>button.lang {
  margin-top: 15px;
  border: none;
  background: none;
  outline: 0;
  transition: all 0.2s ease-in-out;
}

li>button.lang:focus {
  padding: 1px 0px 1px 0px;
}

li>button.lang ~ span {
  display: flex;
}

li>button.lang ~ span>div {
  width: 30px;
}

li>button.lang ~ span>div.inactive {
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
}

li>button.lang ~ span>div.inactive:hover {
  opacity: 1;
}

div.item>svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;
}

li {
  position : relative;
  cursor: pointer;
}

li>span {
  display: inline-block;
  opacity: 0;
  color: white;
  position: absolute;
  width: max-content;
  top: 50%;
  left: 65px;
  transition: all 0.2s ease-in-out;
}

li.active>span {
  display: none;
}

li>div.item:hover ~ span {
  opacity: 1;
}

li>button.lang:focus ~ span {
  opacity: 1;
}

nav>span.actual {
  white-space:nowrap;
  font-family: 'Aquawax', Arial;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 50%;
  left: 50%;
  transform: rotate(-90deg) translate(50%);
}

nav {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
}
</style>
