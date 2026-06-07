<script setup>
import { RouterLink } from 'vue-router';
import { filtro } from '@/utils/produtosUtils';
</script>


<template>
 <header class="header">

    <div class="logo">
      <RouterLink to="/">
      <img src="/public/images/logo.png" alt="Logo" />
    </RouterLink>
    <h1>Oceano de Livros</h1>
    </div>



    <div class="search-box">
      <input type="text" placeholder="Pesquisar produtos..." v-model="filtro" />
    </div>


     <nav class="menu">
      <RouterLink to="/favoritos"><img src="/public/images/Estrela.png" ></RouterLink>
      <RouterLink to="/carrinho"><img src="/public/images/Carrinho.png" ></RouterLink>
    </nav>
</header>
</template>


<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3b8af5;
  padding: 15px 0;
  color: white;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 100;
  min-width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 0 0 20px;
}

.logo img {
  width: 70px;
  height: 70px;
}

.logo  h1 {
  font-size: 1.8rem;
}

.search-box {
  display: flex;
  flex: 1;
  max-width: 500px;
}

.search-box input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  outline: none;
}

.search-box button {
  padding: 10px 15px;
  border: none;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
  border-radius: 0 8px 8px 0;
}

.search-box button:hover {
  background-color: #3b82f6;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.menu {
  padding: 0 20px 0 0;
}
.menu a:hover {
  color: #93c5fd;
}
.menu img{
    height: 2rem;
    width: 2rem;
}

</style>
