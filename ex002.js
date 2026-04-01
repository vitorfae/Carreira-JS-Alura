//AT-01
let idade = 18
let maiorDeIdade = idade >= 18

console.log(`Maior de idade? ${maiorDeIdade}`)

//AT-02
let nota1 = 8
let nota2 = 7
let media = (nota1 + nota2) / 2
let PassouDeAno = media >= 7
console.log(`Aprovado? ${PassouDeAno}, com a nota final ${media}`)

//AT-03
let valorCompra = 35.90
let valorPago   = 50
let troco = valorPago - valorCompra
console.log(`Troco a ser devolvido R$${troco.toFixed(2)}`)

//AT-04
let senhaBanco = 'ABC1234'
let senhaDigitada = 'ABC1234'
let senhaValida = senhaBanco === senhaDigitada
console.log(`Senha valida? ${senhaValida}`)

//AT-05
let totalAulas = 20
let faltas = 5
let limitefaltas = totalAulas * 0.25 //25% de falta
console.log(`Minhas faltas ${faltas}, limite permitido ${limitefaltas}`)
console.log(`Reprovei por falta?${faltas > limitefaltas}`)

//AT-06
let temLogin = true
let temSenha = false
console.log(`Tem login e senha? ${temLogin && temSenha}`)

//AT-07
let disponivel = true
console.log(`Nao esta disponivel? ${!disponivel}`)

//AT-08
let numero1 = 2
let numero2 = 3
if (numero1 % 2 === 0 && numero2 % 2 === 0){
    console.log(`${numero1 % 2 === 0 && numero2 % 2 === 0} os numeros sao pares`)
}else{
    console.log(`${numero1 % 2 !== 0 || numero2 % 2 !== 0} um ou ambos sao impares`)
}


//AT-09
let valor = 120
let porcentagem = 15
let total = valor * (porcentagem / 100)
console.log(`${porcentagem}% de ${valor} e igual a ${total}`)

//AT-10
let expressao = 2 + 3 * 5
console.log(`Como a programacao segue os onceitos matematicos a multiplicacao e executada antes da soma ${expressao}`)