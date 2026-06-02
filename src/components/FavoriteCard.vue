
<script setup>

defineProps (['titulo' , 'preco' , 'capa' , 'autor' , 'resenha']);


</script>

<template>
<div class="cont">

  <h2>
    {{titulo}}
  </h2>


    <img :src="capa" alt="Imagens">

    <p>{{ resenha }}</p>

    <p>{{ preco }}</p>

</div>



</template>

<style>
.cont {
    border: 2px solid red;
}

</style>
