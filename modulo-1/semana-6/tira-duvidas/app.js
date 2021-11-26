// Ex. 1
//const mensagemOla = () => 'Olá, Mundo!'
//console.log(mensagemOla())

// Ex. 2
//const mensagemOla = nome => `Olá, ${nome}!`
//console.log(mensagemOla('Romeu'))

// Ex. 3
// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrayInvertido = []
// // const inverte = () => {
// //   for (let i = arrayNumeros.length - 1; i >= 0 ; i--) {
// //     arrayInvertido.push(arrayNumeros[i])
// //   }
// // }
// const inverte = arr => [...arr].reverse()
// arrayInvertido = inverte(arrayNumeros)
// console.log(arrayNumeros)
// console.log(arrayInvertido)

// Ex. 4
// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const encontrado = arrayNumeros.find(item => item > 5)
// console.log('Encontrado: ', encontrado)

// Ex. 5
// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arrayImpares = arrayNumeros.filter(item => item % 2)
// console.log('Ímpares: ', arrayImpares)

// Ex. 6
// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arrayQuadrados = arrayNumeros.map(item => item ** 2)
// console.log('Quadrados: ', arrayQuadrados)


// Ex. 7
// import Pessoa from './Pessoa.js'
// const romeu = new Pessoa('Romeu', '12345678909')
// romeu.imprime()

// Ex. 8
import Funcionario from './Funcionario.js'
const funcionarios = [
  new Funcionario('Romeu', '123', 'Prog', 10),
  new Funcionario('Juliana', '321', 'Prog', 20),
  new Funcionario('Carla', '567', 'Prog', 30),
]
/**
 * Função para calcular soma dos salários
 * @param  {Array} vetor Funcionários
 * @return {Number} Total dos salários
 */
// const calcularSalarios = vetor => {
//   return vetor.reduce((acc, cur) => acc + cur.salario, 0)
// }
const calcularSalarios = vetor => {
  let acumulador = 0
  for (let i = 0; i < vetor.length; i++) {
    acumulador = acumulador + vetor[i].salario
  }
  //vetor.forEach(cur => acc += cur.salario)
  return acumulador
}
//console.log(calcularSalarios(funcionarios))
//funcionarios.forEach(item => item.imprime())
console.log(
  Funcionario.calcularSalarios(funcionarios)
)