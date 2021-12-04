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

//consultaCep()

//console.log('Eu executo primeiro')

botaoCep.addEventListener('click', consultaCep)


// Ex.2

const vetA = [1, 2, 3]
const vetB = [4, 5, 6]

function concatena(va, vb) {
  return [...va, ...vb]
}

const concatenado = concatena(vetA, vetB)

//console.log(concatenado)


const objA = { a: 1, b: 2, c: 3 }
const objB = { d: 4, e: 5, f: 6 }

const objC = { ...objB, ...objA }

//console.log(objC)

// Exempo: Semana5 - Ex.3
class Endereco {
  constructor(l, n, c) {
    const params = [l, n, c]
    if (params.some(p => typeof p !== 'string')) {
      throw 'Endereço inválido!'
    }
  }
}


// Exemplo: Semana 3 Ex.6

const agora = new Date()
const ano = agora.getFullYear()
const inicioAno = new Date(`${ano}/01/01`)

console.log(inicioAno)
console.log(agora)
console.log(inicioAno < agora)
