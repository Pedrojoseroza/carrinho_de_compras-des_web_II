<script setup>
import { carrinho, adicionarQuantidade, subtrairQuantidade, calcularTotal, removerDoCarrinho } from '@/services/CartServices';
import CartCard from '@/components/CartCard.vue';
import { computed } from 'vue';
import { formatarPreco } from '@/utils/produtosUtils';
const totalCalculado = computed(() => calcularTotal())

</script>

<template>
  <div class="container">
    <h1>
      Carrinho de compras
    </h1>
    <section>

      <div class="box">
        <ul>
          <CartCard v-for="pedido in carrinho" :nome="pedido.item.titulo" :preco="pedido.item.preco"
            :id="pedido.item.id" :url_imagem="pedido.item.capa" :quant="pedido.quantidade"
            @acresce-quant="adicionarQuantidade" @decresce-quant="subtrairQuantidade"
            @remove-carrinho="removerDoCarrinho"></CartCard>
        </ul>
        <p v-show="carrinho.length == 0">
          Você ainda não tem nada no carrinho : )
        </p>
      </div>
      <div class="subtotal">
        <h2>
          Subtotal da compra até agora:
        </h2>
        <p>
          Preço
          <label>{{ formatarPreco(totalCalculado) }}</label>
        </p>
        <p>
          Frete: R$ 0,00
        </p>
        <p>
          Total : {{ formatarPreco(totalCalculado) }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  padding: 30px 10vw;
}

.container h1 {
  margin: 15px 0;
  color: #0c2363;
}

.container .box {
  border: 2px solid rgb(80, 70, 70);
  max-width: 60vw;
  min-height: 40vh;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  background-color: white;
}

.container .box p {
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  color: rgba(3, 3, 3, 0.63);
}

.container section {
  display: flex;
  gap: 30px;
}

.container .subtotal {
  background-color: white;
  border: 2px solid rgb(80, 70, 70);
  max-width: 40vw;
  height: min-content;
  border-radius: 20px;
  padding: 10px;
  position: sticky;
  top: 100px;
}

@media only screen and (max-width: 900px) {
  .container {
    padding: 40px 5vw;
  }
}
</style>
