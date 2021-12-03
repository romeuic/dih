const campoCep = document.querySelector('#campo-cep')
const botaoCep = document.querySelector('#botao-cep')
const pTela = document.querySelector('#p-tela')

// `https://viacep.com.br/ws/9728000/json`

const consultaCepP = () => {
  const cep = campoCep.value
  const url = `https://viacep.com.br/ws/${cep}/json`
  fetch(url)
    .then(response => response.json())
    .then(resultado => {
      pTela.innerHTML = resultado.logradouro
      console.log(resultado)
    })
    .catch(error => {
      pTela.innerHTML = 'Erro!<br>' + error
    })
}

async function consultaCep() {
    try {
      const cep = campoCep.value
      const url = `https://viacep.com.br/ws/${cep}/json`
      const response = await fetch(url)
      const objeto = await response.json()
      pTela.innerHTML = objeto.logradouro
      console.log('Terminou a busca:', objeto)
    }
    catch(error) {
      pTela.innerHTML = 'Erro!<br>' + error
    }
}

consultaCep()

console.log('Eu executo primeiro')

botaoCep.addEventListener('click', consultaCep)
