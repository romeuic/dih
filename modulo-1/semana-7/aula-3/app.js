const campoCep = document.querySelector('#campo-cep')
const botaoCep = document.querySelector('#botao-cep')
const pTela = document.querySelector('#p-tela')


// Promises

// const testaSeEh2 = numero => {
//   return new Promise((resolve, reject) => {
//     if (numero === 2) {
//       resolve('Eh 2!')
//     } else {
//       reject('Batata!')
//     }
//   })
// }

//testaSeEh2(10)
//   .then(r => console.log(r))
//   .catch(e => console.error('CATCH: ' + e))
//   .finally(() => console.log('Sempre executo!'))

// fetch(`https://viacep.com.br/ws/9728000/json`)
//   .then(response => response.json())
//   .then(objeto => console.log(objeto))
//   .catch(erro => console.log('CATCH: ' + erro))

// async function buscaCepEx() {
//   try {
//     const cep = campoCep.value
//     const URL = `https://viacep.com.br/ws/${cep}/json`
//     const response = await fetch(URL)
//     const { localidade, logradouro } = await response.json()

//     pTela.innerHTML = `
//       Localidade: ${localidade}<br>
//       Logradouro: ${logradouro}
//     `
//   } catch (erro) {
//     console.error('CATCH: ' + erro)
//   }
// }

// botaoCep.addEventListener('click', buscaCepEx)

function buscaCEPpromise() {
  const cep = campoCep.value
  const URL = `https://viacep.com.br/ws/${cep}/json`
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      pTela.innerHTML = data.logradouro
    })
    .catch(err => {
      console.error(err)
    })
}

// cria a função ass[incrna]
async function buscaCEPfetch() {
  try {
    const cep = campoCep.value
    const URL = `https://viacep.com.br/ws/${cep}/json`
    // espera a promise de fetch ser resolvida
    const response = await fetch(URL)
    // espera a promise response.json ser resolvida
    const data = await response.json()
    // tem todos dados necessários para o resto da lógica
    console.log(data)
    pTela.innerHTML = data.logradouro
  } catch (err) {
    // se der algum problema em try, executa o catch
    console.error(err)
  }
}


//botaoCep.addEventListener('click', buscaCEP)
botaoCep.addEventListener('click', buscaCEPfetch)
