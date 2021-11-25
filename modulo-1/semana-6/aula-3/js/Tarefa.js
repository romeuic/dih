import Item from './Item.js'

export default class Tarefa extends Item {
  #status

  constructor(desc, stat = false) {
    super(desc)
    this.#status = stat
  }

  montaItem() {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = this.#status

    checkbox.onclick = () => {
      this.#status = checkbox.checked
    }

    const texto = document.createTextNode(this.descricao)
    li.appendChild(checkbox)
    li.appendChild(texto)
    return li
  }
}
