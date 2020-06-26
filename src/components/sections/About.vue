<template>
  <section>
      <article id="description">
        <transition name="fadeTxt0" mode="out-in">
        <h1 class="txt0" :key="$t('about.title')">
          {{$t("about.title")}}
        </h1>
        </transition>
        <p>
          <template
          v-for="(paragraph, index) in $t('about.paragraph')"
          >
            <transition v-bind:name="'fadeTxt' + index" mode="out-in" :key="'fadeTxt' + index">
              <span
              :key="index + $i18n.locale"
              v-bind:class="'txt' + index"
              v-html="paragraph">
              <br>
              </span>
            </transition>
          </template>
        </p>
      </article>
    <figure>
      <img src="../../../public/img/about-picture.png" alt="picture">
      <figcaption><a href="https://www.instagram.com/non_creation/?hl=fr" target="_blank" rel="noopener">@non_creation</a></figcaption>
    </figure>
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
$title-font: 'Aquawax Pro DemiBold', Arial;
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
  line-height: 1.5em;
  @media screen and (max-width: $tablet) {
    font-size: 1em;
  }
  @media screen and (max-width: $small-mobile) {
    font-size: 0.8em;
    line-height: 1.2em;
  }
  @media screen and (max-height: 700px) {
    font-size: 0.8em;
    line-height: 1.2em;
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

@for $i from 0 through 5 {
  .txt#{$i}{
    animation: {
      name: enterLeft;
      duration: ($i * .2s) + .4s;
      timing-function: ease-in-out;
    };
  }
  .fadeTxt#{$i}-leave-active {
    animation: {
      name: LeftTransition;
      duration: ($i * .2s) + .4s;
      timing-function: ease-in-out;
      direction: reverse;
    };
  }
}

figure {
  position: relative;
  @media screen and (min-width: $tablet) {
    animation: enterRight 0.4s;
  }
  @media screen and (max-width: $tablet) {
    animation: enterRightMobile 0.4s;
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
  img {
    margin-left: 40px;
  filter: drop-shadow(30px -10px 20px rgb(0 0 0 / 30%));
  }
  figcaption {
    position: absolute;
    bottom: 22%;
    right: -60px;
    transform: rotate(-90deg);
    @media screen and (max-width: $tablet) {
      display: none;
    }
    font-size: 0.7em;
    opacity: 0.7;
    a {
      color: #ffffff;
      text-decoration: none;
    }
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
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
