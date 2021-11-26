import Pessoa from './Pessoa.js'

export default class Funcionario extends Pessoa {
  cargo
  salario
  constructor(nome, cpf, cargo, salario) {
    super(nome, cpf)
    this.cargo = cargo
    this.salario = salario
  }
}
