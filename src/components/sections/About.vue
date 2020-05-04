<template>
  <section>
    <transition name="fadeTxt">
    <article id="description" :key="$store.getters.lang">
    <h1>
    {{$store.state.Txt.about.title[$store.getters.lang]}}
    </h1>
    <p v-html="$store.state.Txt.about.paragraph[$store.getters.lang]"></p>
    </article>
    </transition>
    <img src="../../../public/img/about-picture.png">
  </section>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin: 0px;
  color: #ffffff;
  font-family: 'Aquawax', Arial;
  font-size: 4em;
}
h2 {
  margin-bottom: 0px;
  color: #ffffff;
  font-family: 'Aquawax', Arial;
  font-size: 2em;
}

p {
    color: #ffffff;
}

#description {
  left: calc(50% - 250px);
  transform: translate(-50%);
  position: absolute;
  width: 450px;
  animation: enterTop 0.8s ease-in-out;

}

img {
  left: calc(50% + 250px);
  transform: translate(-50%);
  position: absolute;
  animation: enterBottom 0.8s ease-in-out;
}

div {
  display: inline;
}

@keyframes enterTop {
  0% {
    margin-top: -80%;
    opacity: 0;
  }

  50% {
    margin-top: -40%;
    opacity: 0;
  }

  100% {
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes enterBottom {
  from {
    margin-top: 80%;
  }

  to {
    margin-top: 0px;
  }
}

.fadeTxt-enter-active, .fadeTxt-leave-active {
  transition: all 0.8s ease-out;
}

.fadeTxt-enter, .fadeTxt-leave-to {
  opacity: 0;
  margin-top: -40%;
}
</style>
