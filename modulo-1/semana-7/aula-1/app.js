import { buscaCEP } from './cep.js'

const campoCep = document.querySelector('#campo-cep')
const botaoCep = document.querySelector('#botao-cep')
const pTela = document.querySelector('#p-tela')

// sincrono
const verificarCEPsincrono = event => {
  // reseta resultado
  let resultado = ''
  // define resultado
  resultado = 'Rodovia Admar Gonzaga'
  // mostra resultado
  pTela.innerHTML = resultado
}

// timeout (callback)
const verificarCEPtimeout = event => {
  // reseta resultado
  let resultado = ''
  // simula busca
  setTimeout(() => {
    // define resultado
    resultado = 'Rodovia Admar Gonzaga'
  }, 0)
  // mostra resultado ???
  pTela.innerHTML = resultado
}

// exemplo callback
const verificarCEPcallback = event => {
  const cep = campoCep.value.replace('-', '')
  // simula busca
  buscaCEP(cep, (erro, resultado) => {
    if (erro) {
      // caso tiver problema
      // exibe erro
      console.error(erro)
      pTela.innerHTML = erro
    } else {
      // caso sucesso
      // exibe resultado
      console.log(resultado)
      pTela.innerHTML = resultado.logradouro
    }
  })
}


//botaoCep.addEventListener('click', verificarCEPsincrono)
//botaoCep.addEventListener('click', verificarCEPtimeout)
botaoCep.addEventListener('click', verificarCEPcallback)
