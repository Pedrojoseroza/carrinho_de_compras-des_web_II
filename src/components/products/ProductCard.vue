<script setup>
defineProps(["titulo", 'preco', 'id', 'url_imagem', 'resenha', 'autor'])
defineEmits(['addToCart'])
</script>

<template>
  <div class="product-card">
    <img :src="url_imagem" :alt="'imagem' + titulo">
    <h2>
      {{ titulo }}
    </h2>
    <label>
      <span>
        Autor: {{ autor }}
      </span>
      <br>
      Resenha: {{ resenha }}

    </label>
    <p class="preco">
      Preço: {{ preco }}
    </p>
    <button @click="$emit('addToCart')">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<style scoped>
*{
  padding: 5px 0;
}
.product-card {
  max-width: 20vw;
  padding: 10px 15px;
  text-align: center;
}
.product-card h1 {
  font-size: 1.5rem;
  color: rgb(0, 0, 36);
  font-weight: 600;
}
.product-card label {
  font-size: 0.6rem;
  color: rgb(175, 154, 154);
  display: block;
}
.product-card label span {
  font-size: 1rem;
  color: black;
}
.product-card p.preco {
  text-align: center;
  font-size: 0.9rem;
  color: rgb(105, 127, 175);
}
.product-card img {
  width: 10vw;
}
.product-card button {
  background-color: rgb(28, 22, 88);
  color: antiquewhite;
  padding: 5px;
  border: none;
  box-shadow: 0 5px 5px 0;
}
.product-card button:active{
  background-color: rgb(21, 17, 70);
    transform: translateY(1px);

}
</style>
