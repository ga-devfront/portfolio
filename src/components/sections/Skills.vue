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
                <td v-for="grandchild in child" :key="Listing[grandchild].name[$store.getters.lang]">
                  <div class="icon" v-html="Listing[grandchild].svg">
                  </div>
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

export default {
  name: 'Skills',
  data() {
    return {
      Tree,
      Listing,
    };
  },
  computed: {
    test() {
      return Tree.skillTree.developper;
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
$title-font: 'Aquawax', Arial;

.icon {
  width: 40px;
  height: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
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
  &.firstTr {
    border: none;
    max-width: content;
  }
  &.child {
    border-width: 2px 0px 0px 0px;
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
