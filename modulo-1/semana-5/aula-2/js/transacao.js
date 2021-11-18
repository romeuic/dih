export class Transacao {
  #data
  #preco
  #quantia

  constructor(d, p, q) {
    this.#data = new Date(d.replaceAll('-', '/'))
    this.#preco = p
    this.#quantia = q
  }

  get data() {
    return Intl.DateTimeFormat().format(this.#data)
  }

  get preco() {
    return Transacao.formataPreco(this.#preco)
  }

  get quantia() {
    return `${this.#quantia} unidades`
  }

  get volume() {
    return Transacao.formataPreco(this.#preco * this.#quantia)
  }

  static formataPreco(valor) {
    return `R$ ${valor}`
  }
}
