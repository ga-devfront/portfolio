<template>
  <nav>
  <span class="actual">{{currentSectionName}}</span>
    <ul class="menu">
        <li v-for="section in $store.state.Router.sections" :id="section.name.en" :class="isActive(section)" v-bind:key="section.name.en" v-on:click="changeNav(section.url[$store.getters.lang])">
            <div class="item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" v-html="section.svg"></svg>
            </div>
            <span>{{section.name[$store.getters.lang]}}</span>
        </li>
</ul>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    currentSection: {
      type: Object,
      required: true,
    },
    currentSectionName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sections: this.$store.state.Router.sections,
    };
  },
  methods: {
    isActive(section) {
      return (section === this.currentSection) ? 'active' : 'inactive';
    },
    changeNav(val) {
      if (val !== window.location.pathname) {
        window.location.pathname = val;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
ul.menu {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  border-radius: 30px;
  border: 6px solid #fff;
  width: max-content;
  padding: 0;
  position: relative;
  padding-bottom: 20px;
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
li:not(.active):hover div.item {
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  background: rgba(0, 0, 0, 0);
  border: 3px solid #fff;
}

div.item>span {
  position: absolute;
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
}

li>span {
  display: inline-block;
  opacity: 0;
  font-family: Arial;
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

li:hover span {
  opacity: 1;
}

nav>span.actual {
  display: inline-block;
  font-family: Arial;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 50%;
  left: 50%;
  transform: rotate(-90deg) translate(50%);
  transition: opacity 0.2s easy-in-out;
}

nav {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
}
</style>
