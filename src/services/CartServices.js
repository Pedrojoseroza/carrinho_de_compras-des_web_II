import { ref } from "vue";
import produtos from "@/data/produtos";
const carrinho = ref([]);
function addCarrinho(id) {
  const index = produtos.value.findIndex(e => e.id == id)
  const elemento = {item: produtos.value[index], quantidade: 1};
  for (let i = 0; i < carrinho.value.length; i++) {
    if (produtos.value[index] == carrinho.value[i].item) {
        carrinho.value[i].quantidade++
        return
      }
  }
  carrinho.value.push(elemento);
  console.log(carrinho.value)
 }
function adicionarQuantidade(id) {
  const index = carrinho.value.findIndex(e => e.item.id == id)
  carrinho.value[index].quantidade++;
}
function subtrairQuantidade(id) {
  const index = carrinho.value.findIndex(e => e.item.id == id)
  carrinho.value[index].quantidade--;
}
function removerDoCarrinho(id) {
  const index = carrinho.value.findIndex(e => e.item.id == id)
  carrinho.value.splice(index, 1);
}
function calcularTotal() {
  let soma = 0;
  for (const pedido of carrinho.value) {
    soma += pedido.quantidade * pedido.item.preco
  }
  return soma;
}
 export {addCarrinho, carrinho, adicionarQuantidade, subtrairQuantidade, calcularTotal, removerDoCarrinho}
