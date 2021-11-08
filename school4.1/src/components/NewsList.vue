<template>
<div>

  <div class="wrapper">
    <div class="news">
      <div class="newl" v-for="newl in news" :key="newl.id">
        <div class="info">
          <h1>{{newl.name}}</h1>
          <h2>{{newl.price}}</h2>
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
  <button v-on:click="addCart(searchText, searchText2)" class="add" >Add Story</button>
</div>
</template>

<script>
export default {
  name: 'NewsList',
  props: {
    news: Array
  },
  data() {
    return {
      searchText: 'Story Name',
      searchText2: 'Story Information',
    }
  },
  methods:{
  addCart(id, text){
    this.name = id;
    this.price = text;
    console.log(this.name);
    //console.log(this.$root.$data.products.filter(product => product.id === this.id).at(0).id);
    this.$root.$data.news.push({ "name": this.name, "price": this.price});//.filter(news => news.id === this.id).at(0));
    console.log(this.$root.$data.news)
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

.newl {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.news {
  //margin: 10px;
  //margin-bottom: 500px;
  //width: 200px;
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
  margin-bottom: 100px;
}

.info h1 {
  align-text: center;
  background: #ffc629;
  font-size: 36px;
}

.info h2 {
  align-text: center;
  background: #ffdb78;
  font-size: 18px;

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
