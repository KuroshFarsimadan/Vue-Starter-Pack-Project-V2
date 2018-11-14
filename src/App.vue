<template>
  <div>
    <Header/>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer,
    Header
  }
};
</script>

<style>
</style>
