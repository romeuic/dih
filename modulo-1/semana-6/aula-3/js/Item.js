export default class Item {
  static #nextId = 0
  #id
  descricao

  constructor(desc = '') {
    this.#id = Item.#nextId++
    this.descricao = desc
  }

  get id() {
    return this.#id
  }

  montaItem() {
    const li = document.createElement('li')
    li.innerHTML = this.descricao
    return li
  }
}
