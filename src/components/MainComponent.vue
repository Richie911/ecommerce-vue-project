<script lang="ts">
import store from "@/store";
import ShoeCollection from "../components/Main/ShoeCollection.vue";

export default {
  components: {
    ShoeCollection,
  },
  data() {
    return {
      allProducts: store.state.allProducts,
    };
  },
};
</script>

<template>
  <div class="main-page" vk>
    <ShoeCollection
      v-for="product in allProducts"
      v-bind:key="product.id"
      :brand="product.brand"
      :description="product.description"
      :discount="product.discount"
      :price="product.price"
      :name="product.name"
      :image="product.image"
    ></ShoeCollection>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  padding: 50px 50px 0px 50px;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
