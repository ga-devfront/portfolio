<template>
<!-- eslint-disable max-len -->
  <section>
    <table>
      <tr>
        <th>
          {{Listing.developper.name[$store.getters.lang]}}
          <tr>
            <td v-for="child in Listing.developper.child" :key="child.name">
              {{child.name[$store.getters.lang]}}
              <tr v-if="child.child">
                <td v-for="grandchild in child.child" :key="grandchild.name">
                  {{grandchild.name[$store.getters.lang]}}
                </td>
              </tr>
            </td>
          </tr>
        </th>
      </tr>
    </table>
    <table>
      <tr>
        <th>
          {{Listing.integration.name[$store.getters.lang]}}
          <tr>
            <td v-for="child in Listing.integration.child" :key="child.name">
              {{child.name[$store.getters.lang]}}
              <tr v-if="child.child">
                <td v-for="grandchild in child.child" :key="grandchild.name">
                  {{grandchild.name[$store.getters.lang]}}
                </td>
              </tr>
            </td>
          </tr>
        </th>
      </tr>
    </table>
    <table>
      <tr>
        <th>
          {{Listing.tools.name[$store.getters.lang]}}
          <tr>
            <td v-for="child in Listing.tools.child" :key="child.name">
              {{child.name[$store.getters.lang]}}
              <tr v-if="child.child">
                <td v-for="grandchild in child.child" :key="grandchild.name">
                  {{grandchild.name[$store.getters.lang]}}
                </td>
              </tr>
            </td>
          </tr>
        </th>
      </tr>
    </table>
  </section>
</template>

<script>
import Listing from '../skills/Listing.vue';

export default {
  name: 'Skills',
  data() {
    return {
      Listing,
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
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
  margin: 2px;
  border: 2px solid #ffffff;
  border-radius: 25px;
  display: flex;
}

td {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 4px;
  text-align: center;
}

th {
  width: 100%;
  text-align: center;
}
</style>
