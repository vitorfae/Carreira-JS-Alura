//01
let nome = 'Vitor Matheus Fae Ulrich'
console.log('01')
console.log(`Ola, ${nome}! Seja bem vindo ao curso de Javascript`)
console.log('')

//02
let anoAtual = 2026
let anoNascimento = 2004
let idade = anoAtual - anoNascimento
console.log('02')
console.log(`Voce tem ${idade} anos`)
console.log('')

//03
let cidade = 'Campos Novos'
let estado = 'Santa Catarina'
let pais   = 'Brasil'
console.log('03')
console.log(`Voce esta em ${cidade} - ${estado}, ${pais}`)
console.log('')

//04
let temCarteira = true
console.log('04')
console.log(typeof temCarteira)
console.log('')

//05
let saldo = 0
let deposito = 200
let saque = 50
console.log('05a')
console.log(`Saldo inicial = R$${saldo}, recebi um deposito de R$${deposito} e depois saquei R$${saque}, fiquei com um total de ${deposito - saque}`)
console.log('')
// OU
let valor = 0
valor += 200 //deposito
valor -= 50  //saque
console.log('05b')
console.log(`Valor atual apos deposito e saque R$${valor}`)
console.log('')

//06
let matematica = 10
let portugues = 7
let ciencias = 8.5
let mediaFinal = (matematica + portugues + ciencias) / 3
console.log('06')
console.log(`Media final: ${mediaFinal}`)
console.log('')

//07
let salario = 3000
let aumentoEmPorcentagem = 10 //porcentagem
let novoSalario = 3000 + (3000 * (10/100))
console.log('07')
console.log(`Novo salario apos 10% de aumento: R$${novoSalario}`)
console.log('')

// 08
let cliques = 0
cliques++
cliques++
cliques++
console.log('08')
console.log(`O botao foi clicado ${cliques} vezes`)
console.log('')

//09
let mensagem = 'O numero e'
let numero = 42
let combinado = mensagem + numero
console.log('09')
console.log(combinado)
console.log(typeof combinado)
console.log('')

//10
const PI = 3.14
PI += 15
console.log('10')
console.log(PI)