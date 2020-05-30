<template>
  <section>
    <div>
      <form>
        <div class="input-group">
          <input id="subject" class="text-field" name="subject" type="text">
          <span id="subject-label" class="input-label">
            {{$store.state.Txt.contact.input.subject.title[$store.getters.lang]}}
          </span>
          <svg class="input-icon error" v-if="subjectHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon valid" v-if="subjectHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
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
          <span id="mail-label" class="input-label">
            {{$store.state.Txt.contact.input.mail.title[$store.getters.lang]}}
          </span>
          <svg class="input-icon error" v-if="mailHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon valid" v-if="mailHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
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
          <span id="text-label" class="input-label">
            {{$store.state.Txt.contact.input.text.title[$store.getters.lang]}}
          </span>
          <svg class="input-icon textarea error" v-if="textHelperState === 'error'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <svg class="input-icon textarea valid" v-if="textHelperState === 'valid'" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
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
        Envoyer
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact',
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
        return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
      }
      if (this.subjectHelperState === 'valid') {
        return this.$store.state.Txt.contact.input.valid[this.$store.getters.lang];
      }
      if (this.subjectHelperState === 'error') {
        return this.$store.state.Txt.contact.input.subject.error[this.$store.getters.lang];
      }
      return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
    },

    mailHelper() {
      if (this.mailHelperState === 'required') {
        return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
      }
      if (this.mailHelperState === 'valid') {
        return this.$store.state.Txt.contact.input.valid[this.$store.getters.lang];
      }
      if (this.mailHelperState === 'error') {
        return this.$store.state.Txt.contact.input.mail.error[this.$store.getters.lang];
      }
      return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
    },

    textHelper() {
      if (this.textHelperState === 'required') {
        return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
      }
      if (this.textHelperState === 'valid') {
        return this.$store.state.Txt.contact.input.valid[this.$store.getters.lang];
      }
      if (this.textHelperState === 'error') {
        return this.$store.state.Txt.contact.input.text.error[this.$store.getters.lang];
      }
      return this.$store.state.Txt.contact.input.required[this.$store.getters.lang];
    },

  },
  methods: {
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
        this.sendComplet();
      } else {
        sendButton.classList.add('error');
      }
    },

    sendComplet() {
      const subjectInput = document.getElementById('subject');
      const subjectLabel = document.getElementById('subject-label');
      subjectInput.value = '';
      subjectInput.classList.remove('valid');
      subjectLabel.classList.add('input-blank');
      this.subjectHelperState = 'required';

      const mailInput = document.getElementById('mail');
      const mailLabel = document.getElementById('mail-label');
      mailInput.value = '';
      mailInput.classList.remove('valid');
      mailLabel.classList.add('input-blank');
      this.mailHelperState = 'required';

      const textInput = document.getElementById('text');
      const textLabel = document.getElementById('text-label');
      textInput.value = '';
      textInput.classList.remove('valid');
      textLabel.classList.add('input-blank');
      this.textHelperState = 'required';
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
      const testMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
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

section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

textarea#text {
  height: 300px;
  font-family: Arial;
  resize: none;
  padding: {
    top: 10px;
    bottom: 10px;
  };
  & ~ .input-icon {
    bottom: 30px;
  }
}

#sendMessage {
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
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &.error {
    color: $error-color;
    border: 2px solid $error-color;
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
}
</style>
