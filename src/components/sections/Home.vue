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
    <div id="swip">
      <div id="circle"></div>
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

<style lang="scss" scoped>
// scss
@mixin flexColumnCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

$title-font: 'Aquawax', Arial;
$txt-font: Arial, 'Courier New', Courier, monospace;
$white: #ffffff;
$tablet: 820px;
$mobile: 500px;
$small-mobile: 380px;

// dom

section {
  height: 100vh;
  width: 100%;
  @include flexColumnCenter;
  align-items: center;
}

h1 {
  margin: 0px;
  font-family: $title-font;
  span {
    display: block;
  }
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
  letter-spacing: 10px;
  animation: enterFade 1s;
  @media screen and (max-width: $tablet) {
    bottom: -50px;
    font-size: 1.6em;
    letter-spacing: 1px;
  };
  @media screen and (max-width: $mobile) {
    bottom: -70px;
    font-size: 1.2em;
  };
  @media screen and (max-width: $small-mobile) {
    font-size: 1em;
  };
}

// id

#titleContainer {
  @include flexColumnCenter;
  position: relative;
  width: 800px;
  @media screen and (max-width: $tablet) {
    width: 550px;
  };
  @media screen and (max-width: $mobile) {
    width: 400px;
  };
  @media screen and (max-width: $small-mobile) {
    width: 310px;
  };
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
  border: 3px solid $white;
  border-radius: 25px;
  @media screen and (max-width: $tablet) {
    top: 100px;
  };
}

#circle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: $white;
  animation: swipDown 1s linear infinite normal;
}

// class

.title {
  height: 140px;
  line-height: 125px;
  margin: 0px 0px -20px 0px;
  font-size: 6.375em;
  @media screen and (max-width: $tablet) {
    margin-bottom: -50px;
    font-size: 3.8em;
  };
  @media screen and (max-width: $mobile) {
    margin-bottom: -70px;
    font-size: 3em;
  };
  @media screen and (max-width: $small-mobile) {
    font-size: 2.5em;
  };
}

// transition class

.fadeTxt-enter-active, .fadeTxt-leave-active {
  transition: all .4s;
}

.fadeTxt-enter, .fadeTxt-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-50%, 100px);
}

// animations

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
</style>
