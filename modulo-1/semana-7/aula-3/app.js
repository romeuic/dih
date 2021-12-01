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
    pTela.innerHTML = data.logradouro
  } catch (err) {
    console.error(err)
  }
}


//botaoCep.addEventListener('click', buscaCEP)
botaoCep.addEventListener('click', buscaCEPfetch)
