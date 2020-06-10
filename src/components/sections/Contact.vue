<template>
  <section>
      <transition name="contact" mode="out-in">
        <ContactForm :key="'contact' + $store.getters.lang" class="contactAnimation"/>
      </transition>
      <transition name="social" mode="out-in">
        <SocialContact :key="'social' + $store.getters.lang" class="socialAnimation"/>
      </transition>
  </section>
</template>

<script>
import ContactForm from '../contact/ContactForm.vue';
import SocialContact from '../contact/SocialContact.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm,
    SocialContact,
  },
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
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
  @media screen and (max-width: 980px) {
    width: 90%;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: start;
    max-height: 100%;
  }
  @media screen and (max-width: 360px) {
  align-items: stretch;
  }
}

.socialAnimation {
  animation: socialEnter .8s ease-out;
}

.social-leave-active {
  transition: all .4s ease-in-out;
}

.social-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0px, 100%);
}

@keyframes socialEnter {
  0% {
    opacity: 0;
    transform: translate(0px, 100%);
  }
  100% {
    opacity: 1;
    transform: translate (0px, 0px);
  }
}

.contactAnimation {
  animation: contactEnter .8s ease-out;
}

.contact-leave-active {
  transition: all .4s ease-in-out;
}

.contact-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0px, -100%);
}

@keyframes contactEnter {
  0% {
    opacity: 0;
    transform: translate(0px, -100%);
  }
  100% {
    opacity: 1;
    transform: translate (0px, 0px);
  }
}
</style>
