<script setup>
import ProductList from '@/components/products/ProductList.vue';
import NotificacaoHome from '@/components/notificacaoHome.vue';
import { ref } from 'vue';
const exibeNotificacao = ref(false);
function mostrarNotificacao() {
  exibeNotificacao.value = true;
  setTimeout(()=> {
    exibeNotificacao.value = false;
  }, 2000)
}
import homeBanner from '@/components/homeBanner.vue';
</script>

<template>
  <div class="container">
    <homeBanner/>
    <h1 >
    Livros à Venda
  </h1>
    <NotificacaoHome v-show="exibeNotificacao"/>
    <ProductList @produto-adicionado="mostrarNotificacao"/>

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
