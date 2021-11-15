import Transacao from './transacao.js'

const formTrans = document.querySelector('#formulario-transacao')

const historico = []

function registrarNovaTransacao(evento) {
  evento.preventDefault()

  const dados = new FormData(event.target)
  const data = dados.get('data')
  const preco = dados.get('preco')
  const quantia = dados.get('quantia')

  const transacao = new Transacao(data, preco, quantia)

  historico.push(transacao)

  console.log('HISTORICO', historico)
}

formTrans.addEventListener('submit', registrarNovaTransacao)
