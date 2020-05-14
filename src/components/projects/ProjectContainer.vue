<template>
  <article>
    <div id="mokups">
    <img id="desktop" :src="project.preview.desktop">
    <img id="mobile" v-if="project.preview.mobile" :src="project.preview.mobile">
    </div>
    <div>
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
  width: 900px;
  height: 500px;
  background: aqua;
}

#mokups {
  position: relative;
  width: max-content;
  top: 50%;
  left: 0px;
  transform: translate(0px, -50%);
  #desktop {
    position: relative;
    left: 20px;
  };
  #mobile {
    position: relative;
    left: -50px;
    bottom: -10px;
  }
}
</style>
