import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Router from './Router.vue';
import Txt from './Txt.vue';
import En from './translation/En.vue';
import Fr from './translation/Fr.vue';
import Listing from './components/projects/Listing.vue';
import Portfolio from './views/Portfolio.vue';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

const messages = {
  en: En,
  fr: Fr,
};

const i18n = new VueI18n({
  locale: 'fr',
  messages,
});

const router = new VueRouter({
  mode: 'history',
  routes: Router.routes,
});

const store = new Vuex.Store({
  state: {
    language: null,
    appUrl: window.location.origin,
    currentPath: window.location.pathname,
    Txt,
    Router,
    Listing,
  },
  mutations: {
    setSection(state, section) {
      const futureUrl = (typeof section.url === 'object') ? section.url[this.getters.lang] : section.url;
      state.currentPath = futureUrl;
      window.history.pushState(
        {},
        this.getters.getSectionName(section),
        this.getters.currentUrl + state.currentPath,
      );
    },
    setLang(state, lang) {
      state.language = lang;
    },
  },
  getters: {
    lang: (state) => (state.language ? state.language : 'fr'),
    getSectionName: (state, getters) => (section) => section.name[getters.lang],
    sectionCount(state) {
      return Object.keys(state.Router.sections).length;
    },
    currentPosition(state, getters) {
      return Object.keys(state.Router.sections).indexOf(getters.currentSectionKey);
    },
    isActive: (state, getters) => (section) => {
      if (section === getters.currentSection) return 'active';
      return 'inactive';
    },
    isLang: (state, getters) => (lang) => {
      if (lang === getters.lang) return 'active';
      return 'inactive';
    },
    currentUrl: (state) => state.appUrl,
    currentSectionKey: (state) => state.Router.sectionMapper[state.currentPath],
    currentSection: (state, getters) => state.Router.sections[getters.currentSectionKey],
    currentSectionName: (state, getters) => getters.getSectionName(getters.currentSection),
  },
});

// eslint-disable-next-line
const vue = new Vue({
  i18n,
  el: '#app',
  store,
  router,
  components: {
    Portfolio,
  },
  methods: {
  },
  render(h) {
    return h(Portfolio);
  },
});
