<template>
  <section>
      <article id="description">
        <transition name="fadeTxt0" mode="out-in">
        <h1 class="txt0" :key="'title-' + $store.getters.lang">
          {{$store.state.Txt.about.title[$store.getters.lang]}}
        </h1>
        </transition>
        <p>
          <template
          v-for="(paragraph, index) in $store.state.Txt.about.paragraph[$store.getters.lang]"
          >
            <transition v-bind:name="'fadeTxt' + index" mode="out-in">
              <span
              :key="index + $store.getters.lang"
              v-bind:class="'txt' + index"
              >
                {{paragraph}}<br>
              </span>
            </transition>
          </template>
        </p>
      </article>
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
$txt-width: 450px;
$title-font: 'Aquawax', Arial;
$tablet: 1024px;
$mobile: 500px;
$small-mobile: 380px;

section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  width: $txt-width;
  margin: 0px;
  font-family: $title-font;
  font-size: 4em;
  @media screen and (max-width: $mobile) {
    font-size: 3em;
    width: 100%;
  }
  @media screen and (max-width: $small-mobile) {
    font-size: 2.2em;
  }
  @media screen and (max-height: 500px) {
    font-size: 1.5em;
  }
}

p {
  font-size: 0.9em;
  letter-spacing: 0.05em;
  @media screen and (max-width: $tablet) {
    font-size: 1em;
  }
  @media screen and (max-width: $small-mobile) {
    font-size: 0.8em;
  }
  @media screen and (max-height: 700px) {
    font-size: 0.8em;
  }
    span {
      display: block;
      width: $txt-width;
      @media screen and (max-width: $mobile) {
        width: 100%;
      }
      @media screen and (max-height: 700px) {
        width: 100%;
      }
    }
}

#description {
  width: $txt-width;
  @media screen and (max-width: $mobile) {
    width: 80%;
  }
  @media screen and (max-height: 700px) {
    width: 95%;
  }
}

@for $i from 0 through 6 {
  .txt#{$i}{
    animation: {
      name: enterLeft;
      duration: ($i * .2s) + .8s;
      timing-function: ease-in-out;
    };
  }
  .fadeTxt#{$i}-leave-active {
    animation: {
      name: LeftTransition;
      duration: ($i * .2s) + .8s;
      timing-function: ease-in-out;
      direction: reverse;
    };
  }
}

img {
  margin-left: 20px;
  @media screen and (min-width: $tablet) {
    animation: enterRight 0.8s;
  }
  @media screen and (max-width: $tablet) {
    animation: enterRightMobile 0.8s;
    position: absolute;
    left: 40%;
    z-index: -1;
    opacity: .3;
  }
  @media screen and (max-width: $mobile) {
    left: 100px;
  }
  @media screen and (max-width: $small-mobile) {
    left: 10%;
  }
  @media screen and (max-height: 500px) {
    top: 5%;
  }
}

div {
  display: inline;
}

@keyframes enterLeft {
  0% {
    opacity: 0;
    margin-left: -50%;
  }

  20% {
    opacity: 0;
    margin-left: -50%
  }

  100% {
    opacity: 1;
    margin-left: 0px;
  }
}

@keyframes LeftTransition {
  0% {
    opacity: 0;
    margin-left: -50%;
  }

  50% {
    opacity: 0;
    margin-left: -50%;
  }

  100% {
    opacity: 1;
    margin-left: 0px;
  }
}

@keyframes enterRight {
  0% {
    opacity: 0;
    margin-left: 50%;
  }

  50% {
    opacity: 0;
    margin-left: 50%;
  }

  100% {
    opacity: 1;
    margin-left: 20px;
  }
}

@keyframes enterRightMobile {
  0% {
    opacity: 0;
    margin-left: 50%;
  }

  50% {
    opacity: 0;
    margin-left: 50%;
  }

  100% {
    opacity: .3;
    margin-left: 20px;
  }
}
</style>
