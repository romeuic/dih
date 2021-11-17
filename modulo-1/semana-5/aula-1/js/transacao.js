export class Transacao {
  data
  preco
  quantia

  constructor(data, preco, quantia) {
    this.data = new Date(data.replaceAll('-', '/'))
    this.preco = preco
    this.quantia = quantia
  }

  volume() {
    return this.preco * this.quantia
  }
}
