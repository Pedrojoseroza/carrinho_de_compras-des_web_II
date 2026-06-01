import produtos from "@/data/produtos";
import { ref } from "vue";
const favoritos  = ref([]);
function addFavoritos (id){
    const index = produtos.value.findIndex(e => e.id == id)
    const elemento = produtos.value[index]

   favoritos.value.push(elemento) 
}