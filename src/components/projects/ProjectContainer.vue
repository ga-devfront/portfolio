<template>
  <article>
    <div id="mokups">
      <img id="desktop" :src="project.preview.desktop" alt="desktop project mokup">
      <img
      id="mobile"
      v-if="project.preview.mobile"
      :src="project.preview.mobile"
      alt="mobile project mokup"
      >
    </div>
    <div id="description">
      <img id="logo" :src="project.logo" :alt="project[$store.getters.lang].name + ' logo'">
      <p>{{project[$store.getters.lang].type}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectContainer',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
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
article {
  display: flex;
  justify-content: space-around;
  vertical-align: middle;
  width: 900px;
  height: 500px;
}

#mokups {
  position: relative;
  top: 50%;
  width: max-content;
  #desktop {
    position: relative;
    transform: translate(0, -50%);
  }
  #mobile {
    position: relative;
    transform: translate(0, -50%);
    left: -70px;
    bottom: -10px;
  }
}

#description {
  position: relative;
  top: 50%;
  #logo {
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
