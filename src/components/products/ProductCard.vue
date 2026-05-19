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
    <p>
      Preço: {{ preco }}
    </p>
    <button @click="$emits('addToCart')">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<style scoped>
.product-card {
  width: 30vw;
  padding: 10px 15px;
  
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
.product-card p {
  font-size: 0.9rem;
  color: rgb(105, 127, 175);
}
.product-card img {
  width: 10vw;
}

</style>
