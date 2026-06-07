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
</template>

<style scoped>
.container-livro {
  display: flex;
  justify-content: center;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

@media only screen and (max-width:900px) {

  ul {
    display: block;
  }

}
</style>
