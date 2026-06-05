<script setup>
import FavoriteCard from '@/components/FavoriteCard.vue';
import { favoritos } from '@/services/favoritosServices';
import { removerFavorito } from '@/services/favoritosServices';

function adicionarAoCarrinho(livro) {
  console.log('Adicionando ao carrinho:', livro)

}

</script>

<template>
    <h1>Seus livros Favoritos</h1>
    <ul>
        <FavoriteCard v-for="livro in favoritos"
        v-bind:key="livro.id"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :id="livro.id"
        :capa="livro.capa"
        :preco="livro.preco"
        :resenha="livro.resenha"
         @remover-favorito="removerFavorito(livro.id)"
        @adicionar-carrinho="adicionarAoCarrinho(livro)"
        >
       </FavoriteCard>


      </ul>
</template>

<style>

 h1{
  text-align: center;
  padding: 13px;

}


</style>
