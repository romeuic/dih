const STR = 'string'

class Endereco {
  logradouro
  numero
  cidade
  estado
  pais
  cep
  constructor(log, num, cid, est, pai, cep) {
    if (
      typeof log !== STR ||
      typeof num !== STR ||
      typeof cid !== STR ||
      typeof est !== STR ||
      typeof pai !== STR ||
      typeof cep !== STR
    ) {
      throw 'Endereço inválido!'
    }

    this.logradouro = log
    this.numero = num
    this.cidade = cid
    this.estado = est
    this.pais = pai
    this.cep = cep
  }
}

class Cliente {
  nome
  cpf
  endereco
  numeroDoCelular
  constructor(nome, cpf, end, cel) {
    if (
      typeof nome !== STR ||
      typeof cpf !== STR ||
      !(end instanceof Endereco) ||
      typeof cel !== STR
    ) {
      throw 'Parâmetro inválido!'
    }

    this.nome = nome
    this.cpf = cpf
    this.endereco = end
    this.numeroDoCelular = cel
  }
}

const end = new Endereco(
  'Rod. Admar Gonzaga',
  '2765',
  'Florianópolis',
  'SC',
  'BR',
  '88034-001'
)

const romeu = new Cliente(
  'Romeu',
  '123.456.789-09',
  end,
  '+5555999999999'
)

console.log(romeu)

/*
for (let i = 0; i < retangulos.length; i++) {
  console.log(retangulos[i].calcularArea())
}
*/
