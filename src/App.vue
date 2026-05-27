<script setup>
import AppHeader from './components/icons/AppHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <AppHeader/>
    </header>
  <RouterView></RouterView>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 80px;
}
div {
  min-height: 100vh;
 background-color: rgb(231, 230, 230);
}
</style>
