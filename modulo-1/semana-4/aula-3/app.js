// pega elementos do html
const campo = document.querySelector('input[name=campo]')
const botaoAdd = document.getElementById('btn-adicionar')
const botaoClear = document.getElementById('btn-limpar')
const ulAtividades = document.getElementById('ul-atividades')

// inicia um vetor vazio
let lista = []

let listaStorage = localStorage.getItem('lista-atividades')

if (listaStorage) {
  console.log(listaStorage)
}

// apaga conteudo do campo
function limpaCampo() {
  campo.value = ''
}

// remove uma das atividades
function removeItem(index) {
  const novaLista = []

  for (let i = 0; i < lista.length; i++) {
    if (i !== index) {
      novaLista.push(lista[i])
    }
  }

  const itemParaRemocao = document.getElementById(`item-${index}`)

  ulAtividades.removeChild(itemParaRemocao)

  lista = novaLista
}

// marca ou desmarca atividade
function marcaFeito(index) {
  if (lista[index]) {
    const item = lista[index]

    item.feito = !(item.feito)

    const elemento = document.getElementById(`item-${index}`)

    elemento.className = item.feito ? 'feito' : ''
  }
}

// adiciona itens a lista
function adiciona() {

  if (campo.value.length > 0) {

    const item = {
      id: lista.length,
      titulo: campo.value,
      feito: false
    }

    const novoElemento = document.createElement('li')

    novoElemento.id = `item-${item.id}`

    novoElemento.innerHTML = `
      <input
        type="checkbox"
        name="chk-${item.id}"
        onclick="marcaFeito(${item.id})"
      >
      <label for="chk-${item.id}">
        ${item.titulo}
      </label>
      <button onclick="removeItem(${item.id})">
        &times;
      </button>
    `

    ulAtividades.appendChild(novoElemento)

    lista.push(item)

    console.log("LISTA->", { lista })

    const listaJSON = JSON.stringify(lista)

    localStorage.setItem('lista-atividades', listaJSON)

    limpaCampo()
  } else {
    alert('É preciso informar um valor!')
  }
}

// vincula funções aos elementos html
botaoAdd.addEventListener('click', adiciona)
