<script setup>
import { carrinho } from '@/services/CartServices';

</script>

<template>
  <div class="container">
    <h1>
      Carrinho de compras
    </h1>
    <section>

      <div class="box">
        <ul>
        </ul>
        <p v-show="carrinho.length == 0">
          Você ainda não tem nada no carrinho : )
        </p>
      </div>
      <div class="subtotal">
        <h2>
          Subtotal da compra até agora:
        </h2>
        <label></label>
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
  min-height: 40vh;
  border-radius: 20px;
  padding: 10px;
}


</style>
