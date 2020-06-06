<template>
  <section>
    <div class="container">
      <div>
        <h2 v-on:click="displaySections()">
          <svg id="contactSVG" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
          {{$store.state.Txt.contact.contact[$store.getters.lang]}}
        </h2>
        <div class="sectionGroup" id="contactForm">
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
            <svg id="topMail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 17.87">
              <path class="cls-1" d="M40,17.22a3.66,3.66,0,0,1-1.53-.33L2.31.5H77.69L41.53,16.89A3.66,3.66,0,0,1,40,17.22Z" transform="translate(0 0.15)"/>
              <path class="cls-2" d="M49.65,1H75.38L41.32,16.44a3.25,3.25,0,0,1-2.64,0L4.63,1h45M79.93-.15a.49.49,0,0,0-.25.15H80c0-.11,0-.15-.07-.15ZM.07-.14S0-.1,0,0H.31A.51.51,0,0,0,.07-.14ZM49.65,0H.31A3,3,0,0,0,.82.37l37.44,17a4.28,4.28,0,0,0,3.48,0L79.15.39A3.28,3.28,0,0,0,79.68,0Z" transform="translate(0 0.15)"/>
            </svg>
            <span id="sendTxt">{{$store.state.Txt.contact.button.send[$store.getters.lang]}}</span>
            <span id="sendedTxt">{{$store.state.Txt.contact.button.sended[$store.getters.lang]}} ✔</span>
            <svg id="bottomMail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 33.68">
              <path class="cls-1" d="M4.2,33.5A3.7,3.7,0,0,1,.5,29.8V.9A.08.08,0,0,1,.58.82l37.48,17a4.69,4.69,0,0,0,3.88,0L79.35.84h0c.07,0,.12,0,.12.1V29.8a3.7,3.7,0,0,1-3.7,3.7Z" transform="translate(0 -0.32)"/>
              <path class="cls-2" d="M1,1.55,37.85,18.26a5.25,5.25,0,0,0,4.3,0L79,1.55V29.8A3.21,3.21,0,0,1,75.8,33H4.2A3.21,3.21,0,0,1,1,29.8V1.55M.58.32A.59.59,0,0,0,0,.9V29.8A4.2,4.2,0,0,0,4.2,34H75.8A4.2,4.2,0,0,0,80,29.8V.94a.61.61,0,0,0-.6-.61.54.54,0,0,0-.25.06l-37.41,17a4.28,4.28,0,0,1-3.48,0L.82.37a.69.69,0,0,0-.24,0Z" transform="translate(0 -0.32)"/>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h2 v-on:click="displaySections()">
          <svg id="socialSVG" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/></svg>
          {{$store.state.Txt.contact.social[$store.getters.lang]}}
        </h2>
        <div class="sectionGroup" id="socials">
          <a class="social" id="linkedin" href="https://www.linkedin.com/in/alexis-guyomar/" target="_blank">
            <div class="hover">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span>Linkedin</span>
            </div>
            <div class="normal">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span>Linkedin</span>
            </div>
          </a>
          <a class="social" id="gitHub" href="https://github.com/ga-devfront/" target="_blank">
            <div class="hover">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <span>GitHub</span>
            </div>
            <div class="normal">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <span>GitHub</span>
            </div>
          </a>
          <a class="social" id="twitter" href="https://twitter.com/AGDevfrontend" target="_blank">
            <div class="hover">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </div>
              <span>Twitter</span>
            </div>
            <div class="normal">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </div>
              <span>Twitter</span>
            </div>
          </a>
          <a class="social" id="instagram" href="https://www.instagram.com/agdevfront/" target="_blank">
            <div class="hover">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </div>
              <span>Instagram</span>
            </div>
            <div class="normal">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </div>
              <span>Instagram</span>
            </div>
          </a>
          <a class="social" id="facebook" href="https://www.facebook.com/agdevfront/" target="_blank">
            <div class="hover">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                </svg>
              </div>
              <span>Facebook</span>
            </div>
            <div class="normal">
              <div class="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                </svg>
              </div>
              <span>Facebook</span>
            </div>
          </a>
        </div>
      </div>
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
      clientId: '567338671860-31rbhrrulqet4855qhej0v9n09i0e5o1.apps.googleusercontent.com',
      APIKey: 'AIzaSyBn1Ww4hBKmSeZdbUgAWqnUBZ-8yKmSaIo',
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
      }, 3000);
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
$title-font: 'Aquawax', Arial;
$error-color: #ff3f3f;
$valid-color: #17b6e3;
$twitter-color: #1DA1F2;
$github-color: #181717;
$linkedin-color: #0077B5;
$instagram-color: #E4405F;
$facebook-color: #1877F2;

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
  float: top;
  height: auto;
  position: relative;
  overflow: hidden;
  border-top: 2px solid #ffffff;
  padding-top: 10px;
  transition: all .4s;
  &.closed {
    margin-top: -200%;
    opacity: 0;
    pointer-events: none;
  }
}

section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    vertical-align: top;
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
  & ~ .input-icon {
    bottom: 30px;
  }
}

h2 {
  cursor: pointer;
  margin-bottom: 5px;
  font-family: $title-font;
  #contactSVG {
    fill: #ffffff;
    margin-bottom: -5px;
    width: 30px;
  }
  #socialSVG {
    fill: #ffffff;
    margin-bottom: -3px;
    width: 30px;
  }
}

#socials{
  display: flex;
  flex-direction: column;
  .social {
    background: #ffffff;
    text-align: center;
    text-decoration: none;
    transition: all .2s;
    padding: 0px;
    overflow: hidden;
    cursor: pointer;
    width: 340px;
    height: 45px;
    margin: 20px 0px;
    border-radius: 20px;
    border: 2px solid;
    font-size: 1em;
    font-weight: bold;
    &:focus {
      outline: none;
    }
    .normal {
      height: 45px;
      display: flex;
      align-items: center;
      transition: all .2s;
      transform-origin: bottom;
    }
    .hover {
      height: 45px;
      display: flex;
      align-items: center;
      transition: all .2s;
      transform-origin: top;
      transform: scaleY(0);
      margin-bottom: -45px;
    }
    &:hover {
      .normal {
        transform: scaleY(0);
        margin-top: -45px;
      }
      .hover {
        transform: scaleY(1);
        margin-bottom: 0px;
      }
    }
    .socialIcon {
      padding-top: 2.5%;
      height: 45px;
      width: 70px;
    }
    span {
      width: 100%;
    }
    &#linkedin {
      border-color: $linkedin-color;
      color: $linkedin-color;
      .socialIcon {
        background: $linkedin-color;
        svg {
          fill: #ffffff;
        }
      }
      .hover {
        color: #ffffff;
        background: $linkedin-color;
        .socialIcon {
          background: #ffffff;
          svg {
            fill: $linkedin-color;
          }
        }
      }
    }
    &#gitHub {
      border-color: $github-color;
      color: $github-color;
      .socialIcon {
        background: $github-color;
        svg {
          fill: #ffffff;
        }
      }
      .hover {
        color: #ffffff;
        background: $github-color;
        .socialIcon {
          background: #ffffff;
          svg {
            fill: $github-color;
          }
        }
      }
    }
    &#twitter {
      border-color: $twitter-color;
      color: $twitter-color;
      .socialIcon {
        background: $twitter-color;
        svg {
          fill: #ffffff;
        }
      }
      .hover {
        color: #ffffff;
        background: $twitter-color;
        .socialIcon {
          background: #ffffff;
          svg {
            fill: $twitter-color;
          }
        }
      }
    }
    &#instagram {
      border-color: $instagram-color;
      color: $instagram-color;
      .socialIcon {
        background: $instagram-color;
        svg {
          fill: #ffffff;
        }
      }
      .hover {
        color: #ffffff;
        background: $instagram-color;
        .socialIcon {
          background: #ffffff;
          svg {
            fill: $instagram-color;
          }
        }
      }
    }
    &#facebook {
      border-color: $facebook-color;
      color: $facebook-color;
      .socialIcon {
        background: $facebook-color;
        svg {
          fill: #ffffff;
        }
      }
      .hover {
        color: #ffffff;
        background: $facebook-color;
        .socialIcon {
          background: #ffffff;
          svg {
            fill: $facebook-color;
          }
        }
      }
    }
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

}
</style>
