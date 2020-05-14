<template>
  <article>
    <div>
    <img :src="project.preview.desktop">
    <img v-if="project.preview.mobile" :src="project.preview.mobile">
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
</style>
