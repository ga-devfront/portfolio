<template>
  <section>
    <div id="titleContainer">
    <h1>
      <span class="title" id="secondName">Guyomar</span>
      <span class="title" id="firstName">Alexis</span>
    </h1>
    <transition name="fadeTxt">
    <h2 v-bind:key="$store.state.Txt.home.title[$store.getters.lang]">
      {{$store.state.Txt.home.title[$store.getters.lang]}}
    </h2>
    </transition>
    </div>
    <div id="swip"><div id="circle"></div></div>
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
  flex-direction: column;
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

#titleContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
}

#firstName {
  animation: enterRight 0.8s;
  text-align: end;
}

#secondName {
  animation: enterLeft 0.8s;
}

#swip {
  position: relative;
  top: 50px;
  height: 80px;
  width: 30px;
  border: 3px solid #ffffff;
  border-radius: 25px;
}

#circle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ffffff;
  animation: swipDown 1s linear infinite normal;
}

.title {
  height: 140px;
  line-height: 125px;
  margin: 0px 0px -20px 0px;
  font-family: 'Aquawax', Arial;
  font-size: 6.375em;
}

.fadeTxt-enter-active, .fadeTxt-leave-active {
  transition: all .4s;
}

.fadeTxt-enter, .fadeTxt-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-50%, 100px);
}

@keyframes swipDown {
  0% {
  top: 50px;
  opacity: 0;
  }
  20% {
  top: 50px;
  opacity: 1;
  }
  70% {
  top: 40px;
  opacity: 1;
  }
  90% {
  top: 10px;
  opacity: 0;
  }
  100% {
  top: 5px;
  opacity: 0;
  }
}

@keyframes enterLeft {
  0% {
    margin-left: -80%;
  }

  50% {
    margin-left: -80%;
  }

  100% {
    margin-left: 0px;
  }
}

@keyframes enterRight {
  0% {
    margin-right: -80%;
  }

  50% {
    margin-right: -80%;
  }

  100% {
    margin-right: 0px;
  }
}

@keyframes enterFade {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 820px) {
  h2 {
    bottom: -50px;
    font-size: 1.6em;
    letter-spacing: 1px;
  }
  #titleContainer {
    width: 550px;
  }
  #swip {
    top: 100px;
  }
  .title {
    margin: 0px 0px -50px 0px;
    font-size: 3.8em;
  }
}

@media screen and (max-width: 500px) {
  h2 {
    bottom: -70px;
    font-size: 1.2em;
    letter-spacing: 1px;
  }
  #titleContainer {
    width: 400px;
  }
  .title {
    margin: 0px 0px -70px 0px;
    font-size: 3em;
  }
}

@media screen and (max-width: 380px) {
  h2 {
    bottom: -70px;
    font-size: 1em;
    letter-spacing: 1px;
  }
  #titleContainer {
    width: 310px;
  }
  .title {
    margin: 0px 0px -70px 0px;
    font-size: 2.5em;
  }
}
</style>
