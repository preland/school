<template>
<div>
  <div class="wrapper">
    <div class="activities">
      <div class="activity" v-for="activity in activities" :key="activity.id">
        <div class="info">
          <h1>{{activity.name}}</h1>
          <h2>{{activity.price}}</h2>
        </div>
        <!---<div class="image">
          <img :src="'/images/products/'+activity.image">
        </div>--->
        <!---<div class="price">
          <h2>{{activity.price}}</h2>
          <button v-on:click="addCart(activity.id)" class="auto" >Add to Cart</button>
        </div>--->
      </div>
    </div>
  </div>
  <form class="pure-form">
    <input v-model="searchText" />
  </form>
  <form class="pure-form">
    <input v-model="searchText2" />
  </form>
  <button v-on:click="addCart(searchText, searchText2)" class="add" >Add Activity</button>
</div>
</template>

<script>
export default {
  name: 'ActivityList',
  props: {
    activities: Array
  },
  data() {
    return {
      searchText: 'Activity Name',
      searchText2: 'Activity Information',
    }
  },
  methods:{
    addCart(id, text){
      this.name = id;
      this.price = text;
      console.log(this.name);
      //console.log(this.$root.$data.products.filter(product => product.id === this.id).at(0).id);
      this.$root.$data.activities.push({ "name": this.name, "price": this.price});//.filter(activities => activities.id === this.id).at(0));
      console.log(this.$root.$data.activities)
    }
  }
}
</script>

<style scoped>
div{
  text-align: center;
  align-items: center;
  justify-content: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.activities {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.activity {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {

  background: #ffbb00;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  align-text: center;
  background: #ffc629;
  font-size: 16px;
}

.info h2 {
  align-text: center;
  background: #ffdb78;
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
