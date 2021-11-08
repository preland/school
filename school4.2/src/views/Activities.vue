<template>
<div>
  <!--- <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Canada</a></li>
      <li class="pure-menu-item"><a @click="select('Mexico')" href="#" class="pure-menu-link">Mexico</a></li>
      <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li>
    </ul>
  </div>
  <ProductList :products="products" /> --->
  <ActivityList :activities="activities" />
</div>
</template>

<script>

import ActivityList from "../components/ActivityList.vue"
export default {
  name: 'Browse',
  components: {
    ActivityList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
        //return 0;
      return this.$root.$data.products.filter(product => product.country === this.country);
    },
    activities(){
      return this.$root.$data.activities;//.filter(activity => activity.country === this.country);
    },
  },
  methods: {
    select(country) {
      this.country = country;
    },

  }
}
</script>
