const contador = document.getElementById('contador')
let total = 0

const incrementa = () => {
  total++
  contador.innerHTML = total
}

contador.addEventListener('click', incrementa)