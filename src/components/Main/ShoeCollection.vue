<script lang="ts">
import Minus from "../icons/icon-minus.vue";
import Plus from "../icons/icon-plus.vue";
import Cart from "../icons/icon-cart.vue";
export default {
  components: {
    Minus,
    Plus,
    Cart,
  },
  props: {
    image: String,
    brand: String,
    name: String,
    description: String,
    price: { type: Number, required: true },
    discount: { type: Number, default: 1.0 },
  },
  data() {
    return {
      discountedPrice: this.price - this.price * this.discount,
      count: 0,
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    subtract: function () {
      if (this.count < 1) {
        this.count = 0;
      } else this.count--;
    },
  },
};
</script>

<template>
  <div class="collection">
    <div class="images-div">
      <img class="image" :src="image" />
    </div>
    <div class="product-details">
      <p class="brand">{{ brand }}</p>
      <p class="name">{{ name }}</p>
      <p class="description">{{ description }}</p>
      <div class="discounted-div">
        <p class="discounted-price">${{ discountedPrice.toFixed(2) }}</p>
        <div class="discount-container">
          <p class="discount">{{ discount * 100 }}%</p>
        </div>
      </div>
      <p class="price">${{ price.toFixed(2) }}</p>
      <div class="checkout">
        <div class="counter">
          <div class="minus-plus">
            <button @click="subtract"><Minus /></button>
          </div>
          <p class="count">{{ count }}</p>
          <div class="minus-plus">
            <button @click="add"><Plus /></button>
          </div>
        </div>
        <button class="cart-button">
          <div class="cart-icon"><Cart color="#fff" /></div>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.collection {
  display: flex;
  flex: 1;
  max-width: 790px;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
}
.product-details {
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
.image-div {
  width: 410px;
}
.image {
  border-radius: 10px;
  width: 310px;
}
.brand {
  font-size: 10px;
  font-weight: 700;
  color: orange;
  text-transform: uppercase;
}
.name {
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-transform: capitalize;
  width: 350px;
  line-height: 35px;
}
.description {
  font-size: 12px;
  font-weight: 700;
  width: 380px;
}
.discounted-div {
  display: flex;
  gap: 10px;
  align-items: center;
}
.discounted-price {
  font-size: 18px;
  font-weight: 700;
  color: black;
}
.discount-container {
  width: 32px;
  height: 17px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.discount {
  font-size: 11px;
  color: #f28006;
  font-weight: 700;
}
.price {
  font-size: 11px;
  font-weight: 700;
  color: rgb(202, 196, 196);
  text-decoration: line-through;
  margin-bottom: 20px;
}
.checkout {
  display: flex;
  width: 340px;
  gap: 10px;
}
.counter {
  display: flex;
  width: 100px;
  height: 40px;
  background-color: aliceblue;
  border-radius: 5px;
  align-items: center;
}
.minus-plus {
  display: flex;
  width: 30px;
  align-items: center;
  justify-content: center;
  scale: 0.7;
  height: 100%;
}
.minus-plus button {
  border: none;
  background-color: inherit;
  cursor: pointer;
  height: 100%;
}
.count {
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: #000;
}
.cart-button {
  color: rgba(255, 255, 255, 0.734);
  background-color: #f28006c0;
  border: none;
  border-radius: 10px;
  height: 40px;
  flex: 1;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.cart-icon {
  scale: 0.6;
}
</style>
