<script setup>
import ProductCard from './ProductCard.vue';
import produtos from '@/data/products.js';
</script>

<template>
  <div class="container">
    <ul>
      <ProductCard v-for="livro in produtos"
      :titulo="livro.titulo"
      :autor="livro.autor"
      :id="livro.id"
      :url_imagem="livro.capa"
      :preco="livro.preco"
      :resenha="livro.resenha">
    </ProductCard>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

</style>
