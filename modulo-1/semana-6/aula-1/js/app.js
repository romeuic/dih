const formTratefa = document.querySelector('#formulario-tarefa')
const listaTarefas = document.querySelector('#lista-tarefas')

// inicializa o vetor de tarefas
const todasTarefas = []

class Item {
  static #nextId = 0
  #id
  descricao

  constructor(desc = '') {
    this.#id = Item.#nextId++
    this.descricao = desc
  }

  get id() {
    return this.#id
  }

  montaItem() {
    const li = document.createElement('li')
    li.innerHTML = this.descricao
    return li
  }
}


class Tarefa extends Item {
  #status

  constructor(desc, stat = false) {
    super(desc)
    this.#status = stat
  }

  montaItem() {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = this.#status

    checkbox.onclick = () => {
      this.#status = checkbox.checked
    }

    const texto = document.createTextNode(this.descricao)
    li.appendChild(checkbox)
    li.appendChild(texto)
    return li
  }
}

function registrarNovaTarefa(evento) {
  evento.preventDefault()

  const dadosDoForm = new FormData(evento.target)
  const descricao = dadosDoForm.get('descricao')

  // chamada do construtor de uma nova instância
  const item = new Tarefa(descricao)

  todasTarefas.push(item)

  console.log('LISTA', todasTarefas)

  evento.target.reset()
  atualizarTela()
}

function atualizarTela() {
  listaTarefas.innerHTML = ''

  todasTarefas.forEach(tarefa => {
    listaTarefas.appendChild(tarefa.montaItem())
  })
}

formTratefa.addEventListener('submit', registrarNovaTarefa)

document.querySelector('#t-limpar').addEventListener('click', () => {
  formTratefa.reset()

  for (let i = todasTarefas.length; i > 0; i--) {
    todasTarefas.pop()
  }

  atualizarTela()
})
