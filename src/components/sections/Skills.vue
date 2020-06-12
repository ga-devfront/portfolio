<template>
<!-- eslint-disable max-len -->
  <section>
    <table v-for="(section, sectionName) in Tree.skillTree" :key="Listing[sectionName].name[$store.getters.lang]">
      <tr class="firstTr">
        <td>
        <th>
          {{Listing[sectionName].name[$store.getters.lang]}}
        </th>
          <tr class="child">
            <td v-for="(child, childName) in section" :key="Listing[childName].name[$store.getters.lang]">
              <div v-html="Listing[childName].svg">
              </div>
              <th>
              {{Listing[childName].name[$store.getters.lang]}}
              </th>
              <tr class="grandchild">
                <td v-for="grandchild in child" :key="Listing[grandchild].name[$store.getters.lang]" class="techno" :id="Listing[grandchild].name.en">
                  <div class="icon" v-html="Listing[grandchild].svg">
                  </div>
                  <SkillCard class="skillCard" :techno="Listing[grandchild]" :style="positionSkillCard(Listing[grandchild].name.en)"/>
                </td>
              </tr>
            </td>
          </tr>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import Tree from '../skills/Tree.vue';
import Listing from '../skills/Listing.vue';
import SkillCard from '../skills/SkillCard.vue';

export default {
  name: 'Skills',
  components: {
    SkillCard,
  },
  data() {
    return {
      Tree,
      Listing,
    };
  },
  computed: {
  },
  methods: {
    positionSkillCard(idGrandChild) {
      const windowHeigth = window.innerHeight;
      const windowWidth = window.innerWidth;
      const grandChild = document.getElementById(idGrandChild);
      let transformX = 0;
      let transformY = 0;
      if (grandChild !== null) {
        const leftGrandChild = grandChild.offsetLeft;
        const topGrandChild = grandChild.offsetTop;
        const sizeGrandChild = 40;
        const widthSkillCard = 240;
        const skillCard = document.getElementById(`card${idGrandChild}`);
        const heigthSkillCard = skillCard.offsetHeight;
        const calcLeft = leftGrandChild + (sizeGrandChild / 2) - (widthSkillCard / 2);
        if (calcLeft < 0) {
          transformX = Math.abs(calcLeft);
        }
        const calcRight = leftGrandChild + (sizeGrandChild / 2) + (widthSkillCard / 2) + 10;
        if (calcRight > windowWidth) {
          transformX = windowWidth - calcRight;
        }
        const calcTop = topGrandChild + (sizeGrandChild / 2) + (heigthSkillCard) + 5;
        if (calcTop > windowHeigth) {
          transformY = windowHeigth - calcTop;
        }
      }
      return `transform: translate(${transformX}px, ${transformY}px)`;
    },
  },
};
</script>

<style lang="scss" scoped>
$title-font: 'Aquawax', Arial;
$icon-size: 40px;

.techno {
  position: relative;
  .icon {
  width: $icon-size;
  height: $icon-size;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  }
  .skillCard {
    top: 20px;
    position: absolute;
    pointer-events: none;
    opacity: 0;
    z-index: 1;
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    .skillCard {
      opacity: 1;
    }
  }
  &:focus {
    .skillCard {
      opacity: 1;
    }
  }
}


section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: start;
    max-height: 100%;
  }
  @media screen and (max-width: 360px) {
  align-items: center;
  }
}

tr {
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
  border: 2px solid #ffffff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  &.firstTr {
    border: none;
    max-width: content;
  }
  &.child {
    border-width: 2px 0px 0px 0px;
    max-width: content;
  }
  &.grandchild {
    border-width: 2px 0px 0px 0px;
    background: rgb(255 255 255 / 20%);
    transition: all 0.2s ease-in-out;
    &:hover {
      background: rgb(255 255 255 / 50%);
    }
  }
}

td {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 4px;
  text-align: center;
}

th {
  font-family: $title-font;
  max-width: 100%;
  text-align: center;
}
</style>
