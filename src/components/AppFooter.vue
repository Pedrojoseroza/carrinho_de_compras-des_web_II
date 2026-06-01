<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <div>
      <h2>
        <RouterLink to="/">
          <img src="/public/images/logo.png" alt="logo">
        </RouterLink>
        Oceano dos Livros
      </h2>
      <p>
        A nossa livraria permite o contato e compra de uma série de livros de qualidade
        e valor inéstimaveis Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nisi eius delectus neque aliquam eos, maiores doloribus eligendi sequi dolor omnis, natus impedit aperiam ipsam cumque corporis quod accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reprehenderit quo in reiciendis facere impedit! Cupiditate, eaque aut. Aut, beatae eum quasi repudiandae laborum animi facere numquam voluptates omnis exercitationem.
      </p>
    </div>
    <div class="pag">
      <h2>
        Páginas
      </h2>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/carrinho">Carrinho</RouterLink>
        </li>
        <li>
          <RouterLink to="/favoritos">Favoritos</RouterLink>
        </li>
      </ul>
    </div>
    <div class="contatos">
      <h2>
        Contatos
      </h2>
      <p>Telefone: 47 9717-0160</p>
      <p>email: oceanodoslivros@gmail.com</p>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
  background-color: #1e3a8a;
  color: white;
}
.container div {
  max-width: 30vw;
}
.container div h2 {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}
.container div img {
  width:  75px;
  height: 75px;
  padding: 5px 10px 0 0;
}
.container div.pag, div.contatos {
  padding-top: 30px;
}
a {
  color: white;
  text-decoration: none;
}
ul li {
  margin: 10px 0;
  list-style-type: none;
}
.container div.contatos p {
  margin: 20px 0;
}
</style>
