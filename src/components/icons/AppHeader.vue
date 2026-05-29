<script setup>

</script>


<template>
 <header class="header">

    <div class="logo">
      <img src="#" alt="Logo" />
      <h1>Biblioteca</h1>
    </div>



    <div class="search-box">
      <input type="text" placeholder="Pesquisar produtos..." />
      <button>Buscar</button>
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
  background-color: #1e3a8a;
  padding: 15px 30px;
  color: white;
  gap: 20px;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.logo h1 {
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

.menu a:hover {
  color: #93c5fd;
}
.menu img{
    height: 2rem;
    width: 2rem;
}




</style>
