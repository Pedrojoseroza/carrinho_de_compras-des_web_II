import { ref } from "vue";

const filtro = ref('');
function filtrarLista(arr) {
  if (filtro.value.trim() == '') {
    return arr;
  } else {
    return arr.filter(e => e.titulo.toLowerCase().includes(filtro.value.toLowerCase()))
  }
  console.log('Filtrou!!!!')
}
export {filtrarLista, filtro};
