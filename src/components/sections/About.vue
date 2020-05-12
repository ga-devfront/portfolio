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
$tablet: 820px;
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
}

p {
  font-size: 0.9em;
  letter-spacing: 0.05em;
    span {
      display: block;
      width: $txt-width;
    }
}

#description {
  width: $txt-width;
  height: 470px;
}

@for $i from 0 through 6 {
  .txt#{$i}{
    animation: {
      name: enterLeft;
      duration: ($i * .2s) + .8s;
    };
  }
  .fadeTxt#{$i}-leave-active {
    animation: {
      name: LeftTransition;
      duration: ($i * .2s) + .8s;
      direction: reverse;
    };
  }
}

img {
  animation: enterRight 0.8s;
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
    margin-right: 0px;
  }
}
</style>
