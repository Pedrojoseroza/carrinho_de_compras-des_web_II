<script setup>
import { formatarPreco } from '@/utils/produtosUtils';

defineProps(['id', 'nome', 'url_imagem', 'preco', 'quant'])
defineEmits(['decresceQuant', 'acresceQuant'])
</script>

<template>
  <div class="container">
    <button>
      X
    </button>
    <img :src="url_imagem" alt="imagem">
    <h2>
      {{ nome }}
    </h2>
    <p> Preço
      {{ formatarPreco(preco) }}
    </p>
    <div class="quantidades">
      <button @click="$emit('decresceQuant', id)" :disabled="quant == 1">-</button>
       <span>
        {{ quant }}
       </span>
       <button @click="$emit('acresceQuant', id)" :disabled="quant >= 99">+</button>
    </div>
    <p>
      Subtotal: {{formatarPreco(preco * quant)}}
    </p>
  </div>
</template>

<style scoped>
.container {
  min-width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border: 1px solid gray;
}
div {
  display: flex;
}
.container > button {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
}
.container > button:hover {
  transition: 0.5s background-color;
  background-color: rgb(255, 78, 78) ;
}
.container h1 {
  font-size: 1.5rem;
}
.container img {
  margin: 0 0 0 50px;
  height: 10vh;
}
.container div.quantidades button {
  padding: 5px 15px ;
}
.container div.quantidades span {
  background-color: gray;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  padding: 0 5px;
}
.container p:last-of-type {
  margin: 0 0 0 30px;
}
</style>
