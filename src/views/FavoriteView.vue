<script setup>
import FavoriteCard from '@/components/FavoriteCard.vue';
import { addCarrinho } from '@/services/CartServices';
import { favoritos } from '@/services/favoritosServices';
import { removerFavorito } from '@/services/favoritosServices';


</script>

<template>

  <h1>Seus livros Favoritos</h1>

    <div class="box">
      <p v-show="favoritos.length == 0">
        Você ainda não tem nenhum livro na lista de favoritos : )
      </p>
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
        @adicionar-carrinho="addCarrinho(livro.id)"
        >
      </FavoriteCard>
    </ul>
  </div>
</template>

<style scoped>

.lista-favoritos{
    width: 100%;
}

h1{

    margin: 30px 0;
    text-align: center;
    color: #001f6b;

}
 .box {
  border: 2px solid rgb(80, 70, 70);
  max-width: 90vw;
  min-height: 30vh;
  border-radius: 20px;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  padding: 15px;
  background-color: white;
  margin: 20px;
}
 .box p {
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  color: rgba(3, 3, 3, 0.63);
}

</style>
