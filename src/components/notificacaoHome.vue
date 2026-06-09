<script>
</script>
<template>
    <div class="notificacaoHome">
        <h1>Produto adicionado com sucesso!</h1>
    </div>
</template>
<style scoped>
div.notificacaoHome{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    border-radius: 5px;
    background-color: #000000d5;
    color: #fff;
    padding: 10px 20px;
    z-index: 100;
    animation: fadeInOut 3s ease-in-out;
    left: 30%;
    right: 30%;
  }
.notificacaoHome h1 {
  font-size: 1.5rem;
}
</style>
