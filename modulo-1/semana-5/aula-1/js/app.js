import Transacao from './transacao.js'

const formTrans = document.querySelector('#formulario-transacao')

const historico = []

function registrarNovaTransacao(evento) {
  evento.preventDefault()

  const dadosDoForm = new FormData(evento.target)

  const data = dadosDoForm.get('data')
  const preco = dadosDoForm.get('preco')
  const quantia = dadosDoForm.get('quantia')

  const transacao = new Transacao(data, preco, quantia)

  historico.push(transacao)

  console.log('HISTORICO', historico)
}

formTrans.addEventListener('submit', registrarNovaTransacao)
