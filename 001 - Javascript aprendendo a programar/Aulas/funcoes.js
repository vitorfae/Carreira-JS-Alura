function saudacao(nome) { //Nome e um PARAMETRO da funcao saudacao
    console.log(`Ola, ${nome}`)
}

// chama a função saudacao passando o ARGUMENTO'Vitor', troca o nome por 'Vitor'
saudacao('Vitor')
saudacao('Camila')
saudacao('Lucia')

function calcularDobroDe(numero){
    return numero * 2
    //return numero -> iria retornar 4, tem que ter a operacao
}
const numeroDobrado = calcularDobroDe(10)
console.log(numeroDobrado)

//PODE SER ASSIM TAMBEM
console.log(calcularDobroDe(4))// Precisa de console.log para exibir, pois nao tem na funcao

console.log('teste')//log e uma funcao que exibe os argumentos que recebe

console.log('-----------------------------------------')

//ARROW FUNCTION - sintaxe de flecha, igual a baixo
//const arrowSaudacao = (parametro) => { codigo que a funcao vai executar}

const arrowSaudacao = (name) =>{
    console.log(`Vida longa e prospera ${name}`)
}
arrowSaudacao('Vitor')
arrowSaudacao('Camila')
arrowSaudacao('Lucia')


const arrowCalcularDobroDe = (number) =>{
    return number * 2
}

const arrowNumeroDobrado = arrowCalcularDobroDe(4)
console.log(`O dobro de 4 e: ${arrowNumeroDobrado}`)

console.log('-----------------------------------------')

//simplificando ainda mais funcoes pequenas com um argumento
const simplificaArrowSaudacao = primeiroNome => console.log(primeiroNome)
simplificaArrowSaudacao('Vitor')
simplificaArrowSaudacao('Camila')
simplificaArrowSaudacao('Lucia')

// funcao de dobro - nao preciso do retorno quando feito assim ele se entende.
//const simplificaCalcularDobroDe = valor => {return valor * 2}
const simplificaCalcularDobroDe = valor => valor * 2
const resposta = simplificaCalcularDobroDe(5)
console.log(resposta)