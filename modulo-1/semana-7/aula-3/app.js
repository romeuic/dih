const listaCEPs = {
  '88034001': {
    cep: '88034-001',
    logradouro: 'Rodovia Admar Gonzaga',
    complemento: 'de 2026/2027 a 3787/3788',
    bairro: 'Itacorubi',
    localidade: 'Florianópolis',
    uf: 'SC',
    ibge: '4205407',
    gia: '',
    ddd: '48',
    siafi: '8105'
  }
}

const campoCep = document.querySelector('#campo-cep')
const botaoCep = document.querySelector('#botao-cep')
const pTela = document.querySelector('#p-tela')


const delay = ms => new Promise(res => setTimeout(res, ms))


const buscaCEP = async () => {

  try {

    await delay(1000)
    console.log('Terminei de esperar')

  } catch (err) {
    console.error(err)
  }
}


buscaCEP()
console.log('Executei o console log')


const buscaCEPfetch = async () => {
  try {
    const cep = campoCep.value
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}


//botaoCep.addEventListener('click', buscaCEP)
botaoCep.addEventListener('click', buscaCEPfetch)
