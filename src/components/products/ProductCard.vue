<script setup>
defineProps(["titulo", 'preco', 'id', 'url_imagem', 'resenha', 'autor'])
defineEmits(['addToCart','addToFavoritos'])
</script>

<template>
  <div class="product-card">
    <img :src="url_imagem" :alt="'imagem' + titulo">

    <div class="titulo-container">
    <h2>
      {{ titulo }} 
    </h2>
<button class="favoritos" @click="$emit('addToFavoritos', id)"> <img src="/public/images/coracaoFavorito.png" alt="ImgCoracao"></button>
  </div>
  
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
  max-height: 80vh;
  padding: 10px 12px;
  text-align: center;
  border: 1px gray solid;
  align-content: space-evenly; /* Alinhamento vertical no grid */
  display: grid;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 4px 0;

}
.product-card h1 {
  font-size: 1.5rem;
  color: rgb(0, 0, 36);
  font-weight: 600;
  margin: 5px 0;
}
.product-card label {
  font-size: 0.8rem;
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
  font-weight: bold;
}
.product-card img {
  width: 10vw;
  margin: 0 auto;
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
.product-card .favoritos{
  background-color: white;
  border: none;
  box-shadow: none;
  
}

.titulo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.titulo-container h2 {
  margin: 0;
  flex: 1;
  text-align: center;
}

.favoritos {
  background: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: 0;
}

.favoritos img {
  width: 22px;
  height: 22px;
}

</style>
