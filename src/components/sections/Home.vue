<template>
  <section>
    <div id="titleContainer">
    <h1>
      <p class="title" id="secondName">Guyomar</p>
      <p class="title" id="firstName">Alexis</p>
    </h1>
    <transition
      name="fadeTxt"
    >
    <h2 v-bind:key="$store.state.Txt.home.title[$store.getters.lang]">{{$store.state.Txt.home.title[$store.getters.lang]}}</h2>
    </transition>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
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

<style scoped>
section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  color: #ffffff;
}

h2 {
  text-align: center;
  font-weight: normal;
  margin: 0px 40px;
  font-family: Arial, 'Courier New', Courier, monospace;
  color: #ffffff;
  letter-spacing: 10px;
  animation: enterFade 0.8s;
}

.title {
  margin: 0px 0px -60px 0px;
  font-family: 'Aquawax', Arial;
  font-size: 6.375em;
}

#titleContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  max-width: 100%;
}

#secondName {
  animation: enterLeft 0.8s;
}

#firstName {
  animation: enterRight 0.8s;
  text-align: end;
}

@keyframes enterLeft {
  from {
    margin-left: -80%;
  }

  to {
    margin-left: 0px;
  }
}

@keyframes enterRight {
  from {
    margin-right: -80%;
  }

  to {
    margin-right: 0px;
  }
}

@keyframes enterFade {
  from {
    opacity: 0;
  }

  top {
    opacity: 1;
  }
}

.fadeTxt-enter-active, .fadeTxt-leave-active {
  transition: all .4s;
}
.fadeTxt-enter, .fadeTxt-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100px);
}

@media screen and (max-width: 820px) {
  .title {
    margin: 0px 0px -30px 0px;
    font-size: 3.2em;
  }
  h2 {
    font-size: 1.2em;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 330px) {
  .title {
    margin: 0px 0px -30px 0px;
    font-size: 3em;
  }
  h2 {
    font-size: 1em;
    letter-spacing: 1px;
  }
}
</style>
