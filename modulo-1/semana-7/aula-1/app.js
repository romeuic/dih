import {
  buscaCEPcallback,
  buscaCEPpromise
} from './cep.js'

const campoCep = document.querySelector('#campo-cep')
const botaoCep = document.querySelector('#botao-cep')
const pTela = document.querySelector('#p-tela')


// exemplo sincrono
const verificarCEPsincrono = event => {
  // reseta resultado
  let resultado = ''
  // define resultado
  resultado = 'Rodovia Admar Gonzaga'
  // mostra resultado
  pTela.innerHTML = resultado
}


// exemplo timeout callback
const verificarCEPtimeout = event => {
  console.log('INICIO')
  // reseta resultado
  let resultado = ''
  // simula busca
  setTimeout(() => {
    // define resultado
    console.log('MEIO')
    resultado = 'Rodovia Admar Gonzaga'
  }, 0)
  // mostra resultado ???
  pTela.innerHTML = resultado
  console.log('FIM')
}


// exemplo error first callback
const verificarCEPcallback = event => {
  const cep = campoCep.value.replace('-', '')
  // simula busca
  buscaCEPcallback(cep, (erro, resultado) => {
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


// exemplo promise
const verificarCEPpromise = event => {
  const cep = campoCep.value.replace('-', '')
  // simula busca
  buscaCEPpromise(cep)
    .then(resultado => {
      // caso sucesso
      // exibe resultado
      console.log(resultado)
      pTela.innerHTML = resultado.logradouro
    })
    .catch(erro => {
      // caso tiver problema
      // exibe erro
      console.error(erro)
      pTela.innerHTML = erro
    })
}


// exemplo fetch
const verificarCEPfetch = event => {
  const cep = campoCep.value
  // simula busca
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => resposta.json())
    .then(resultado => {
      // caso sucesso
      // exibe resultado
      console.log(resultado)
      pTela.innerHTML = resultado.logradouro
    })
    .catch(erro => {
      // caso tiver problema
      // exibe erro
      console.error('CATCH:' + erro)
      pTela.innerHTML = erro
    })
}


// exemplo race
const verificarCEPrace = event => {
  const cep = campoCep.value
  // simula busca
  const pViacep = fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json`)
  const pApicep = fetch(`https://ws.apicep.com/cep/${cep}.json`)

  Promise.race([pApicep, pViacep])
    .then(resposta => resposta.json())
    .then(resultado => {
      // caso sucesso
      // exibe resultado
      console.log(resultado)
      pTela.innerHTML = resultado.logradouro ?? resultado.address
    })
    .catch(erro => {
      // caso tiver problema
      // exibe erro
      console.error(erro)
      pTela.innerHTML = erro
    })
}


// exemplo all
const verificarCEPall = event => {
  const cep = campoCep.value
  pTela.innerHTML = ''
  // simula busca
  const pViacep = fetch(`https://viacep.com.br/ws/${cep}/json`)
  const pApicep = fetch(`https://ws.apicep.com/cep/${cep}.json`)

  Promise.all([pViacep, pApicep])
    .then(respostas => respostas.map(r => r.json()))
    .then(resultados => {
      // caso sucesso
      // exibe resultados
      resultados[0].then(viacep => {
        pTela.innerHTML += `Viacep: ${viacep.logradouro}<br>`
      })
      resultados[1].then(apicep => {
        pTela.innerHTML += `Apicep: ${apicep.address}<br>`
      })
    })
    .catch(erro => {
      // caso tiver problema
      // exibe erro
      console.error(erro)
      pTela.innerHTML = erro
    })
}



//botaoCep.addEventListener('click', verificarCEPsincrono)
//botaoCep.addEventListener('click', verificarCEPtimeout)
//botaoCep.addEventListener('click', verificarCEPcallback)
//botaoCep.addEventListener('click', verificarCEPpromise)
botaoCep.addEventListener('click', verificarCEPfetch)
//botaoCep.addEventListener('click', verificarCEPrace)
//botaoCep.addEventListener('click', verificarCEPall)
