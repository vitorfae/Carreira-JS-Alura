//AT-01
for(let contador = 1 ; contador <= 10; contador++){
    console.log(contador)
}

console.log('---------------------------------')

//AT-02
let totalContador = 0
for(let contador = 1; contador <= 100; contador++){
    totalContador += contador
}
console.log(`A soma de todos os numeros de 1 a 100 e ${totalContador}`)

console.log('---------------------------------')

//AT-03
const readline = require('readline-sync')
let numeroTabuada = readline.question('digite o numero que deseja saber a tabuada: ')
let multiplos = 0
for(multiplos; multiplos <= 10; multiplos++){
    resultado = multiplos * numeroTabuada
    console.log(`${numeroTabuada} X ${multiplos} = ${resultado}`)
}

console.log('---------------------------------')

//AT-04
let contagemRegressiva = 10
console.log('Contagem regressiva')
while(contagemRegressiva >= 0){
    console.log(contagemRegressiva)
    contagemRegressiva--
}
console.log('Contagem finalizada')

console.log('---------------------------------')

//AT-05
let numeroDigitado
let tentativas = 0
do{
    numeroDigitado = parseInt(readline.question('Digite o numero ate acertar: '))
    tentativas++
    if (numeroDigitado !== 0){
        console.log('Numero errado, tente novamente')
    }else{
        console.log(`Voce acertou o numero em ${tentativas} tentativas`)
    }
}while(numeroDigitado !== 0)

console.log('---------------------------------')
console.log('Voce tem 3 tentativas para acertar o numero secreto')

//AT-06
let numeroChutado
const numeroSecreto = parseInt(7)
for(let contador = 0 ; contador < 3 && numeroChutado != numeroSecreto;contador++){
    numeroChutado = parseInt(readline.question('Adivinhe o numero secreto: '))
    if (numeroChutado == numeroSecreto){
        console.log(`Parabens, voce acertou o numero secreto ${numeroSecreto}`)
    }else{
        console.log('Tente novamente')
    }
}

console.log('---------------------------------')

//AT-07
const anoNascimento = 2004
const anoAtual = 2026
for(let ano = anoNascimento ; ano <= anoAtual; ano++){
    console.log(`Em ${ano} voce tinha ${ano-anoNascimento} anos`)
}

console.log('---------------------------------')

//AT-08
for(let pares = 1; pares <= 50; pares++){
    if (pares % 2 == 0) {
        console.log(`Numeros pares ${pares}`)
    }
}

console.log('---------------------------------')

//AT-09
let cont =1
while(cont <= 100){
    if (cont % 3 == 0){
        console.log(`O valor ${cont} e divisivel por 3`)
    }
    cont++
}

console.log('---------------------------------')

//AT-10
let opcao;
let passo = 0;

do {

  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);