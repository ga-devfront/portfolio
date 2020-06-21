<template>
    <article :id="'card'+techno.path">
      <header>
        <div class="icon" v-html="techno.svg">
        </div>
        <h3>{{$t(`skills.${techno.path}.name`)}}</h3>
      </header>
      <body>
        <SkillRate :level="techno.level"/>
        <p>
          <span class="title">{{$t('skills.details')}} :</span>
          {{$t(`skills.${techno.path}.description`)}}
        </p>
      </body>
    </article>
</template>

<script>
import SkillRate from './SkillRate.vue';

export default {
  name: 'Skills',
  props: {
    techno: {
      type: Object,
      required: true,
    },
  },
  components: {
    SkillRate,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
$title-font: 'Aquawax', Arial;

article {
  box-shadow: 0 19px 50px rgb(0 0 0 / 40%);
  border: 2px solid rgb(255 255 255 / 80%);
  border-radius: 20px;
  background: linear-gradient(rgb(0 0 0 / 80%), rgb(51 51 51 / 80%));
  width: 240px;
  min-height: 100px;
}

header {
  position: relative;
  text-align: center;
  .icon {
    top: 0px;
    left: 10px;
    position: absolute;
    width: 20px;
    height: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h3 {
    font-family: $title-font;
    margin: 10px 0px;
  }
}

body {
  text-align: start;
  margin: 10px;
  font-size: 0.9em;
  .title {
    font-weight: bold;
  }
}
</style>
