<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
};
</script>
<template>
  <div id="app">
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <main>
      <MainComponent></MainComponent>
    </main>
  </div>
</template>
