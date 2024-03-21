import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueBus from 'vue-bus';
import Router from './Router.vue';
import En from './translation/En.vue';
import Fr from './translation/Fr.vue';
import Portfolio from './views/Portfolio.vue';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueBus);

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

  const localeMessage = Object.getOwnPropertyDescriptor(i18n.messages, lang);
  const { title } = localeMessage.value.seo;
  const { description } = localeMessage.value.seo;
  document.title = title;
  document.head.querySelector('meta[name=description]').content = description;
  document.head.querySelector('link[rel=canonical]').href = `https://ag-dev.fr/${lang}`;
  document.head.querySelector('meta[property="og:description"]').content = description;
  document.head.querySelector('meta[property="og:url"]').content = `https://ag-dev.fr/${lang}`;
  document.head.querySelector('meta[property="og:title"]').content = title;
  document.head.querySelector('meta[property="twitter:description"]').content = description;
  document.head.querySelector('meta[property="twitter:url"]').content = `https://ag-dev.fr/${lang}`;
  document.head.querySelector('meta[property="twitter:title"]').content = title;

  return next();
});

// eslint-disable-next-line
const vue = new Vue({
  i18n,
  el: '#app',
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
