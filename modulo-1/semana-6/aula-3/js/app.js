import Tarefa from './Tarefa.js'

const formTratefa = document.querySelector('#formulario-tarefa')
const listaTarefas = document.querySelector('#lista-tarefas')

// inicializa o vetor de tarefas
const todasTarefas = []

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
