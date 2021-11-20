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

    if (!this.testaCPF(cpf)) {
      throw 'CPF inválido!'
    }

    this.nome = nome
    this.cpf = cpf
    this.endereco = end
    this.numeroDoCelular = cel
  }
  testaCPF(strCPF) {
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

const end = new Endereco(
  'Rod. Admar Gonzaga',
  '2765',
  'Florianópolis',
  'SC',
  'BR',
  '80034-001'
)

const romeu = new Cliente(
  'Romeu',
  '12345678909',
  end,
  '+5555999999999'
)

const conta = new Conta(
  '23456',
  0,
  romeu
)

console.log(conta)

/*
for (let i = 0; i < retangulos.length; i++) {
  console.log(retangulos[i].calcularArea())
}
*/
