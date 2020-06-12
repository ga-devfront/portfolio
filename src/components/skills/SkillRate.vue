<template>
  <aside :class="$store.state.Txt.skills.level[level].en">
    <div v-for="(element, elementName) in [1, 2, 3]" class="circle" :key="elementName">
      <div class="point" v-if="level > elementName">
      </div>
    </div>
    <span>{{$store.state.Txt.skills.level[level][$store.getters.lang]}}</span>
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

.basics {
  color: $basics-color;
  .circle {
    border-color: $basics-color;
  }
  .point {
    background: $basics-color;
  }
}

.fluency {
  color: $fluency-color;
  .circle {
    border-color: $fluency-color;
  }
  .point {
    background: $fluency-color;
  }
}

.proficiency {
  color: $proficiency-color;
  .circle {
    border-color: $proficiency-color;
  }
  .point {
    background: $proficiency-color;
  }
}
</style>
