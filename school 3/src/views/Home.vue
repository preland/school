<template>
<div>
  <!--- <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <ProductList :products="products" /> --->
  <h2>Help us elect our new student body president!</h2>
  <div class="wrapper">
    <div class= "cand">
      <img class= "candi" src="/images/candidate1.png">
      <div class= "desc">Amanda Generic</div>
      <div class= "desc2">She isn't much, but she's all we have.</div>
      <div class= "desc2">Current Votes: {{num1}}</div>
      <button v-on:click="addVote(1)" class="add" >Vote Now</button>
    </div>
    <div class= "cand">
      <img class= "candi" src="/images/candidate2.png">
      <div class= "desc">Connor Common</div>
      <div class= "desc2">He isn't much, but he's all we have.</div>
      <div class= "desc2">Current Votes: {{num2}}</div>
      <button v-on:click="addVote(2)" class="add" >Vote Now</button>
    </div>

  </div>
  <h2>Cast your votes above(duplicate voting is a feature, not a bug)</h2>
  <div class="wrapper">

  </div>
</div>
</template>

<script>
//import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    //ProductList
  },
  data() {
    return {

      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
    num1(){

      if(this.$root.$data.cand1Votes === ""){
        return 0;
      }
      else{
        return this.$root.$data.cand1Votes;
      }
    },
    num2(){

      if(this.$root.$data.cand2Votes === ""){
        return 0;
      }
      else{
        return this.$root.$data.cand2Votes;
      }
    },

  },
  methods: {
    addVote(vote){
      if(vote === 1){
        this.$root.$data.cand1Votes = this.$root.$data.cand1Votes + 1;
      }
      else{
        this.$root.$data.cand2Votes = this.$root.$data.cand2Votes + 1;
      }
    }
  }
}

</script>

<style scoped>
h2{
  text-align: center;
  padding: 100px;
  font-size: 60px;
}

.cand{
  align-items: center;
  justify-content: center;
  padding: 50px;

}
.candi{
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: auto;
  padding: 50px;

}
.desc{
  text-align: center;
  padding: 5px;
  font-size: 40px;
}
.desc2{
  text-align: center;
  padding: 5px;
  font-size: 20px;
}
.add{
  margin: 10px;
  padding: 20px;
  align-items: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
