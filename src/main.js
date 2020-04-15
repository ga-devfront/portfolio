import Vue from 'vue';
import Vuex from 'vuex';
import Router from './Router.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    language: null,
    appUrl: window.location.origin,
    Router,
  },
  mutations: {
  },
  getters: {
    lang: (state) => (state.language ? state.language : 'fr'),
  },
});

// eslint-disable-next-line
const vue = new Vue({
  el: '#app',
  store,
  data: {
    currentPath: window.location.pathname,
  },
  computed: {
    currentView() {
      return Router.apps[this.currentPath];
    },
  },
  methods: {
  },
  render(h) {
    return h(this.currentView);
  },
});
