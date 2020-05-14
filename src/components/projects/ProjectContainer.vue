<template>
  <article>
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
