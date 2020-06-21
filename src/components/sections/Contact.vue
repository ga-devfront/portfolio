<template>
  <section>
      <transition name="contact" mode="out-in">
        <ContactForm
        :key="'contact' + $i18n.locale"
        class="contactAnimation"
        :display="displayContact"
        v-on:switchDisplay="displayComponents"/>
      </transition>
      <transition name="social" mode="out-in">
        <SocialContact
        :key="'social' + $i18n.locale"
        class="socialAnimation"
        :display="displaySocial"
        v-on:switchDisplay="displayComponents"/>
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
      displayContact: 'open',
      displaySocial: 'closed',
    };
  },
  computed: {
  },
  methods: {
    displayComponents() {
      if (this.displayContact === 'open') {
        this.displayContact = 'closed';
      } else {
        this.displayContact = 'open';
      }
      if (this.displaySocial === 'closed') {
        this.displaySocial = 'open';
      } else {
        this.displaySocial = 'closed';
      }
    },
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
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: start;
    max-height: 100%;
  }
  @media screen and (max-width: 360px) {
  align-items: center;
  }
}

.socialAnimation {
  animation: socialEnter .4s ease-out;
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
  animation: contactEnter .4s ease-out;
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
