<template>
  <section>
    <div id="titleContainer">
    <h1>
      <span class="title" id="secondName">Guyomar</span>
      <span class="title" id="firstName">Alexis</span>
    </h1>
    <transition name="fadeTxt">
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
  align-items: center;
}

h1 {
  color: #ffffff;
  margin: 0px;
}

h1 span{
  display: block;
}

h2 {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  text-align: center;
  font-weight: normal;
  margin: 0px;
  font-family: Arial, 'Courier New', Courier, monospace;
  color: #ffffff;
  letter-spacing: 10px;
  animation: enterFade 1s;
}

.title {
  height: 140px;
  line-height: 125px;
  margin: 0px 0px -20px 0px;
  font-family: 'Aquawax', Arial;
  font-size: 6.375em;
}

#titleContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  width: 800px;
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
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 820px) {
  #titleContainer {
    width: 550px;
  }
  .title {
    margin: 0px 0px -50px 0px;
    font-size: 3.8em;
  }
  h2 {
    bottom: -50px;
    font-size: 1.6em;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 500px) {
    #titleContainer {
    width: 400px;
  }
  .title {
    margin: 0px 0px -70px 0px;
    font-size: 3em;
  }
  h2 {
    bottom: -70px;
    font-size: 1.2em;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 330px) {
    #titleContainer {
    width: 310px;
  }
  .title {
    margin: 0px 0px -70px 0px;
    font-size: 2.5em;
  }
  h2 {
    bottom: -70px;
    font-size: 1em;
    letter-spacing: 1px;
  }
}
</style>
