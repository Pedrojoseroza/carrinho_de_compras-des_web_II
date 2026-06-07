<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="corpo">
    <header>
      <AppHeader/>
    </header>
  <RouterView></RouterView>
    <footer>
      <AppFooter></AppFooter>
    </footer>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10vh;
}
div.corpo {
 background-color: rgb(231, 230, 230);
}
</style>
