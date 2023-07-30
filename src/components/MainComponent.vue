<script lang="ts">
import ShoeCollection from "../components/Main/ShoeCollection.vue";

export default {
  components: {
    ShoeCollection,
  },
};
</script>

<template>
  <div class="main-page">
    <ShoeCollection
      brand="SNEAKER COMPANY"
      description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer"
      :discount="50"
      :price="250.0"
      name="Fall Limited Edition Sneakers"
      image="../../assets/images/image-product-1.jpg"
    ></ShoeCollection>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  padding: 50px 50px 0px 50px;
}
</style>
