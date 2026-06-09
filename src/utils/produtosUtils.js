import { ref } from "vue";
import { moedaPais } from './global'
import { idioma } from './global'

function formatarPreco(valor) {
  return Number(valor).toLocaleString(idioma, {
    style: 'currency',
    currency: moedaPais,
  })
}
export { formatarPreco }

const filtro = ref('');
function filtrarLista(arr) {
  if (filtro.value.trim() == '') {
    return arr;
  } else {
    return arr.filter(e => e.titulo.toLowerCase().includes(filtro.value.toLowerCase()))
  }
}
export {filtrarLista, filtro};
