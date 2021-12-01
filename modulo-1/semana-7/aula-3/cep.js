
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
