<script setup>
import ProductCard from './ProductCard.vue';
import produtos from '@/data/produtos.js';
import { filtrarLista, filtro } from '@/utils/produtosUtils.js';
import { computed, ref } from 'vue';
import { addCarrinho } from '@/services/CartServices.js';
const listaFiltrada = computed(()=>filtrarLista(produtos.value));
</script>

<template>
  <div class="container">
    <h1>
      Livros à Venda
    </h1>
    <div class="container-livro">
      <ul>
        <ProductCard v-for="livro in listaFiltrada"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :id="livro.id"
        :url_imagem="livro.capa"
        :preco="livro.preco"
        :resenha="livro.resenha"
        @add-to-cart="addCarrinho">
      </ProductCard>
      </ul>
    </div>
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
.container-livro {
  display: flex;
  justify-content: center;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

</style>
