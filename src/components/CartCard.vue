<script setup>
defineProps(['id', 'nome', 'url_imagem', 'preco', 'quant'])
defineEmits(['decresceQuant', 'acresceQuant'])
</script>

<template>
  <div class="container">
    <img :src="url_imagem" alt="imagem">
    <h2>
      {{ nome }}
    </h2>
    <p> Preço
      {{ preco }}
    </p>
    <div class="quantidades">
      <button @click="$emit('decresceQuant', id)" :disabled="quant == 0">-</button>
       <span>
        {{ quant }}
       </span>
       <button @click="$emit('acresceQuant', id)" :disabled="quant >= 99">+</button>
    </div>
    <p>
      Subtotal: {{ quant * preco }}
    </p>
  </div>
</template>

<style scoped>
.container {
  min-width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
}
div {
  display: flex;
}
.container h1 {
  font-size: 1.5rem;
}
.container img {
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
