
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

// exemplo callback
export function buscaCEPcallback(cep, callback) {

  const resultado = listaCEPs[cep]

  const erro = resultado ? null : 'CEP inválido!'

  callback(erro, resultado)
}

// exemplo promise
export function buscaCEPpromise(cep) {
  return new Promise((resolve, reject) => {
    const resultado = listaCEPs[cep]
    const erro = resultado ? null : 'CEP inválido!'

    if (erro) {
      reject(erro) // vai executar o catch
    } else {
      resolve(resultado) // vai executar o then
    }
  })
}
