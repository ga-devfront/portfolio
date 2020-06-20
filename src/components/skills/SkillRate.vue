<template>
  <aside :class="'level'+level">
    <div v-for="(element, elementName) in [1, 2, 3]" class="circle" :key="elementName">
      <div class="point" v-if="level > elementName">
      </div>
    </div>
    <span>{{$t(`skills.level.${level}`)}}</span>
  </aside>
</template>

<script>

export default {
  name: 'Skills',
  props: {
    level: {
      type: Number,
      required: true,
    },
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
$basics-color: #fab600;
$fluency-color: #00bcfa;
$proficiency-color: #00fa8d;

aside {
  display: flex;
}

span {
  font-size: 0.9em;
  font-weight: bold;
  margin: {
    top: 2.5px;
    left: 5px;
  }
}

.circle {
  margin: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: solid 2px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.point {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffffff;
}

.level1 {
  color: $basics-color;
  .circle {
    border-color: $basics-color;
  }
  .point {
    background: $basics-color;
  }
}

.level2 {
  color: $fluency-color;
  .circle {
    border-color: $fluency-color;
  }
  .point {
    background: $fluency-color;
  }
}

.level3 {
  color: $proficiency-color;
  .circle {
    border-color: $proficiency-color;
  }
  .point {
    background: $proficiency-color;
  }
}
</style>
