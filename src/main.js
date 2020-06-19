import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Router from './Router.vue';
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
  fallbackLocale: 'fr',
  locale: 'fr',
  messages,
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Router.routes,
});

router.beforeEach((to, from, next) => {
  const { lang } = to.params;

  if (!['en', 'fr'].includes(lang)) {
    return next(i18n.locale);
  }

  if (i18n.locale !== lang) {
    i18n.locale = lang;
  }

  return next();
});

const store = new Vuex.Store({
  state: {
    Router,
    Listing,
  },
  mutations: {
  },
  getters: {
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
