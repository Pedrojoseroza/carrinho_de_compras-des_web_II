import { ref } from "vue";
import produtos from "@/data/produtos";
const carrinho = ref([]);
function addCarrinho(id) {
  const index = produtos.value.findIndex(e => e.id == id)
  const elemento = produtos.value[index];
  carrinho.value.push(elemento);
  console.log(carrinho.value)
 }

 export {addCarrinho, carrinho}
