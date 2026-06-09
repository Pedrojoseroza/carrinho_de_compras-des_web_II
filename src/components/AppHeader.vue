<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { filtro } from '@/utils/produtosUtils';

const menuAberto = ref(false);

function abrirMenu() {
  menuAberto.value = !menuAberto.value;
}

function fecharMenu() {
  menuAberto.value = false;
}
</script>


<template>
  <header class="header">

    <div class="logo">
      <RouterLink to="/">
        <img src="/images/logo.png" alt="Logo" />
      </RouterLink>
      <h1>Oceano de Livros</h1>
    </div>



    <div class="search-box">
      <input type="text" placeholder="Pesquisar produtos..." v-model="filtro" />
    </div>


    <nav class="menu">
      <RouterLink to="/favoritos"><img src="/images/Estrela.png"></RouterLink>
      <RouterLink to="/carrinho"><img src="/images/Carrinho.png"></RouterLink>
    </nav>

    <nav class="menu-hamburguer">
      <img src="/images/burger-menu-svgrepo-com.svg" alt="Abrir menu" @click="abrirMenu">
      <ul v-show="menuAberto" class="menu-cascata">
        <li @click="fecharMenu">
          <RouterLink to="/favoritos">
            Favoritos
          </RouterLink>
        </li>
        <li @click="fecharMenu">
          <RouterLink to="/carrinho">
            Carrinho
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3b8af5;
  padding: 15px 0;
  flex-wrap: wrap;
  color: white;
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
  width: 10vh;
  height: 10vh;
}

.logo h1 {
  font-size: 1.8rem;
  color: white;
}

.search-box {
  display: flex;
  flex: 1;
  max-width: 40vw;
}

.search-box input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  outline: none;
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

.menu img {
  height: 2rem;
  width: 2rem;
}

.menu-hamburguer {
  display: none;
}

@media only screen and (max-width:900px) {
  .header {
    justify-content: space-evenly;
  }

  .menu {
    display: none;
  }

  .menu-hamburguer {
    display: block;
    position: relative;
  }

  .menu-hamburguer img {
    width: 10vw;
    cursor: pointer;
  }

  .menu-cascata {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    list-style: none;
    padding: 8px 0;
    margin: 8px 0 0 0;
    min-width: 180px;
    z-index: 200;
  }

  .menu-cascata li {
    padding: 0;
  }

  .menu-cascata a {
    display: block;
    padding: 10px 20px;
    color: #1f2937;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .menu-cascata a:hover {
    background-color: #eff6ff;
    color: #1e3b8a;
  }

  h1 {
    font-size: 1.5rem;
  }

  h1:last-child {
    display: none;
  }
}
</style>
