// pega elementos do html
const campo = document.querySelector('input[name=campo]')
const botaoAdd = document.getElementById('btn-adicionar')
const botaoClear = document.getElementById('btn-limpar')
const ulAtividades = document.getElementById('ul-atividades')

// inicia um vetor vazio
let lista = []

// pega conteúdo do localStorage
let listaStorage = localStorage.getItem('lista-atividades')

// verifica se existe conteúdo válido no localStorage
if (listaStorage) {
  // restaura a lista
  // lista = JSON.parse(listaStorage)
  // console.log('RECUPEROU_DO_STORAGE', { lista })
  // ...
}

// função para criar e adicionar item ao DOM
function criaElementoNoDOM(item) {
  // cria um novo item de lista html
  const novoElemento = document.createElement('li')

  // adiciona atributo id ao item html
  novoElemento.id = item.id

  // preenche o conteúdo do item html
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

  // manda o item novo para o documento html
  ulAtividades.appendChild(novoElemento)
}

// função para salvar lista em localStorage
function salvaEmLocalStorage() {
  console.log('SALVA_EM_LOCAL_STORAGE', { lista })

  // converte para string JSON
  const listaJSON = JSON.stringify(lista)

  // armazena do localStorage
  localStorage.setItem('lista-atividades', listaJSON)
}

// função para apagar conteudo do campo
function limpaCampo() {
  campo.value = ''
}

// função para remover uma das atividades
function removeItem(idItem) {
  // cria lista vazia
  const novaLista = []

  // preenche a lista nova com todos itens menos o removido
  for (let i = 0; i < lista.length; i++) {
    // se o item não for o removido, vai pra nova lista
    if (lista[i].id !== idItem) {
      novaLista.push(lista[i])
    }
  }

  // pega item a ser removido do html
  const itemParaRemocao = document.getElementById(idItem)
  // remove ele do pai
  ulAtividades.removeChild(itemParaRemocao)

  // atualiza a lista com a lista nova
  lista = novaLista

  salvaEmLocalStorage()
}

// função para marcar ou desmarcar atividade
function marcaFeito(idItem) {
  // verifica idItem é valido
  if (idItem) {
    let item = null

    // procura item
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === idItem) {
        item = lista[i]
      }
    }

    // testa se encontrou um item
    if (item) {
      // inverte o valor de feito
      item.feito = !(item.feito)

      // pega o elemento do html
      const elemento = document.getElementById(idItem)

      // atualiza a classe para riscar ou não
      elemento.className = item.feito ? 'feito' : ''

      salvaEmLocalStorage()
    }
  }
}

// função para adicionar itens a lista
function adicionaNovo() {
  // verifica se o campo não está vazio
  if (campo.value.length > 0) {
    // encontra uma id unica
    // baseada no millisegundo atual
    const msAtual = new Date().getTime()

    // define o objeto do item a ser adicionado
    const item = {
      id: msAtual,
      titulo: campo.value,
      feito: false
    }

    criaElementoNoDOM(item)

    // adiciona também no vetor da lista
    lista.push(item)

    salvaEmLocalStorage()

    limpaCampo()
  } else {
    // avisa que o campo está vazio
    alert('É preciso informar um valor!')
  }
}

// vincula funções aos elementos html
botaoAdd.addEventListener('click', adicionaNovo)
botaoClear.addEventListener('click', limpaCampo)
