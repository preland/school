<template>
<div class="wrapper">
<h1>{{empty()}}</h1>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button v-on:click="removeCart(product.id)" class="auto" >Remove from Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods:{
    removeCart(id){
      this.id = id;
      console.log(this.id);
      console.log((this.$root.$data.cart.at(id)));
      this.$root.$data.cart.splice((this.$root.$data.cart.at(id)), 1);
      console.log(this.$root.$data.cart)
    },
    empty(){
      if(this.$root.$data.cart === "[]"){
        return "";
      }
      else if(this.$root.$data.cart.length === 0){
        return "The Cart is Empty.";
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
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
  background: #03fc8c;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
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
