<template>
<div>
  <NewsList :news="news" />
</div>
</template>

<script>
import NewsList from "../components/NewsList.vue"
export default {
  name: 'Browse',
  components: {
    NewsList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
    news(){
      return this.$root.$data.news;//.filter(activity => activity.country === this.country);
    },
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>
