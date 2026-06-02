<script setup>
import FavoriteCard from '@/components/FavoriteCard.vue';
import { favoritos } from '@/services/favoritosServices';
</script>

<template>
    <h1>Favoritos</h1>
    <ul>
        <FavoriteCard v-for="livro in favoritos"
        v-bind:key="livro.id"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :id="livro.id"
        :capa="livro.capa"
        :preco="livro.preco"
        :resenha="livro.resenha">
       </FavoriteCard>
      </ul>
</template>

<style>


</style>
