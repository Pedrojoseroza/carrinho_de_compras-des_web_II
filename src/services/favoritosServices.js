import produtos from "@/data/produtos";
import { ref } from "vue";
const favoritos  = ref([]);

function addFavoritos (id){
    if (favoritos.value.some(livro => livro.id === id)) return;

    const index = produtos.value.findIndex(e => e.id == id)
    const elemento = produtos.value[index]

   favoritos.value.push(elemento);
}

function removerFavorito(id) {
    favoritos.value = favoritos.value.filter(
        livro => livro.id !== id
    );
}

export {favoritos, addFavoritos, removerFavorito}
