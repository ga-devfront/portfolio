<template>
  <div id="app">
    <Nav/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from '.components/Home.vue';
import About from '.components/About.vue';
import Skills from '.components/Skills.vue';
import Projects from '.components/Projects.vue';
import Contact from '.components/Contact.vue';


export default {
  name: 'App',
  routes: {
    '/': Home,
    '/accueil': Home,
    '/home': Home,

    '/a-propos': About,
    '/about': About,

    '/competences': Skills,
    '/skills': Skills,

    '/projets': Projects,
    '/projects': Projects,

    '/contact': Contact,
  },
  components: {
    Nav,
  },
};
</script>

<style>
body {
  background: grey;
}
</style>
