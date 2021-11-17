import { Transacao } from './transacao.js'

const formTrans = document.querySelector('#formulario-transacao')
const listaTrans = document.querySelector('#lista-transacoes')

class Historico {
  lista = []

  armazena(item) {
    this.lista.push(item)
  }
}

const historico = new Historico()

function registrarNovaTransacao(evento) {
  evento.preventDefault()

  const dadosDoForm = new FormData(evento.target)

  const data = dadosDoForm.get('data')
  const preco = dadosDoForm.get('preco')
  const quantia = dadosDoForm.get('quantia')

  //const transacao = new Transacao(data, preco, quantia)

  const transacao = new Transacao(data, preco, quantia)

  historico.armazena(transacao)

  console.log('HISTORICO', historico)

  evento.target.reset()
  atualizarTela()
}

function atualizarTela() {
  listaTrans.innerHTML = ''

  for (let transacao of historico.lista) {
    const item = document.createElement('li')

    item.innerText = `
      Data: ${transacao.data}
      Preço: ${transacao.preco}
      Quantia: ${transacao.quantia}
      Volume: ${transacao.volume()}
    `

    listaTrans.appendChild(item)
  }
}

formTrans.addEventListener('submit', registrarNovaTransacao)

document.querySelector('#t-limpar').addEventListener('click', () => {
  formTrans.reset()

  for (let i = historico.length; i > 0; i--) {
    historico.pop()
  }

  atualizarTela()
})
