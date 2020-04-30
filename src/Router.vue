<script>
import Portfolio from './views/Portfolio.vue';
import Home from './components/sections/Home.vue';
import About from './components/sections/About.vue';
import Skills from './components/sections/Skills.vue';
import Projects from './components/sections/Projects.vue';
import Contact from './components/sections/Contact.vue';

export default {
  apps: {
    '/': Portfolio,
    '/accueil': Portfolio,
    '/home': Portfolio,

    '/apropos': Portfolio,
    '/about': Portfolio,

    '/competences': Portfolio,
    '/skills': Portfolio,

    '/projets': Portfolio,
    '/projects': Portfolio,

    '/contact': Portfolio,
  },
  sectionMapper: {
    '/': 'home',
    '/accueil': 'home',
    '/home': 'home',

    '/realisations': 'works',
    '/works': 'works',

    '/apropos': 'about',
    '/about': 'about',

    '/competences': 'skills',
    '/skills': 'skills',

    '/projets': 'projects',
    '/projects': 'projects',

    '/contact': 'contact',
  },
  sections: {
    home: {
      name: {
        fr: 'Accueil',
        en: 'Home',
      },
      url: {
        fr: '/',
        en: '/',
      },
      svg: '<path fill="#fff" d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
      background: 'left: 0px',
      component: Home,
    },
    about: {
      name: {
        fr: 'À propos',
        en: 'About',
      },
      url: {
        fr: '/apropos',
        en: '/about',
      },
      svg: '<path fill="#fff" d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>',
      background: 'left: -100%',
      component: About,
    },
    skills: {
      name: {
        fr: 'Compétences',
        en: 'Skills',
      },
      url: {
        fr: '/competences',
        en: '/skills',
      },
      svg: '<path fill="#fff" d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z"/>',
      background: 'left: -200%',
      component: Skills,
    },
    projects: {
      name: {
        fr: 'Projets',
        en: 'Projects',
      },
      url: {
        fr: '/projets',
        en: '/projects',
      },
      svg: '<path fill="#fff" d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>',
      background: 'left: -300%',
      component: Projects,
    },
    contact: {
      name: {
        fr: 'Contact',
        en: 'Contact',
      },
      url: {
        fr: '/contact',
        en: '/contact',
      },
      svg: '<path fill="#fff" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>',
      background: 'left: -400%',
      component: Contact,
    },
  },
};
</script>
