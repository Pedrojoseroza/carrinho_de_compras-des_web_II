<script setup>
import ProductList from '@/components/products/ProductList.vue';
</script>

<template>
  <div class="container">
      <h1>
      Livros à Venda
    </h1>
    <ProductList/>
  </div>

</template>
<style scoped>

.container {
  padding: 30px 10vw;
}
.container h1 {
  margin: 20px 0;
  color: #0c2363;
}
</style>
