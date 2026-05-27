<script setup>
import { RouterLink } from 'vue-router';
import { filtro } from '@/utils/produtosUtils';
</script>


<template>
 <header class="header">

    <div class="logo">
      <RouterLink to="/">
      <img src="#" alt="Logo" />
      <h1>Biblioteca</h1>
      </RouterLink>
    </div>



    <div class="search-box">
      <input type="text" placeholder="Pesquisar produtos..." v-model="filtro" />
      <button>Buscar</button>
    </div>


     <nav class="menu">
      <RouterLink to="/favoritos"><img src="/public/Estrela.png" ></RouterLink>
      <RouterLink to="/carrinho"><img src="/public/Carrinho.png" ></RouterLink>
    </nav>

</header>
</template>


<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3a8a;
  padding: 15px 0;
  color: white;
  gap: 20px;
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

.logo a img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.logo  a h1 {
  font-size: 24px;
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
  border-radius: 8px 0 0 8px;
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
