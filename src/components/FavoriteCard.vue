
<script setup>

defineProps (['titulo' , 'preco' , 'capa' , 'autor' , 'resenha']);

const emit = defineEmits([
  'remover-favorito',
  'adicionar-carrinho'
])
</script>

<template>

  <h1>Seus livros Favoritos</h1>
 <div class="favorite-card">

    <img :src="capa" :alt="titulo" class="capa">

    <div class="info">

      <h2>{{ titulo }}</h2>

      <h4>{{ autor }}</h4>

      <p class="resenha"> {{ resenha }}</p>

      <p class="preco"> R$ {{ preco }}</p>

      <div class="botoes">
        <button @click="emit('remover-favorito')">
          Remover
        </button>

           <button @click="emit('adicionar-carrinho')">
          Adicionar ao Carrinho
        </button>


      </div>

    </div>

  </div>
</template>

<style>
h1{
  color: #1e3a8a;
  padding: 13px;
}
.favorite-card{
  display: flex;
  gap: 20px;
  border: 1.3px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.capa{
  width: 150px;
  height: 220px;
  padding: 5px;
}

.info{
  flex: 1;
}

.info p.resenha{
color: #ccc;
}
.preco{
  font-size: 1.2rem;
  font-weight: bold;
  color: steelblue
  ;
}


.botoes{
  display: flex;
  gap: 10px;
  margin-top: 10px;

}

button{
  padding: 8px 12px;
  cursor: pointer;
  background-color: cadetblue;
}


</style>
