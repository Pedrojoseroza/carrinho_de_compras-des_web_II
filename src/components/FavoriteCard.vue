
<script setup>

defineProps (['titulo' , 'preco' , 'capa' , 'autor' , 'resenha']);

const emit = defineEmits([
  'remover-favorito',
  'adicionar-carrinho'
])
</script>

<template>

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
.favorite-card{
    display: flex;
    gap: 20px;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border: 1px solid #999;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.capa{
    width: 150px;
    height: 220px;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;
}

.info h2{
    color: #001f6b;
    margin-bottom: 10px;
}

.info h4{
    margin-bottom: 10px;
}
.resenha{
  color: #7a7a7a;
}
.preco{
    font-size: 1.3rem;
    font-weight: bold;
    color: #001f6b;
    margin-top: 10px;
}

.botoes{
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

button{
padding: 5px;
background-color: cadetblue;
}



</style>
