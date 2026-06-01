<script setup>
import FavoriteCard from '@/components/FavoriteCard.vue';

</script>

<template>
    <h1>Favoritos</h1>
    <ul>
        <FavoriteCard v-for="livro in favoritos"
        v-bind:key="livro.id"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :id="livro.id"
        :url_imagem="livro.capa"
        :preco="livro.preco"
        :resenha="livro.resenha">
       </FavoriteCard>
      </ul>
</template>

<style>
</style>