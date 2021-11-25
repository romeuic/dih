const mostrar = texto => {
  const display = document.querySelector('#display')
  if (display) {
    display.innerHTML += `<p>${texto}</p>`
  }
}

const logaDiferente = texto => console.log(texto)


mostrar('Olá, GitHub! :)')