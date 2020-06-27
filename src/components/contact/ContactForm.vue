<template>
<!-- eslint-disable max-len -->
  <div>
    <h2 v-on:click="$emit('switchDisplay');">
      <svg id="contactSVG" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28">
        <title>contact icon</title>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
      </svg>
      {{$t("contact.contact")}}
    </h2>
    <div :class="'sectionGroup ' + display" id="contactForm">
      <form>
        <div class="input-group">
          <input id="subject" class="text-field" name="subject" type="text">
          <label id="subject-label" class="input-label" for="subject">
            {{$t("contact.input.subject.title")}}
          </label>
          <svg class="input-icon error" v-if="subjectHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>error icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon valid" v-if="subjectHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>valid icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/>
          </svg>
          <transition name="switchHelper" mode="out-in">
            <span :key="subjectHelper" id="subject-helper" class="input-helper">
              {{subjectHelper}}
            </span>
          </transition>
        </div>
        <div class="input-group">
          <input id="mail" class="text-field" name="mail" type="email">
          <label id="mail-label" class="input-label" for="mail">
            {{$t("contact.input.mail.title")}}
          </label>
          <svg class="input-icon error" v-if="mailHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>error icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon valid" v-if="mailHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>valid icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/>
          </svg>
          <transition name="switchHelper" mode="out-in">
            <span :key="mailHelper" id="mail-helper" class="input-helper">
              {{mailHelper}}
            </span>
          </transition>
        </div>
        <div class="input-group">
          <textarea id="text" name="text" class="text-field">
          </textarea>
          <label id="text-label" class="input-label" for="text">
            {{$t("contact.input.text.title")}}
          </label>
          <svg class="input-icon textarea error" v-if="textHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>error icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon textarea valid" v-if="textHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <title>valid icon</title>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/>
          </svg>
          <transition name="switchHelper" mode="out-in">
            <span :key="textHelper" id="text-helper" class="input-helper">
              {{textHelper}}
            </span>
          </transition>
        </div>
      </form>
      <button id="sendMessage" @click="sendMail">
        <svg id="topMail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 17.87">
          <title>top mail icon</title>
          <path class="cls-1" d="M40,17.22a3.66,3.66,0,0,1-1.53-.33L2.31.5H77.69L41.53,16.89A3.66,3.66,0,0,1,40,17.22Z" transform="translate(0 0.15)"/>
          <path class="cls-2" d="M49.65,1H75.38L41.32,16.44a3.25,3.25,0,0,1-2.64,0L4.63,1h45M79.93-.15a.49.49,0,0,0-.25.15H80c0-.11,0-.15-.07-.15ZM.07-.14S0-.1,0,0H.31A.51.51,0,0,0,.07-.14ZM49.65,0H.31A3,3,0,0,0,.82.37l37.44,17a4.28,4.28,0,0,0,3.48,0L79.15.39A3.28,3.28,0,0,0,79.68,0Z" transform="translate(0 0.15)"/>
        </svg>
        <span id="sendTxt">{{$t("contact.button.send")}}</span>
        <span id="sendedTxt">{{$t("contact.button.sended")}} ✔</span>
        <svg id="bottomMail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 33.68">
          <title>bottom mail icon</title>
          <path class="cls-1" d="M4.2,33.5A3.7,3.7,0,0,1,.5,29.8V.9A.08.08,0,0,1,.58.82l37.48,17a4.69,4.69,0,0,0,3.88,0L79.35.84h0c.07,0,.12,0,.12.1V29.8a3.7,3.7,0,0,1-3.7,3.7Z" transform="translate(0 -0.32)"/>
          <path class="cls-2" d="M1,1.55,37.85,18.26a5.25,5.25,0,0,0,4.3,0L79,1.55V29.8A3.21,3.21,0,0,1,75.8,33H4.2A3.21,3.21,0,0,1,1,29.8V1.55M.58.32A.59.59,0,0,0,0,.9V29.8A4.2,4.2,0,0,0,4.2,34H75.8A4.2,4.2,0,0,0,80,29.8V.94a.61.61,0,0,0-.6-.61.54.54,0,0,0-.25.06l-37.41,17a4.28,4.28,0,0,1-3.48,0L.82.37a.69.69,0,0,0-.24,0Z" transform="translate(0 -0.32)"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactForm',
  props: {
    display: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      subjectInput: false,
      subjectHelperState: 'required',
      mailInput: false,
      mailHelperState: 'required',
      textInput: false,
      textHelperState: 'required',
    };
  },
  computed: {
    subjectHelper() {
      if (this.subjectHelperState === 'required') {
        return this.$t('contact.input.required');
      }
      if (this.subjectHelperState === 'valid') {
        return this.$t('contact.input.valid');
      }
      if (this.subjectHelperState === 'error') {
        return this.$t('contact.input.subject.error');
      }
      return this.$t('contact.input.required');
    },

    mailHelper() {
      if (this.mailHelperState === 'required') {
        return this.$t('contact.input.required');
      }
      if (this.mailHelperState === 'valid') {
        return this.$t('contact.input.valid');
      }
      if (this.mailHelperState === 'error') {
        return this.$t('contact.input.mail.error');
      }
      return this.$t('contact.input.required');
    },

    textHelper() {
      if (this.textHelperState === 'required') {
        return this.$t('contact.input.required');
      }
      if (this.textHelperState === 'valid') {
        return this.$t('contact.input.valid');
      }
      if (this.textHelperState === 'error') {
        return this.$t('contact.input.text.error');
      }
      return this.$t('contact.input.required');
    },
  },
  methods: {
    displaySections() {
      const contact = document.getElementById('contactForm');
      const social = document.getElementById('socials');
      contact.classList.toggle('closed');
      social.classList.toggle('closed');
    },

    sendMail() {
      const subjectInput = document.getElementById('subject');
      const subjectLabel = document.getElementById('subject-label');
      if (!this.subjectInput) {
        subjectLabel.classList.add('movementError');
        subjectLabel.classList.add('input-blank');
        subjectInput.classList.add('error');
        this.subjectHelperState = 'error';
        window.setTimeout(() => {
          subjectLabel.classList.remove('movementError');
        }, 300);
      }

      const mailInput = document.getElementById('mail');
      const mailLabel = document.getElementById('mail-label');
      if (!this.mailInput) {
        mailLabel.classList.add('movementError');
        mailLabel.classList.add('input-blank');
        mailInput.classList.add('error');
        this.mailHelperState = 'error';
        window.setTimeout(() => {
          mailLabel.classList.remove('movementError');
        }, 300);
      }

      const textInput = document.getElementById('text');
      const textLabel = document.getElementById('text-label');
      if (!this.textInput) {
        textLabel.classList.add('movementError');
        textLabel.classList.add('input-blank');
        textInput.classList.add('error');
        this.textHelperState = 'error';
        window.setTimeout(() => {
          textLabel.classList.remove('movementError');
        }, 300);
      }

      const sendButton = document.getElementById('sendMessage');
      if (this.subjectInput && this.mailInput && this.textInput) {
        sendButton.classList.remove('error');
        this.submitMail();
      } else {
        sendButton.classList.add('error');
      }
    },

    submitMail() {
      const emailValue = document.getElementById('mail').value;
      const subjectValue = document.getElementById('subject').value;
      const messageValue = document.getElementById('text').value;
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://ag-dev.fr/mailform.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.sendComplet();
        }
      };
      xhr.send(JSON.stringify({
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      }));
    },

    sendComplet() {
      const sendButton = document.getElementById('sendMessage');
      sendButton.classList.add('sended');
      window.setTimeout(() => {
        this.resetAll();
      }, 3000);
    },

    resetAll() {
      const sendButton = document.getElementById('sendMessage');
      sendButton.classList.remove('sended');
      const subjectInput = document.getElementById('subject');
      const subjectLabel = document.getElementById('subject-label');
      subjectInput.value = '';
      subjectInput.classList.remove('valid');
      subjectLabel.classList.add('input-blank');
      this.subjectHelperState = 'required';
      this.subjectInput = false;

      const mailInput = document.getElementById('mail');
      const mailLabel = document.getElementById('mail-label');
      mailInput.value = '';
      mailInput.classList.remove('valid');
      mailLabel.classList.add('input-blank');
      this.mailHelperState = 'required';
      this.mailInput = false;

      const textInput = document.getElementById('text');
      const textLabel = document.getElementById('text-label');
      textInput.value = '';
      textInput.classList.remove('valid');
      textLabel.classList.add('input-blank');
      this.textHelperState = 'required';
      this.textInput = false;
    },

  },
  mounted() {
    const subjectInput = document.getElementById('subject');
    const subjectLabel = document.getElementById('subject-label');
    subjectLabel.classList.add('input-blank');

    const mailInput = document.getElementById('mail');
    const mailLabel = document.getElementById('mail-label');
    mailLabel.classList.add('input-blank');

    const textInput = document.getElementById('text');
    const textLabel = document.getElementById('text-label');
    textLabel.classList.add('input-blank');

    subjectInput.addEventListener('input', (evt) => {
      if (evt.target.value.length <= 3) {
        this.subjectInput = false;

        subjectLabel.classList.add('input-blank');

        subjectInput.classList.add('error');

        this.subjectHelperState = 'error';
      } else {
        this.subjectInput = true;

        subjectLabel.classList.remove('input-blank');

        subjectInput.classList.add('valid');
        subjectInput.classList.remove('error');

        this.subjectHelperState = 'valid';
      }
    });

    mailInput.addEventListener('input', () => {
      // eslint-disable-next-line
      const testMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/8=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if (!testMail.test(mailInput.value)) {
        this.mailInput = false;

        mailLabel.classList.add('input-blank');

        mailInput.classList.add('error');

        this.mailHelperState = 'error';
      } else {
        this.mailInput = true;

        mailLabel.classList.remove('input-blank');

        mailInput.classList.add('valid');
        mailInput.classList.remove('error');

        this.mailHelperState = 'valid';
      }
    });

    textInput.addEventListener('input', (evt) => {
      if (evt.target.value.length <= 10) {
        this.textInput = false;

        textLabel.classList.add('input-blank');

        textInput.classList.add('error');

        this.textHelperState = 'error';
      } else {
        this.textInput = true;

        textLabel.classList.remove('input-blank');

        textInput.classList.add('valid');
        textInput.classList.remove('error');

        this.textHelperState = 'valid';
      }
    });
  },
};
</script>

<style lang="scss" scoped>
$title-font: 'Aquawax Pro DemiBold', Arial;
$error-color: #ff3f3f;
$valid-color: #17b6e3;

@function stroke($stroke, $color) {
  $shadow: ();
  $from: $stroke*-1;
  @for $i from $from through $stroke {
  @for $j from $from through $stroke {
      $shadow: append($shadow, $i*1px $j*1px 0 $color, comma);
    }
  }
  @return $shadow;
}

@mixin border-font($stroke, $color) {
  text-shadow: stroke($stroke, $color);
}

.sectionGroup {
  transition: all .2s ease-in-out;
  transform-origin: top;
    @media screen and (max-width: 760px) {
      &.open {
        opacity: 1;
        transform: scaleY(1);
    }
      &.closed {
        margin-top: -100%;
        opacity: 0;
        transform: scaleY(0);
        pointer-events: none;
      }
    }
}

textarea#text {
  height: 300px;
  font-family: Arial;
  resize: none;
  padding: {
    top: 10px;
    bottom: 10px;
  };
  @media screen and (max-width: 360px) {
    height: 180px;
  }
  & ~ .input-icon {
    bottom: 30px;
  }
}

h2 {
  cursor: pointer;
  margin-bottom: 5px;
  font-family: $title-font;
  border-bottom: 2px solid #ffffff;
  @media screen and (max-width: 360px) {
    font-size: 1.3em;
  }
  #contactSVG {
    fill: #ffffff;
    margin-bottom: -5px;
    width: 30px;
  }
}

#sendMessage {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  width: 340px;
  height: 2.5rem;
  margin: {
    top: 10px;
    left: auto;
    right: auto;
  };
  border: 2px solid #525252;
  border-radius: 20px;
  color: #525252;
  font-weight: bold;
  transition: all .2s;
  @media screen and (max-width: 360px) {
      width: 280px;
    }
  &.sended {
    animation: sendCompletButton 3s;
    #sendTxt {
      animation: sendCompletSendTxt 3s;
    }
    #bottomMail {
      animation: sendCompletBottomMail 3s;
    }
    #topMail {
      animation: sendCompletTopMail 3s;
    }
    #sendedTxt {
      animation: sendCompletSendedTxt 3s;
    }
  }
  &:hover {
    cursor: pointer;
    span {
      font-size: 0.9em;
    }
  }
  &:focus {
    outline: none;
  }
  &.error {
    color: $error-color;
    border: 2px solid $error-color;
  }
  #sendedTxt {
    transition: all 0.2s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: $valid-color;
  }
  #sendTxt {
    transition: all 0.2s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #bottomMail {
    z-index: 1;
    position: absolute;
    width: 80px;
    height: 34px;
    left: 50%;
    bottom: -100%;
    transform: translate(-50%);
    .cls-1{
      fill:#fff;
    }
    .cls-2{
      fill:#525252;
    }
  }
  #topMail {
    z-index: 1;
    position: absolute;
    width: 80px;
    height: 18px;
    left: 50%;
    top: -100%;
    transform: translate(-50%);
    .cls-1{
      fill:#ffffff;
    }
    .cls-2{
      fill:#525252;
    }
  }
}

.input-group {
  position: relative;
  .input-icon {
    position: absolute;
    right: 15px;
    bottom: 22px;
    &.valid {
      fill: $valid-color;
    }
    &.error {
      fill: $error-color;
    }
  }
  .text-field {
    color: #525252;
    border: none;
    border-radius: 20px;
    margin: {
      top: 10px;
      bottom: 15px;
      left: auto;
      right: auto;
    }
    padding: 0px 20px;
    width: 300px;
    @media screen and (max-width: 360px) {
      width: 240px;
    }
    height: 2rem;
    background: #c6c6c6;
    transition: all .2s;
    &#text {
      &~ .input-blank {
        top: 30px;
      }
    }
    &:focus {
      outline: none;
      background: #ffffff;
    }
    &#text.valid, &.valid {
      border: 2px solid $valid-color;
      background: #ffffff;
      & ~ .input-label {
        color: $valid-color;
        top: 10px;
        transform: translate(0, -50%);
        font-weight: bold;
        font-size: 0.8em;
        @include border-font(1, #ffffff)
      }
      & ~ .input-helper {
        color: $valid-color;
      }
    }
    &#text.error, &.error {
      border: 2px solid $error-color;
      background: #ffffff;
      & ~ .input-label {
        color: $error-color;
        top: 10px;
        transform: translate(0, -50%);
        font-weight: bold;
        font-size: 0.8em;
        @include border-font(1, #ffffff)
      }
      & ~ .input-helper {
        color: $error-color;
      }
    }
  }
}

.input-blank {
    font-size: 13.3333px;
    pointer-events: none;
    color: #535353;
    top: calc(50% - 3px);
    transform: translate(0, -50%);
  }

.input-label {
    position: absolute;
    transition: all .2s;
    left: 20px;
  }

.input-helper {
  z-index: -1;
  transition: all .2s;
  position: absolute;
  bottom: 0px;
  left: 15px;
  font-size: 0.7em;
  font-weight: bold;
  }

.movementError {
    animation: error .3s;
  }

.switchHelper-enter-active, .switchHelper-leave-active {
  transition: all .2s;
}

.switchHelper-enter {
  bottom: 20px;
}

.switchHelper-leave-to {
  bottom: 20px;
}

@keyframes error {
  0% {
    left: 20px;
  }
  25% {
    left: 25px;
  }
  50% {
    left: 20px;
  }
  75% {
    left: 25px;
  }
  100% {
    left: 20px;
  }
}

@keyframes sendCompletBottomMail {
  0% {
    bottom: -100%;
  }
  20% {
    bottom: 1px;
  }
  40% {
    left: 50%
  }
  80% {
    bottom: 1px;
    left: 150%;
    opacity: 1;
  }
  99% {
    bottom: 1px;
    left: 150%;
    opacity: 0;
  }
  100% {
    bottom: -100%;
    left: 50%;
    opacity: 0;
  }
}

@keyframes sendCompletTopMail {
  0% {
    top: -100%;
  }
  20% {
    top: 1px;
  }
  40% {
    left: 50%
  }
  80% {
    top: 1px;
    left: 150%;
    opacity: 1;
  }
  99% {
    opacity: 0;
    top: 1px;
    left: 150%;
  }
  100% {
    top: -100%;
    left: 50%;
    opacity: 0;
  }
}

@keyframes sendCompletSendTxt {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes sendCompletSendedTxt {
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sendCompletButton {
  40% {
    border-color: #525252;
  }
  60% {
    border-color: $valid-color;
  }
  80% {
    border-color: $valid-color;
  }
  85% {
    border-color: #525252;
  }
}
</style>
