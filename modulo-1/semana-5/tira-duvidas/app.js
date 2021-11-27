const TYPE = {
  STR: 'string',
  NUM: 'number'
}

class Endereco {
  logradouro
  numero
  cidade
  estado
  pais
  cep
  constructor(log, num, cid, est, pai, cep) {
    if (
      typeof log !== TYPE.STR ||
      typeof num !== TYPE.STR ||
      typeof cid !== TYPE.STR ||
      typeof est !== TYPE.STR ||
      typeof pai !== TYPE.STR ||
      typeof cep !== TYPE.STR
    ) {
      throw 'Endereço inválido!'
    }

    if (!Endereco.validaCEP(cep)) {
      throw 'CEP inválido!'
    }

    this.logradouro = log
    this.numero = num
    this.cidade = cid
    this.estado = est
    this.pais = pai
    this.cep = cep
  }
  static validaCEP(cep) {
    const tamanho = cep.length
    if (tamanho !== 9 || cep[5] !== '-') {
      return false
    }

    for (let i = 0; i < tamanho; i++) {
      if (i !== 5) {
        if (cep[i] < '0' || cep[i] > '9') {
          return false
        }
      }
    }

    return true
  }
}

class Cliente {
  nome
  cpf
  endereco
  numeroDoCelular
  constructor(nome, cpf, end, cel) {
    if (
      typeof nome !== TYPE.STR ||
      typeof cpf !== TYPE.STR ||
      !(end instanceof Endereco) ||
      typeof cel !== TYPE.STR
    ) {
      throw 'Parâmetro inválido!'
    }

    if (!Cliente.testaCPF(cpf)) {
      throw 'CPF inválido!'
    }

    this.nome = nome
    this.cpf = cpf
    this.endereco = end
    this.numeroDoCelular = cel
  }
  static testaCPF(strCPF) {
    let soma = 0
    let resto

    if (
      strCPF == "00000000000" ||
      strCPF.length !== 11
    ) {
      return false
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i)
    }
    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11) {
     resto = 0
    }

    if (resto != parseInt(strCPF.substring(9, 10))) {
      return false
    }

    soma = 0

    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11) {
      resto = 0
    }
    if (resto != parseInt(strCPF.substring(10, 11))) {
      return false
    }
    return true
  }
}

class Conta {
  numeroDaConta
  saldo
  cliente
  constructor(numConta, saldo, cliente) {
    if (
      typeof numConta !== TYPE.STR ||
      typeof saldo !== TYPE.NUM ||
      !(cliente instanceof Cliente)
    ) {
      throw 'Parâmetro inválido!'
    }

    this.numeroDaConta = numConta
    this.saldo = saldo
    this.cliente = cliente
  }
}

const endRomeu = new Endereco(
  'Rod. Admar Gonzaga',
  '2765',
  'Florianópolis',
  'SC',
  'BR',
  '80034-001'
)

const clienteRomeu = new Cliente(
  'Romeu',
  '12345678909',
  endRomeu,
  '+5555999999999'
)

const contaRomeu = new Conta(
  '23456',
  1000,
  clienteRomeu
)

const contaDois = new Conta(
  '23457',
  1000,
  clienteRomeu
)

//console.log(contaRomeu)

/*
for (let i = 0; i < retangulos.length; i++) {
  console.log(retangulos[i].calcularArea())
}
*/

// Ex. 8

class Transacao {
  static #lastId = 0
  #idDeTransacao
  data
  conta
  contaTransferencia
  valorDaTransacao

  constructor(valorDaTransacao, conta, contaTransferencia) {
    if (!(conta instanceof Conta)) {
      throw 'Conta inválida!'
    }
    if (typeof valorDaTransacao !== 'number') {
      throw 'Valor inválido!'
    }
    this.#idDeTransacao = ++Transacao.#lastId
    this.conta = conta
    this.valorDaTransacao = valorDaTransacao
    this.data = Intl.DateTimeFormat().format()
    this.contaTransferencia =
      contaTransferencia instanceof Conta
      ? contaTransferencia
      : null
  }

  #trasferencia() {
    if (!this.contaTransferencia) return
    if (this.conta.saldo - this.valorDaTransacao < 0) {
      alert('Saldo insuficiente!')
      return
    }
    this.conta.saldo -= this.valorDaTransacao
    this.contaTransferencia.saldo += this.valorDaTransacao
  }

  #deposito() {
    if (this.valorDaTransacao > 300) {
      alert('Valor máximo de depósito excedido!')
      return
    }
    this.conta.saldo += this.valorDaTransacao
  }

  executaTransacao() {
    if (this.conta) {
      if (this.contaTransferencia) {
        this.#trasferencia()
      } else {
        this.#deposito()
      }
    }
  }
}

new Transacao(300, contaRomeu, contaDois)
const transRomeu = new Transacao(300, contaRomeu, contaDois)

transRomeu.executaTransacao()

console.log(contaRomeu)
console.log(contaDois)
console.log(transRomeu)

