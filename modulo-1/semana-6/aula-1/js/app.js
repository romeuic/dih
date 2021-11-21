const formTratefa = document.querySelector('#formulario-tarefa')
const listaTarefas = document.querySelector('#lista-tarefas')

const STRING = 'string'
const NUMBER = 'number'
const BOOLEAN = 'boolean'

const todasTarefas = []

class Item {
  static #lastId = 0
  #id
  descricao

  constructor(desc) {
    if (typeof desc !== STRING) return

    this.#id = Item.#lastId++
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
    if (!super(desc)) return

    this.#status = stat
  }

  set status(novoStatus) {
    this.#status = !!novoStatus
  }

  montaItem() {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = this.#status
    checkbox.onclick = function () {
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
  const item = new Tarefa(descricao)

  if (item.id === undefined) return

  todasTarefas.push(item)

  console.log('LISTA', todasTarefas)

  evento.target.reset()
  atualizarTela()
}

function atualizarTela() {
  listaTarefas.innerHTML = ''

  for (let tarefa of todasTarefas) {
    listaTarefas.appendChild(tarefa.montaItem())
  }
}

formTratefa.addEventListener('submit', registrarNovaTarefa)

document.querySelector('#t-limpar').addEventListener('click', () => {
  formTratefa.reset()

  for (let i = todasTarefas.length; i > 0; i--) {
    todasTarefas.pop()
  }

  atualizarTela()
})
